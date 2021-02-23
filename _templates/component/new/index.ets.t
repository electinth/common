---
inject: true
to: index.js
append: true
skip_if: <%= h.changeCase.param(componentName) %>
---
import './components/<%= h.changeCase.param(componentName) %>';