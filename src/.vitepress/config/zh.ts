import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '由 Typescript 编写的 NapcatQQ SDK',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/NapNeko/NapCatDocs/src/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} NapCatQQ`
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

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '快速开始',
      link: '/guide/start-install',
      activeMatch: '/guide/'
    },
    {
      text: '关于',
      link: '/about',
      activeMatch: '/about'
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    {
      text: '快速开始',
      base: '/guide',
      collapsed: false,
      items: [
        { text: '什么是 NapCatQQ', link: '/NapCatQQ' },
        { text: '开始安装', link: '/start-install' },
        {
          text: '安装方式',
          collapsed: false,
          items: [
            { text: 'Shell', link: '/boot/Shell' },
            { text: 'Framerwrok', link: '/boot/Framerwrok' }
          ]
        }
      ]
    },
    {
      text: '配置',
      base: '/config',
      collapsed: false,
      items: [
        { text: '基础配置', link: '/basic' },
        { text: '高级配置', link: '/advanced' }
      ]
    },
    {
      text: '使用',
      base: '/use',
      collapsed: false,
      items: [
        { text: '接入框架', link: '/integration' },
        { text: '社区资源', link: '/community' }
      ]
    },
    {
      text: '开发',
      base: '/develop',
      collapsed: false,
      items: [
        { text: '请求接口', link: '/api' },
        { text: '上报事件', link: '/event' },
        { text: '消息类型', link: '/msg' }
      ]
    },
    {
      text: '关于',
      link: '/about'
    }
  ]
}
