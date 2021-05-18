import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: '@electinth/common',
    brandImage:
      'https://elect.in.th/wp-content/themes/elect/dist/images/logo-white.png',
  }),
});
