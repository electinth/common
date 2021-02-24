import { define } from 'hybrids';
import ElectFooter from '.';

define({ ElectFooter });

const Template = () => {
  return `<elect-footer />`;
};

export default {
  title: 'Elect Footer',
  argTypes: {},
  args: {},
};

export const Default = Template.bind({});
