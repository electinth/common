---
to: components/<%= h.changeCase.param(componentName) %>/index.js
---
import { html } from 'hybrids';

const <%= h.changeCase.pascal(componentName) %> = {
  render: () => html`<div><%= h.changeCase.pascal(componentName) %></div>`,
};

export default <%= h.changeCase.pascal(componentName) %>;
