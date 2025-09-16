import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  author: { name: 'NapNeko', link: 'https://github.com/NapNeko' },
  group: [
    {
      title: '生态',
      icon: 'fa-solid fa-lightbulb',
      links: [
        { name: '官方对接框架', link: 'https://node-napcat-ts.huankong.top' },
        { name: '二次开发框架', link: 'https://napneko.github.io/develop/plugin' },
      ],
    },
    {
      title: '工具',
      icon: 'fa-solid fa-puzzle-piece',
      links: [
        { name: '可视化管理工具', link: '#' },
        { name: '可视化网页配置', link: '#' },
      ],
    },
    {
      title: '社区',
      icon: 'fa-solid fa-expand',
      links: [
        { name: '官方 企鹅 4号社区', link: 'https://qm.qq.com/q/CMmPbGw0jA' },
        { name: '官方 企鹅 3号社区', link: 'https://qm.qq.com/q/8zJMLjqy2Y' },
        { name: '官方 企鹅 2号社区', link: 'https://qm.qq.com/q/8zJMLjqy2Y' },
        { name: '官方 企鹅 1号社区', link: 'https://qm.qq.com/q/I6LU87a0Yq' },
        { name: '官方 Telegram 社区', link: 'https://t.me/napcatqq' },
      ],
    },
  ],
}
