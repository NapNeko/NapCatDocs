import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const enUS = defineConfig({
    lang: 'en-US',
    description: 'LLOneBot',
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/en-US/guide/': { base: '/en-US/', items: sidebarGuide() },
            '/en-US/develop/': { base: '/en-US/', items: sidebarDevelop() }
        },

        editLink: {
            pattern: "https://github.com/LLOneBot/LLOneBotDoc/tree/main/docs/:path",
            text: 'Edit this page on GitHub'
        }
    }
})

function nav() {
    return [
        { text: 'Reference', link: '/en-US/guide/getting-started' },
        { text: 'Develop', link: '/en-US/develop/api'  }
    ];
}
function sidebarGuide() {
    return [
        {
            text: 'Basic Configuration',
            collapsed: false,
            items: [
                { text: 'Quick Start', link: 'guide/getting-started', activeMatch: '/en-US/guide/' },
                { text: 'Config', link: 'guide/configuration', activeMatch: '/en-US/guide/' },
                
                { text: 'Q&A', link: 'guide/faq', activeMatch: '/en-US/guide/' }
            ]
        },{
            text: 'Pro Configuration',
            collapsed: false,
            items: [{ text: 'Voice With FFempg', link: 'guide/voice', activeMatch: '/en-US/guide/' }]

        }
    ];
}
function sidebarDevelop() {
    return [
        {
            text: 'Develop',
            collapsed: false,
            items: [
                { text: 'Api List', link: 'develop/api', activeMatch: '/en-US/develop/' },
            ]
        }
    ];
}
