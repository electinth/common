import css from 'css';

const GLOBAL_SELECTOR_KEY = ':global(';

const removeGlobalSelector = (selector) => {
  const globalKeyIndex = selector.indexOf(GLOBAL_SELECTOR_KEY);

  if (globalKeyIndex < 0) {
    return selector;
  }

  return selector.slice(GLOBAL_SELECTOR_KEY.length, selector.length - 1);
};

const parseRules = (rules) =>
  rules.map((rule) => {
    if (rule.type === 'media') {
      return {
        ...rule,
        rules: parseRules(rule.rules),
      };
    } else {
      return {
        ...rule,
        selectors: rule.selectors
          ? rule.selectors.map(removeGlobalSelector)
          : undefined,
      };
    }
  });

const transformStyleForWebComponent = {
  style: ({ content }) => {
    const {
      stylesheet: { rules, ...stylesheetProperties },
      ...styleProperties
    } = css.parse(content);

    const transformedStyleObject = {
      ...styleProperties,
      stylesheet: {
        ...stylesheetProperties,
        rules: parseRules(rules),
      },
    };

    return {
      code: css.stringify(transformedStyleObject, { compress: true }),
    };
  },
};

export default transformStyleForWebComponent;
