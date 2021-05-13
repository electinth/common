---
to: src/components/<%= h.changeCase.param(componentName) %>/<%= h.changeCase.param(componentName) %>.stories.svelte
---
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import <%= h.changeCase.pascal(componentName) %> from './<%= h.changeCase.param(componentName) %>.wc.svelte';

</script>

<Meta
  title="Components/<%= h.changeCase.param(componentName) %>"
  component={<%= h.changeCase.pascal(componentName) %>}
  argTypes={{
    someprop: { control: 'text' },
  }}
/>

<Template let:args>
  <<%= h.changeCase.pascal(componentName) %> {...args} />
</Template>

<Story
  name="Primary"
  args={{
    someprop: '',
  }}
/>
