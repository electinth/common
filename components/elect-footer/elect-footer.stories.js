import ElectFooter from '.';

customElements.define('elect-footer', ElectFooter);

const Template = () => {
  return `<elect-footer />`;
};

export default {
  title: 'Elect Footer',
  argTypes: {},
  args: {},
};

export const Default = Template.bind({});
