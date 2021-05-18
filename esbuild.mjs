import glob from 'tiny-glob';
import { build } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import { writeFileSync } from 'fs';
import { join } from 'path';

const OUTPUT_DIR = 'components';

glob('src/components/**/*.wc.svelte').then((components) => {
  const buildData = components.map((component) => ({
    entry: component,
    output: component.split('/').reverse()[0].replace('.wc.svelte', '.js'),
  }));

  buildData.forEach(({ entry, output }) =>
    build({
      entryPoints: [entry],
      outfile: join(OUTPUT_DIR, output),
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
  );

  writeFileSync(
    join(OUTPUT_DIR, 'index.js'),
    buildData.map(({ output }) => `import './${output}';\n`).join(''),
  );
});
