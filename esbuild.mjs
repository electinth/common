import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { preprocess as windiCss } from 'svelte-windicss-preprocess';
import css from 'css';

const GLOBAL_SELECTOR_KEY = ':global(';

const removeGlobalSelector = (selector) =>
  selector.indexOf(GLOBAL_SELECTOR_KEY) === 0
    ? selector.slice(GLOBAL_SELECTOR_KEY.length, selector.length - 1)
    : selector;

const transformStyleForWebComponent = {
  style: ({ content }) => {
    const {
      stylesheet: { rules, ...stylesheetProperties },
      ...styleProperties
    } = css.parse(content);

    const transformedStyleObject = {
      ...styleProperties,
      stylesheet: {
        ...stylesheetProperties,
        rules: rules.map(({ selectors, ...rest }) => ({
          selectors: selectors.map(removeGlobalSelector),
          ...rest,
        })),
      },
    };

    return {
      code: css.stringify(transformedStyleObject, { compress: true }), //css.stringify(transformedStylesheet),
    };
  },
};

(async () => {
  build({
    entryPoints: await glob('./components/**/*.svelte'),
    bundle: true,
    outdir: './dist',
    plugins: [
      esbuildSvelte({
        preprocess: [
          windiCss({
            mode: 'prod',
          }),
          sveltePreprocess(),
          transformStyleForWebComponent,
        ],
        compileOptions: { customElement: true, css: true },
      }),
    ],
  }).catch(() => process.exit(1));
})();
