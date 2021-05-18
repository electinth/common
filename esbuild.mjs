import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';

glob('src/components/**/*.wc.svelte').then((components) =>
  components.forEach((entry) =>
    build({
      entryPoints: [entry],
      outfile: `components/${entry
        .split('/')
        .reverse()[0]
        .replace('.wc.svelte', '.js')}`,
      bundle: true,
      inject: ['src/utils/custom-element.js'],
      plugins: [
        esbuildSvelte({
          preprocess: [
            windi({
              configPath: 'windi.config.js',
              mode: 'prod',
            }),
            sveltePreprocess(),
          ],
          compileOptions: { customElement: true },
        }),
      ],
    }).catch(() => process.exit(1)),
  ),
);
