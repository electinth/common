import glob from 'tiny-glob';

if (!process.argv[2]) {
  console.error('Please specific glob pattern');
  process.exit(1);
}

const pattern = process.argv[2];

(async () => console.log((await glob(pattern)).join('\n')))();
