const sveltePreprocess = require('svelte-preprocess');
const svelteWindi = require('svelte-windicss-preprocess');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
  ],
  svelteOptions: {
    preprocess: [sveltePreprocess(), svelteWindi.preprocess()],
  },
};
