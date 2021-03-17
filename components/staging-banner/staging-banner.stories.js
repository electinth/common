import StagingBanner from '.';

customElements.define('staging-banner', StagingBanner);

const Template = ({ productionUrl }) => {
  return `<staging-banner production-url="${productionUrl}" />`;
};

export default {
  title: 'Web Components/Staging Banner',
  argTypes: {
    productionUrl: { control: 'text' },
  },
  args: {
    productionUrl: '',
  },
};

export const Default = Template.bind({});

export const WithProductionURL = Template.bind({});
WithProductionURL.args = {
  ...Default.args,
  productionUrl: 'https://elect.in.th',
};
