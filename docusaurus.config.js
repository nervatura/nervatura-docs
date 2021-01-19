module.exports = {
  title: 'Nervatura Docs',
  tagline: 'The tagline of my site',
  url: 'https://nervatura.github.io',
  baseUrl: '/nervatura/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nervatura', // Usually your GitHub org/user name.
  projectName: 'nervatura', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Nervatura',
      logo: {
        alt: 'Nervatura App Logo',
        src: 'img/logo192.png',
      },
      items: [
        {
          to: 'model',
          position: 'left',
          label: 'MODEL',
        },
        {
          to: 'api',
          position: 'left',
          label: 'API',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'CLIENT',
          position: 'left',
        },
        {
          href: 'https://github.com/nervatura/nervatura',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Nervatura Logo',
        src: 'img/ntura_green80.png',
        href: 'https://nervatura.com'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Nervatura. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus2-dotenv'
  ],
};
