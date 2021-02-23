---
to: components/<%= h.changeCase.param(componentName) %>.stories.js
---
import './<%= h.changeCase.param(componentName) %>';

export default {
  title: '<%= h.changeCase.title(componentName) %>',
  argTypes: {},
  args: {},
};

export const Primary = () => {
  return `<<%= h.changeCase.param(componentName) %> />`;
};
