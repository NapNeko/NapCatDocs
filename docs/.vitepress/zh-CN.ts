import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zhCN = defineConfig({
  lang: 'zh-CN',
  description: 'NapCat',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh-CN/guide/': { base: '/zh-CN/', items: sidebarGuide() },
      '/zh-CN/develop/': { base: '/zh-CN/', items: sidebarDevelop() }
    },

    editLink: {
      pattern: 'https://github.com/NapNeko/NapCatDocs/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav() {
  return [
    { text: '使用', link: '/zh-CN/guide/getting-started', activeMatch: '/zh-CN/guide' },
    { text: '开发', link: '/zh-CN/develop/api', activeMatch: '/zh-CN/develop' }
  ]
}
function sidebarGuide() {
  return [
    { text: '快速开始', link: 'guide/getting-started', activeMatch: '/zh-CN/guide/' },
    {
      text: '配置',
      items: [
        { text: '基础配置', link: 'guide/config/basic', activeMatch: '/zh-CN/guide/' },
        { text: '进阶配置', link: 'guide/config/advanced', activeMatch: '/zh-CN/guide/' },
      ]
    },
    { text: '接入框架', link: 'guide/integration', activeMatch: '/zh-CN/guide/' },
    { text: '常见问题', link: 'guide/faq', activeMatch: '/zh-CN/guide/' },
    { text: '社区资源', link: 'guide/resource', activeMatch: '/zh-CN/guide/' },
    // { text: '版本日志', link: 'guide/version', activeMatch: '/zh-CN/guide/' }
  ]
}
function sidebarDevelop() {
  return [
    {
      text: '开发信息',
      collapsed: false,
      items: [
        { text: 'API List', link: 'develop/api', activeMatch: '/zh-CN/develop/' },
        { text: '上报事件', link: 'develop/event', activeMatch: '/zh-CN/develop/event' },
        { text: '消息类型', link: 'develop/msg', activeMatch: '/zh-CN/develop/msg' },
        {
          text: '扩展 API',
          link: 'develop/extends_api',
          activeMatch: '/zh-CN/develop/extends_api'
        },
        {
          text: '状态列表',
          link: 'develop/status_list',
          activeMatch: '/zh-CN/develop/status_list'
        },
        { text: '关于项目', link: 'develop/about', activeMatch: '/zh-CN/develop/about' }
      ]
    }
  ]
}
