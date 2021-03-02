import { Configuration, create } from 'twind';
import { virtualSheet } from 'twind/sheets';

interface HybridClass {
  [className: string]: boolean;
}
type GetTailwindClassForHybrids = (value: string | HybridClass) => HybridClass;
type ParseSheet = () => string;

export const defaultTheme = {
  fontFamily: {
    heading: ['Kondolar Thai', 'serif'],
    subtitle: ['Anuphan', 'sans-serif'],
    body: ['Bai Jamjuri', 'sans-serif'],
  },
};

export const setupTailwind = (
  config: Configuration = { theme: defaultTheme },
): {
  tw: GetTailwindClassForHybrids;
  parseSheet: ParseSheet;
} => {
  const sheet = virtualSheet();
  const { tw } = create({ sheet, ...config });

  const getTailwindClassForHybrids: GetTailwindClassForHybrids = (value) => {
    const classList = tw(value);

    if (typeof value === 'string') {
      return classList.split(' ').reduce(
        (obj: HybridClass, className: string) => ({
          ...obj,
          [className]: true,
        }),
        {},
      );
    }

    return value;
  };

  const parseSheet: ParseSheet = () => sheet.target.join('\n');

  return {
    tw: getTailwindClassForHybrids,
    parseSheet,
  };
};
