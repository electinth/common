<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import SocialSharer from './sharer.wc.svelte';

</script>

<Meta
  title="Components/sharer"
  component={SocialSharer}
  argTypes={{
    url: { control: 'text' },
    light: { control: 'boolean' },
    hidelabel: { control: 'boolean' },
    vertical: { control: 'boolean' },
  }}
/>

<Template let:args>
  <SocialSharer {...args} />
</Template>

<Story
  name="Primary"
  args={{
    url: 'https://elect.in.th',
  }}
/>

<Story
  name="Vertical"
  args={{
    url: 'https://elect.in.th',
    vertical: true,
  }}
/>
