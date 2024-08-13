import { defineConfig } from 'vitepress'
import { enUS } from './en-US'
import { shared } from './shared'
import { zhCN } from './zh-CN'

export default defineConfig({
  ...shared,
  locales: {
    'en-US': { label: 'English', ...enUS },
    'zh-CN': { label: '简体中文', ...zhCN }
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]]
})
