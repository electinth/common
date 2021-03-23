import NavigationBar from '.';

customElements.define('navigation-bar', NavigationBar);

const Template = ({
  titleText,
  slot,
  dark,
  logoUrl,
  showSlotInNewRowOnMobile,
}) => `
  <navigation-bar title-text="${titleText}" ${
  dark ? 'dark' : ''
} logo-url="${logoUrl}" ${
  showSlotInNewRowOnMobile ? 'show-slot-in-new-row-on-mobile' : ''
}>
    ${slot ? slot : ''}
  </navigation-bar>
`;

export default {
  title: 'Web Components/Navigation Bar',
  argTypes: {
    titleText: { control: 'text' },
    slot: { control: 'text' },
    dark: { control: 'boolean' },
    logoUrl: { control: 'text' },
    showSlotInNewRowOnMobile: { control: 'boolean' },
  },
  args: {
    titleText: '',
    slot: '',
    dark: false,
    logoUrl: '',
    showSlotInNewRowOnMobile: false,
  },
};

export const Default = Template.bind({});

export const withTitle = Template.bind({});
withTitle.args = { ...Default.args, titleText: 'CIVIL MOVEMENT 2020' };

export const withSlot = Template.bind({});
withSlot.args = {
  ...withTitle.args,
  slot:
    '<div style="margin: auto 0; text-align:center; color: gray;">slot rendered here</div>',
};

export const withCustomLogo = Template.bind({});
withCustomLogo.args = {
  ...withTitle.args,
  logoUrl: 'https://via.placeholder.com/100x20',
};
