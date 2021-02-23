---
inject: true
to: index.js
before: \n\nexport default
skip_if: <%= h.changeCase.param(componentName) %>
---
import <%= h.changeCase.pascal(componentName) %>Element from './components/<%= h.changeCase.param(componentName) %>';