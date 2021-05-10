import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { preprocess as windiCss } from 'svelte-windicss-preprocess';
import transformStyleForWebComponent from './utils/style.mjs';

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
