import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { preprocess as windiCss } from 'svelte-windicss-preprocess';
import transformStyleForWebComponent from './style.mjs';

(async () => {
  const components = await glob('src/components/**/*.wc.svelte');

  components.forEach((componentPath) => {
    const fileName = componentPath
      .split('/')
      .reverse()[0]
      .replace('.wc.svelte', '.js');

    build({
      entryPoints: [componentPath],
      outfile: `./components/${fileName}`,
      bundle: true,
      outdir: '',
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
  });
})();
