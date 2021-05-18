const sveltePreprocess = require('svelte-preprocess');
const { windi } = require('svelte-windicss-preprocess');

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
  ],
  svelteOptions: {
    preprocess: [sveltePreprocess(), windi({ configPath: 'windi.config.js' })],
  },
};
