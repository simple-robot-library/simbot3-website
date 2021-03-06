// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/*
标签
https://infima.dev/docs/components/badge
<span class="badge badge--primary">Primary</span>
 */

const firstYear = 2022
const currentYear = new Date().getFullYear()
const copyrightYear = currentYear === firstYear ? firstYear : firstYear + '-' + currentYear

const styles = ['primary', 'dark', undefined]

// const day = new Date().getDay()

// const navbarStyle = styles[day % 3]
const navbarStyle = styles['dark']

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
          // version
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.0.0-beta',
              // path: '3.0.0.preview',
              // banner: '',
              badge: true
            },
          },
        },
        blog: {
          blogTitle: 'Simbot Blog',
          blogDescription: '与simbot相关的或者不相关的各种博客！',
          showReadingTime: true,
          editUrl: 'https://github.com/simple-robot-library/simbot3-website/blob/main',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            title: 'Simple Robot Blog',
            description: 'Simple Robot官方博客喵',
            copyright: `Copyright © ${copyrightYear} Forte Scarlet.`,
            language: 'zh-CN'
          }
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: [
              require.resolve('./src/css/custom.css'),
          ],
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
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },

      // 公告
      announcementBar: {
        id: 'still_under_construction',
        content: `🚧 <b>尚在施工中...</b> 🚧 一切内容以<a href="https://github.com/ForteScarlet/simpler-robot">仓库</a>和代码中实际内容为准。`,
        backgroundColor: '#FFB906',
        textColor: '#142F48',
        isCloseable: false

      },

      // autoCollapseSidebarCategories: true,
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
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: 'API文档',
                to: 'https://simple-robot-library.github.io/simbot3-main-apiDoc/',
              },

            ],
          },
          {
            title: "博客",
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                html: `<a class="footer__link-item" href="/blog/rss.xml">Rss订阅</a> <sup><i class="bi bi-rss-fill"></i></sup></a>`
              },
              {
                html: `<a class="footer__link-item" href="/blog/atom.xml">Atom订阅 <sup><i class="bi bi-rss-fill"></i></sup></a>`
              },
              {
                html: `<a class="footer__link-item" href="/blog/feed.json">Json订阅</a> <sup><i class="bi bi-rss-fill"></i></sup></a>`
              },
            ]
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub ',
                href: 'https://github.com/ForteScarlet/simpler-robot',
              },
              {
                label: 'Gitee镜像 ',
                href: 'https://gitee.com/ForteScarlet/simpler-robot',
              },
              {
                label: '组织库 🏢',
                href: 'https://github.com/simple-robot',
              },
              {
                label: '图书馆 📚',
                href: 'https://github.com/simple-robot-library',
              },
            ],
          },
          {
            title: '交流&反馈',
            items: [
              {
                label: 'Issues',
                href: 'https://github.com/ForteScarlet/simpler-robot/issues',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/ForteScarlet/simpler-robot/discussions',
              },
            ],
          },
        ],
        copyright: `Built with <a href="https://www.docusaurus.cn/">Docusaurus</a>. <br> Copyright © ${copyrightYear} Forte Scarlet.`,
      },
      prism: {
        additionalLanguages: ['java', 'kotlin', 'groovy', 'properties'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
            block: {start: 'error-start', end: 'error-end'},
          },
          {
            className: 'code-block-success-line',
            line: 'This is success',
            block: {start: 'success-start', end: 'success-end'},
          },
        ],
      },
    }),

  // i18n: {
  //   defaultLocale: 'zh-CN',
  //   locales: ['zh-CN']
  // }
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
