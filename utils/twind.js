import { create } from 'twind';
import { virtualSheet } from 'twind/sheets';

export const setupTailwind = (config = {}) => {
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
