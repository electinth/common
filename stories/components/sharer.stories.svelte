<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import SocialSharer from '../../components/sharer.svelte';
</script>

<Meta
  title="Components/sharer"
  component={SocialSharer}
  argTypes={{
    url: { control: 'text' },
    light: { control: 'boolean' },
    hideLabel: { control: 'boolean' },
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
