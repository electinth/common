import { html } from 'hybrids';
import { setupTailwind } from '../../utils/twind';
import { boonmeIcon, iLawIcon, punchUpIcon } from './icons/companies';
import { electLogo } from './icons/elect';
import { facebookIcon, twitterIcon } from './icons/social';

const { tw, parseSheet } = setupTailwind();

const internalLinks = [
  { text: 'VISUALIZATION', link: 'https://elect.in.th/visualization/' },
  { text: 'TOOLS', link: 'https://elect.in.th/tool/' },
  { text: 'ARTICLE', link: 'https://elect.in.th/article/' },
  { text: 'INFOGRAPHIC', link: 'https://elect.in.th/infographic/' },
  { text: 'DOWNLOAD DATA', link: 'https://elect.in.th/download-data/' },
];

const companyLinks = [
  {
    image: punchUpIcon.small,
    imageMd: punchUpIcon.large,
    url: 'https://punchup.world/',
  },
  {
    image: boonmeIcon.small,
    imageMd: boonmeIcon.large,
    url: 'https://www.boonmeelab.com/',
  },
  {
    image: iLawIcon.small,
    imageMd: iLawIcon.small,
    url: 'https://ilaw.or.th',
  },
];

const followLinks = [
  {
    icon: facebookIcon,
    url: 'https://www.facebook.com/electinth/',
  },
  {
    icon: twitterIcon,
    url: 'https://twitter.com/electinth/',
  },
];

const ElectFooter = {
  render: () =>
    html`
      <div
        class="${tw(
          'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 px-8 py-16 bg-black text-white',
        )}"
      >
        <div
          class="${tw(
            'col-span-2 lg:col-span-1 flex flex-row md:flex-col mb-8 md:mb-0',
          )}"
        >
          <div class="${tw('flex-1 flex')}">
            <a
              href="https://elect.in.th"
              class="${tw('mb-auto w-20 md:w-28 lg:w-32 h-auto')}"
            >
              ${electLogo}
            </a>
          </div>
          <div class="${tw('flex-1 md:flex-grow-0 flex flex-row space-x-4')}">
            ${companyLinks.map(
              ({ image, imageMd, url }) => html`
                <a href=${url} target="_blank" rel="noopener noreferrer">
                  <div src=${image} class="${tw('md:hidden h-5 md:h-6')}">
                    ${image}
                  </div>
                  <div
                    src=${imageMd}
                    class="${tw('hidden md:block h-4 lg:h-6')}"
                  >
                    ${imageMd}
                  </div>
                </a>
              `,
            )}
          </div>
        </div>

        <div
          class="${tw('flex-1 flex flex-col justify-between md:text-center')}"
        >
          ${internalLinks.map(
            ({ text, link }) => html`
              <div class="${tw('flex justify-start lg:justify-center')}">
                <a
                  href=${link}
                  class="${tw(
                    'block hover:bg-white p-1 hover:text-black font-heading text-12 md:text-14 lg:text-16',
                  )}"
                >
                  ${text}
                </a>
              </div>
            `,
          )}
        </div>

        <div class="${tw('flex flex-col space-y-6 md:ml-auto')}">
          <div class="${tw('flex flex-col space-y-1')}">
            <p
              class="${tw(
                'font-heading text-10 md:text-12 lg:text-14 font-black',
              )}"
            >
              ABOUT US
            </p>
            <a
              href="https://elect.in.th/about/"
              class="${tw('hover:underline text-10 md:text-11 lg:text-12')}"
            >
              เราคือใคร.. ทำไมต้อง Elect?
            </a>
          </div>
          <div class="${tw('flex flex-col space-y-1')}">
            <p
              class="${tw(
                'font-heading text-10 md:text-12 lg:text-14 font-black',
              )}"
            >
              CONTACT US
            </p>
            <a
              href="mailto:contact@elect.in.th"
              class="${tw('hover:underline text-10 md:text-11 lg:text-12')}"
            >
              E-mail : contact@elect.in.th
            </a>
          </div>
          <div class="${tw('flex flex-col space-y-1')}">
            <p
              class="${tw(
                'font-heading text-10 md:text-12 lg:text-14 font-black',
              )}"
            >
              FOLLOW US
            </p>
            <div class="${tw('flex flex-row')}">
              ${followLinks.map(
                ({ icon, url }) => html`
                  <a
                    href="${url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="${tw('h-4 m-2')}"
                  >
                    ${icon}
                  </a>
                `,
              )}
            </div>
          </div>
        </div>
      </div>
    `.style(parseSheet()),
};

export default ElectFooter;
