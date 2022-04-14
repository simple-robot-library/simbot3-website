// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const firstYear = 2022
const currentYear = new Date().getFullYear()
const copyrightYear = currentYear === firstYear ? firstYear : firstYear + '-' + currentYear

const styles = ['primary', 'dark', undefined]

const day = new Date().getDay()

const navbarStyle = styles[day % 3]

// https://docusaurus.io/zh-CN
// https://mui.com/zh/getting-started/installation/

// npm run docusaurus docs:version 3.0.0-preview.0.1

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simple Robot',
  tagline: '欢迎，我的朋友。',
  url: 'https://simbot.forte.love',
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
          editUrl: 'https://github.com/simple-robot-library/simbot3-website/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/simple-robot-library/simbot3-website/blob/main',
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
        name: 'keywords', content: 'forte, forte-scarlet, fortescarlet, simbot, simple-robot, bot'
      }],

      image: 'img/logo.png',

      // https://www.algolia.com/account/api-keys/all?applicationId=XJ6OXX8I3C
      // TODO algolia not ready yet.
      // algolia: {
      //   appId: 'VLLZ4JZE8Z',
      //
      //   // Public API key: it is safe to commit it
      //   apiKey: 'e60d9ee16618a0ad3a338ecc73cb840e',
      //
      //   indexName: 'doc',
      //
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push.
      //   // Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   // externalUrlRegex: 'external\\.com|domain\\.com',
      //
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      //
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      // },

      // 公告
      announcementBar: {
        id: 'still_under_construction',
        content: `🚧 <b>尚在施工中...</b>`,
        backgroundColor: '#FFB906',
        textColor: '#142F48',
        isCloseable: true

      },

      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      navbar: {
        style: navbarStyle,
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
            title: '文档',
            items: [
              {
                label: '文档首页',
                to: '/docs/intro',
              },

            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/simple-robot',
              },
            ],
          },
          {
            title: '可能感兴趣',
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
        copyright: `Built with <a href="https://www.docusaurus.cn/">Docusaurus</a>. <br> Copyright © ${copyrightYear} Forte Scarlet.`,
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



/*
DocCardList
{
  docId: "component-overview/mirai/index"
  href: "/docs/component-overview/mirai/"
  label: "Mirai组件"
  type: "link"
}
 */
