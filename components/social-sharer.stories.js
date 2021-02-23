import './social-sharer';

export default {
  title: 'Social Sharer',
  argTypes: {
    url: { control: 'text' },
    light: { control: 'boolean' },
  },
  args: {
    url: 'https://elect.in.th',
    light: false,
  },
};

export const Default = ({ url, light }) => {
  return `<social-sharer url="${url}" ${light ? 'light' : ''} />`;
};
