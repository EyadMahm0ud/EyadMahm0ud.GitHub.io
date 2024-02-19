import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eyad Mahmoud',
  favicon: 'img/favicon.ico',
  url: 'https://EyadMahm0ud.GitHub.io',
  baseUrl: '/',
  organizationName: 'EyadMahm0ud',
  projectName: 'EyadMahm0ud.GitHub.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: 
  {
    defaultLocale: 'ar',
    locales: ['ar'],
  },
  presets: 
  [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      (
        {
        docs:
        {
          sidebarPath: './sidebars.js',
        },
        blog: 
        {
          showReadingTime: false,
        },
        theme: 
        {
          customCss: './src/css/custom.css',
        },
        }
      ),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  (
    {
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: 
      {
        title: 'الصفحة الرئيسية',
        logo: 
        {
          alt: 'Salute',
          src: 'img/logo.svg',
        },
        items: 
        [
          {
            to: '/blog',
            label: 'المدونة',
            position: 'left'
          },
          {
            href: 'https://GitHub.com/EyadMahm0ud',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: 
      {
        style: 'dark',
        links:
        [
          {
            title: 'الوثائق',
            items:
            [
              {
                label: 'دليل التعريب',
                href: '/docs/arabization',
              }
            
            ],
          },
          {
            title: 'مواقع موجود فيها',
            items: 
            [
              {
                label: 'Crowdin (ترجمة)',
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
            items: 
            [
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
      prism: 
      {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }
  ),
};

export default config;
