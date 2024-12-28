import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '基于NTQQ现代化协议端Bot框架',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/NapNeko/NapCatDocs/edit/main/src/:path',
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

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '快速开始',
      link: '/guide/start-install',
      activeMatch: '/guide/'
    },
    {
      text: '关于',
      link: '/other/about',
      activeMatch: '/other/about'
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    {
      text: '快速开始',
      base: '/guide',
      collapsed: true,
      items: [
        { text: '目录导航', link: '/start-install' },
        { text: '什么是 NapCatQQ', link: '/napcat' },
        { text: '启动方式', link: '/install' },
        {
          text: '安装方式',
          base: '/guide/boot',
          collapsed: false,
          items: [
            { text: 'Shell', link: '/Shell' },
            { text: 'Framework', link: '/Framework' }
          ]
        }
      ]
    },
    {
      text: '配置',
      base: '/config',
      collapsed: true,
      items: [
        { text: '基础配置', link: '/basic' },
        { text: '高级配置', link: '/advanced' }
      ]
    },
    {
      text: '使用',
      base: '/use',
      collapsed: true,
      items: [
        { text: '接入框架', link: '/integration' },
        { text: '社区资源', link: '/community' }
      ]
    },
    {
      text: '开发',
      base: '/develop',
      collapsed: true,
      items: [
        { text: '请求接口', link: '/api' },
        { text: '上报事件', link: '/event' },
        { text: '消息类型', link: '/msg' },
        { text: '本体开发', link: '/plugin' },
        {
          text: '完整接口定义',
          base: '/develop/api',
          collapsed: false,
          items: [
            { text: '接口', link: '/doc' },
            { text: '类型', link: '/type' }
          ]
        }
      ]
    },
    {
      text: '其余',
      base: '/other',
      collapsed: true,
      items: [
        {
          text: '喵喵',
          link: '/napcat.md'
        },
        {
          text: '关于',
          link: '/about'
        }
      ]
    },
  ]
}
