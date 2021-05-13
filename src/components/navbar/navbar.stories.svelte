<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import NavigationBar from './navbar.wc.svelte';

</script>

<Meta
  title="Components/navbar"
  component={NavigationBar}
  argTypes={{
    title: { control: 'text' },
    dark: { control: 'boolean' },
    logo: { control: 'text' },
    mobilenewlineslot: { control: 'boolean' },
  }}
/>

<Template let:args>
  <NavigationBar {...args}
    ><div class="text-gray-500">slot rendered here!</div></NavigationBar
  >
</Template>

<Story name="Default" />

<Story
  name="With Title"
  args={{
    title: 'CIVIL MOVEMENT 2020',
  }}
/>

<Story
  name="Custom Logo"
  args={{
    logo: 'https://via.placeholder.com/100x20',
  }}
/>
