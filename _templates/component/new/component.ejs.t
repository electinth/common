---
to: src/components/<%= h.changeCase.param(componentName) %>/<%= h.changeCase.param(componentName) %>.wc.svelte
---
<svelte:options tag="elect-<%= h.changeCase.param(componentName) %>" />

<script lang="ts">
  export let someprop: string = '';
</script>

<div>
  elect-<%= h.changeCase.param(componentName) %> with someprop = {someprop}
</div>

<style windi:preflights>
</style>
