// .vitepress/theme/index.js
import { useData, useRoute } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, type Plugin } from 'vue'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {
  InjectionKey,
  NolebaseGitChangelogPlugin,
  Options,
} from '@nolebase/vitepress-plugin-git-changelog/client'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { Footer } from '@theojs/lumen' //不好看
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import { Footer_Data } from '../data/footerData.ts'
import { theme } from 'vitepress-openapi/client'

// 使用 Vite glob import 动态导入所有 OpenAPI specs
const openApiSpecs = import.meta.glob<{ default: any }>('../../api/*/openapi.json', { eager: true })

// 导出 specs 供组件使用（不在这里调用 useOpenapi）
export { openApiSpecs }

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import '@shikijs/vitepress-twoslash/style.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
import 'vitepress-openapi/dist/style.css'
import Confetti from './components/Confetti.vue'

import Hero from '../theme/Layout.vue'
import NCard from './components/NCard.vue'
import ApiVersionSelector from './components/ApiVersionSelector.vue'

import './custom.css'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 'aside-outline-before': () => h(ShareButton),
      'home-hero-before': () => h(Hero),
      'layout-bottom': () => h(Footer, { Footer_Data }),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => [h(NolebaseHighlightTargetedHeading)],
    })
  },
  enhanceApp(ctx: EnhanceAppContext) {
    const { app } = ctx
    // 注册 vitepress-openapi 组件（包括 OASpec）
    theme.enhanceApp(ctx)
    
    app.component('Confetti', Confetti) //注册全局组件
    app.component('ApiVersionSelector', ApiVersionSelector)
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        disableHelp: true,
        defaultToggle: true,
      },
    } as Options)
    app.use(TwoslashFloatingVue)
    app.component('NCard', NCard)
    app.use(NolebaseGitChangelogPlugin)
    app.provide(InjectionKey, {
      hideChangelogNoChangesText: true,
      commitsRelativeTime: true,
      displayAuthorsInsideCommitLine: true,
      hideContributorsHeader: true,
      hideChangelogHeader: true,
    })
    app.use(NolebaseInlineLinkPreviewPlugin as Plugin)
    app.use(
      NolebasePagePropertiesPlugin<{
        progress: number
      }>() as Plugin,
      {
        properties: {
          'zh-CN': [
            {
              key: 'wordCount',
              type: 'dynamic',
              title: '字数',
              options: {
                type: 'wordsCount',
              },
            },
            {
              key: 'readingTime',
              type: 'dynamic',
              title: '阅读时间',
              options: {
                type: 'readingTime',
                dateFnsLocaleName: 'zhCN',
              },
            },
            {
              key: 'updatedAt',
              type: 'datetime',
              title: '更新时间',
              formatAsFrom: true,
              dateFnsLocaleName: 'zhCN',
            },
          ],
        },
      },
    )
  },
  setup() {
    const route = useRoute()
    const { frontmatter } = useData()
    codeblocksFold({ route, frontmatter }, true, 400)
  },
}
