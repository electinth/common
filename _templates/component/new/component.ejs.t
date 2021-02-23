---
to: components/<%= h.changeCase.param(componentName) %>.js
---
import { html, define } from 'hybrids';

export const <%= h.changeCase.pascal(componentName) %> = {
  render: () => html`<div><%= h.changeCase.pascal(componentName) %></div>`,
};

define('<%= h.changeCase.param(componentName) %>', <%= h.changeCase.pascal(componentName) %>);
