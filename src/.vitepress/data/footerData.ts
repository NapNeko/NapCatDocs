import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
    author: { name: 'NapNeko', link: 'https://github.com/NapNeko' },
    group: [
        {
            title: '生态',
            icon: 'fa-solid fa-lightbulb',
            links: [
                { name: '官方对接框架', href: 'https://node-napcat-ts.huankong.top' },
                { name: '二次开发框架', href: 'https://napneko.github.io/develop/plugin' },
            ]
        },
        {
            title: '工具',
            icon: 'fa-solid fa-puzzle-piece',
            links: [
                { name: '可视化管理工具', href: '#' },
                { name: '可视化网页配置', href: '#' },
            ]
        },
        {
            title: '社区',
            icon: 'fa-solid fa-expand',
            links: [
                { name: '官方 企鹅 社区', href: 'https://qm.qq.com/q/I6LU87a0Yq' },
                { name: '官方 Telegram 社区', href: 'https://t.me/MelodicMoonlight' },
            ]
        }
    ]
}
