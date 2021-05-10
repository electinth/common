<svelte:options tag="elect-footer" />

<script lang="ts">
  import { boonmeIcon, iLawIcon, punchUpIcon } from './companies';
  import { electLogo } from './elect';
  import { facebookIcon, twitterIcon } from './social';

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
</script>

<div
  class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 px-8 py-16 bg-black text-white font-body"
>
  <div class="col-span-2 lg:col-span-1 flex flex-row md:(flex-col mb-8 mb-0)">
    <div class="flex-1 flex">
      <a href="https://elect.in.th" class="mb-auto w-20 md:w-28 lg:w-32 h-auto">
        {@html electLogo}
      </a>
    </div>
    <div class="flex-1 md:flex-grow-0 flex flex-row space-x-4">
      {#each companyLinks as { image, imageMd, url }}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div src={image} class="h-5 md:(hidden h-6)">
            {@html image}
          </div>
          <div src={imageMd} class="hidden md:block h-4 lg:h-6">
            {@html imageMd}
          </div>
        </a>
      {/each}
    </div>
  </div>

  <div class="flex-1 flex flex-col justify-between md:text-center">
    {#each internalLinks as { text, link }}
      <div class="flex justify-start lg:justify-center">
        <a
          href={link}
          class="block p-1 hover:(bg-white text-black) font-heading text-sm md:text-base"
        >
          {text}
        </a>
      </div>
    {/each}
  </div>

  <div class="flex flex-col space-y-6 md:ml-auto">
    <div class="flex flex-col space-y-1">
      <p class="font-heading text-xs md:text-sm lg:text-base font-black">
        ABOUT US
      </p>
      <a
        href="https://elect.in.th/about/"
        class="hover:underline text-xs md:text-sm lg:text-sm"
      >
        เราคือใคร.. ทำไมต้อง Elect?
      </a>
    </div>
    <div class="flex flex-col space-y-1">
      <p class="font-heading text-xs md:text-sm lg:text-base font-black">
        CONTACT US
      </p>
      <a
        href="mailto:contact@elect.in.th"
        class="hover:underline text-xs md:text-11 lg:text-sm"
      >
        E-mail : contact@elect.in.th
      </a>
    </div>
    <div class="flex flex-col space-y-1">
      <p class="font-heading text-xs md:text-sm lg:text-base font-black">
        FOLLOW US
      </p>
      <div class="flex flex-row">
        {#each followLinks as { icon, url }}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="h-4 m-2"
          >
            {@html icon}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
