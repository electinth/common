import Footer from '.';

customElements.define('elect-footer', Footer);

const Template = () => {
  return `<elect-footer />`;
};

export default {
  title: 'Web Components/Footer',
  argTypes: {},
  args: {},
};

export const Default = Template.bind({});
