---
to: components/<%= h.changeCase.param(componentName) %>/<%= h.changeCase.param(componentName) %>.stories.js
---
import { define } from 'hybrids';
import <%= h.changeCase.pascal(componentName) %> from '.';

define({ <%= h.changeCase.pascal(componentName) %> });

const Template = () => {
  return `<<%= h.changeCase.param(componentName) %> />`;
};

export default {
  title: '<%= h.changeCase.title(componentName) %>',
  argTypes: {},
  args: {},
};

export const Default = Template.bind({});
