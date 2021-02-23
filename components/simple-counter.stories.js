import './simple-counter';

export default {
  title: 'Simple Counter',
  argTypes: {
    count: { control: 'number' },
  },
  args: {
    count: 0,
  },
};

export const Primary = ({ count }) => {
  return `<simple-counter count=${count} />`;
};
