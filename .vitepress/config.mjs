import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Xelo-docs/', // Fix this to match your repository name
  title: "Xelo-Docs",
  description: "Comprehensive guides, tutorials, and API references for Xelo-Client",
  ignoreDeadLinks: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/' },
      {text: 'Themes API', link: '/guides/themes' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guides/' },
          { text: 'Getting Started', link: '/guides/themes' }
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Themes metadata', link: '/guides/guide' },
          { text: 'themes colors', link: 'guides/colors'}
        ]
      },
      {
        text: 'Publishing',
        items: [
          { text: 'Publish your themes', link: '/publishing/publish' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xelo-Client/Xelo-Client' }
    ],

    footer: {
      message: 'Documentation for Xelo Client customization and extension development.',
      copyright: 'Copyright © 2025 Xelo Team'
    },

    search: {
      provider: 'local'
    }
  }
})