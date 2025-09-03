import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Xelo-Client.github.io/', // Update this to match your actual repository name
  title: "Xelo-Docs",
  description: "Comprehensive guides, tutorials, and API references for Xelo-Client",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/' },
      { text: 'Themes Guide', link: '/themes/' },
      { text: 'Plugin API', link: '/plugins/plugin-api' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guides/' },
          { text: 'What is Xelo Docs?', link: '/guides/guide' }
        ]
      },
      {
        text: 'Themes',
        items: [
          { text: 'Theme Basics', link: '/themes/basics' },
          { text: 'Creating Custom Themes', link: '/themes/custom' }
        ]
      },
      {
        text: 'Extensions',
        items: [
          { text: 'Plugin API', link: '/plugins/plugin-api' },
          { text: 'Extension Development', link: '/extensions/development' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xed-Editor/Xed-Editor' }
    ],

    footer: {
      message: 'Documentation for Xelo Client customization and extension development.',
      copyright: 'Copyright © 2024 Xelo Team'
    },

    search: {
      provider: 'local'
    }
  }
})