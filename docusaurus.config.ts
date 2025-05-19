import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NetworkWilbiDocs',
  tagline: 'A community-driven effort to find the balance between security and convenience.',
  favicon: 'img/cyber_logo_favicon.ico',

  // Adopt Docusaurus Faster
  future: {
    experimental_faster: true,
  },
  
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'networkwilbi', // Usually your GitHub org/user name.
  projectName: 'NetworkWilbiDocs', // Usually your repo name.

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
      {
        docs: {
          // Show last updated time and by who
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/networkwilbi/NetworkWilbiDocs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/networkwilbi/NetworkWilbiDocs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'blue-shield-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'NetworkWilbiDocs',
      logo: {
        alt: 'NetworkWilbiDocs Logo',
        src: 'img/cyber_logo.svg',
      },
      items: [
        {
          to: '/docs',
          label: 'Introduction',
          position: 'left',
        },
        {
          label: 'Password Managers',
          position: 'left',
          items: [
            {
              to: '/docs/password-managers/bitwarden',
              label: 'Bitwarden',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/puP5WBbdky',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/networkwilbi/NetworkWilbiDocs'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NetworkWilbiDocs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dax', 'csharp', 'powerquery', 'powershell', 'yaml', 'nginx', 'editorconfig', 'typescript', 'javascript', 'systemd', 'ini', 'bash', 'apacheconf'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
