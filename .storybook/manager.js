import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'ELECT Common',
});

addons.setConfig({
  theme: theme,
});
