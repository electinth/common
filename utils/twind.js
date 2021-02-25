import { create } from 'twind';
import { virtualSheet } from 'twind/sheets';

export const defaultTheme = {
  fontFamily: {
    heading: ['Kondolar Thai', 'serif'],
    subtitle: ['Anuphan', 'sans-serif'],
    body: ['Bai Jamjuri', 'sans-serif'],
  },
};

export const setupTailwind = (config = { theme: defaultTheme }) => {
  const sheet = virtualSheet();
  const { tw } = create({ sheet, ...config });

  const getTailwindClassForHybrids = (value) => {
    const classes = tw(value).split(' ');
    return classes.length > 1 ? classes : value;
  };

  const parseSheet = () => sheet.target.join('\n');

  return {
    tw: getTailwindClassForHybrids,
    parseSheet,
  };
};
