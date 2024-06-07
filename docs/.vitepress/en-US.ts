import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const enUS = defineConfig({
  lang: 'en-US',
  description: 'NapCat',
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en-US/guide/': { base: '/en-US/', items: sidebarGuide() },
      '/en-US/develop/': { base: '/en-US/', items: sidebarDevelop() }
    },

    editLink: {
      pattern: 'https://github.com/LLOneBot/LLOneBotDoc/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})

function nav() {
  return [
    { text: 'Reference', link: '/en-US/guide/getting-started', activeMatch: '/zh-CN/guide' },
    { text: 'Develop', link: '/en-US/develop/api', activeMatch: '/zh-CN/develop' }
  ]
}
function sidebarGuide() {
  return [
    {
      text: 'Basic Configuration',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'guide/getting-started', activeMatch: '/en/guide/' },
        { text: 'Basic Configuration', link: 'guide/config', activeMatch: '/en/guide/' },
        { text: 'Framework Integration', link: 'guide/integration', activeMatch: '/en/guide/' },
        { text: 'FAQ', link: 'guide/faq', activeMatch: '/en/guide/' }
        // { text: 'Changelog', link: 'guide/version', activeMatch: '/en/guide/' }
      ]
    }
  ]
}
function sidebarDevelop() {
  return [
    {
      text: 'Development Information',
      collapsed: false,
      items: [
        { text: 'API List', link: 'develop/api', activeMatch: '/en/develop/' },
        { text: 'Reported Events', link: 'develop/event', activeMatch: '/en/develop/event' },
        { text: 'Message Types', link: 'develop/msg', activeMatch: '/en/develop/msg' },
        {
          text: 'Extended API',
          link: 'develop/extends_api',
          activeMatch: '/en/develop/extends_api'
        },
        { text: 'About the Project', link: 'develop/about', activeMatch: '/en/develop/about' }
      ]
    }
  ]
}
