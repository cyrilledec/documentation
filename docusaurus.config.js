const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ONCHAINID',
  tagline: 'Documentation',
  url: 'https://docs.onchainid.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'onchain-id', // Usually your GitHub org/user name.
  projectName: 'ONCHAINID', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ONCHAINID',
      logo: {
        alt: 'Logo ONCHAINID',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'concepts/intro',
          position: 'left',
          label: 'Concepts',
        },
        {
          type: 'doc',
          docId: 'developers/intro',
          position: 'left',
          label: 'Developers',
        },
        {
          type: 'doc',
          docId: 'about/license',
          position: 'left',
          label: 'About',
        },
        {
          href: 'https://github.com/onchain-id/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Concepts',
              to: '/docs/concepts/intro',
            },
            {
              label: 'Developers',
              to: '/docs/developers/intro',
            },
            {
              label: 'About',
              to: '/docs/about/license',
            },
          ],
        },
        {
          title: 'Community',
          items: [],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Onepager',
              to: 'https://onchainid.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/onchain-id/documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ONCHAINID, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/onchain-id/documentation/edit/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/onchain-id/documentation/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
