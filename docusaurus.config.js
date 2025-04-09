// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Monster Hunter 5e',
  tagline: 'Preyline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://skaynor.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wildhunts-campaign/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'skaynor', // Usually your GitHub org/user name.
  projectName: 'wildhunts-campaign', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/background.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'MH Crest',
          src: 'img/monster_hunter_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'resourceSidebar',
            position: 'left',
            label: 'Resources',
          },
          {
            type: 'docSidebar',
            sidebarId: 'loreSidebar',
            position: 'left',
            label: 'Lore',
          },
          {
            type: 'docSidebar',
            sidebarId: 'playersSidebar',
            position: 'left',
            label: 'Players',
          },
          {
            href: 'https://github.com/skaynor/wildhunts-campaign',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
