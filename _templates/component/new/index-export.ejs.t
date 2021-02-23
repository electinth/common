---
inject: true
to: index.js
append: true
skip_if: <%= h.changeCase.param(componentName) %>
---
export const <%= h.changeCase.pascal(componentName) %> = <%= h.changeCase.pascal(componentName) %>Element;