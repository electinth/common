import { build } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { preprocess as windiCss } from 'svelte-windicss-preprocess';
import transformStyleForWebComponent from './style.mjs';

if (!process.argv[2]) {
  console.error('Please specific entry point');
  process.exit(1);
}

const entry = process.argv[2];

const output = entry.split('/').reverse()[0].replace('.wc.svelte', '.js');

await build({
  entryPoints: [entry],
  outfile: `./components/${output}`,
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
      compileOptions: { customElement: true },
    }),
  ],
}).catch(() => process.exit(1));
