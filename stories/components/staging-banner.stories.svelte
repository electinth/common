<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import StagingBanner from '../../components/staging-banner.svelte';
</script>

<Meta
  title="Components/staging-banner"
  component={StagingBanner}
  argTypes={{
    productionUrl: { control: 'text' },
  }}
/>

<Template let:args>
  <StagingBanner {...args} />
</Template>

<Story
  name="Primary"
  args={{
    productionUrl: '',
  }}
/>
