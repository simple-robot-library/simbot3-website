// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// https://docusaurus.io/zh-CN
// https://mui.com/zh/getting-started/installation/

// npm run docusaurus docs:version 3.0.0-preview.0.1

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simple Robot',
  tagline: '欢迎，我的朋友。欢迎来到 Simple Robot',
  url: 'http://simbot.forte.love',
  baseUrl: '/',
  onBrokenLinks: 'warn', //  [ignore, log, warn, error, throw]
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Simple Robot', // Usually your GitHub org/user name.
  projectName: 'simbot', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/simple-robot-library/simbot3-website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/simple-robot-library/simbot3-website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{
        name: 'keywords', content: 'forte, forte-scarlet, fortescarlet, simbot, simple-robot'
      }],

      // https://www.algolia.com/account/api-keys/all?applicationId=XJ6OXX8I3C
      algolia: {
        appId: 'VLLZ4JZE8Z',

        // Public API key: it is safe to commit it
        apiKey: 'e60d9ee16618a0ad3a338ecc73cb840e',

        indexName: 'doc',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push.
        // Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },

      // 公告
      announcementBar: {
        id: 'still_under_construction',
        content: `🚧 <b>尚在施工中...</b>`,
        backgroundColor: '#FFB906',
        textColor: '#142F48',
        isCloseable: true

      },

      hideableSidebar: true,
      // autoCollapseSidebarCategories: true,
      navbar: {
        hideOnScroll: true,
        title: 'Simple Robot',
        logo: {
          alt: 'Simple Robot Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
            ////////
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/ForteScarlet/simpler-robot',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/simple-robot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }, {
                label: 'GitHub',
                href: 'https://github.com/simple-robot',
              }, {
                label: 'Issues',
                href: 'https://github.com/ForteScarlet/simpler-robot/issues',
              },
            ],
          },
        ],
        copyright: `Built with <a href="https://www.docusaurus.cn/">Docusaurus</a>. <br> Copyright © ${new Date().getFullYear()} Forte Scarlet.`,
      },
      prism: {
        additionalLanguages: ['java', 'kotlin', 'groovy'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  }
};

module.exports = config;
