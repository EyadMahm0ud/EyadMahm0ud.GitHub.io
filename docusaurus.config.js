// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eyad Mahmoud',
  tagline: 'مدونتي الخاصة التي أنشر فيها تجاربي عبر الإنترنت.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://EyadMahm0ud.GithHub.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EyadMahm0ud', // Usually your GitHub org/user name.
  projectName: 'N/A', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
      image: 'img/social-card.jpg',
      navbar: {
        title: 'الصفحة الرئيسية',
        logo: {
          alt: 'Salute',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'المدونة', position: 'right'},
          {
            href: 'https://GitHub.com/EyadMahm0ud',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'الوثائق',
            items: [
              {
                label: 'لمحة',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'مواقع التواصل الإجتماعي',
            items: [
              {
                label: 'فيسبوك',
                href: 'https://Facebook.com/EyadMahm0ud',
              },
              {
                label: 'X (تويتر)',
                href: 'https://x.com/EyadMahm0ud',
              },
            ],
          },
          {
            title: 'المزيد',
            items: [
              {
                label: 'المدونة',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://GitHub.com/EyadMahm0ud',
              },
            ],
          },
        ],
        copyright: `حقوق النشر © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
