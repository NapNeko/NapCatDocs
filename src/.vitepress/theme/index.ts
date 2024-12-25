// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h, type Plugin } from 'vue';
import {
  NolebaseGitChangelogPlugin,
  Options
} from '@nolebase/vitepress-plugin-git-changelog/client';
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties';
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold';
import { useData, useRoute } from 'vitepress';

import { InjectionKey } from '@nolebase/vitepress-plugin-git-changelog/client';
import "vitepress-markdown-timeline/dist/theme/index.css";
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
import 'vitepress-plugin-codeblocks-fold/style/index.css';


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        disableHelp: true,
        defaultToggle: true,
      }
    } as Options),
      app.use(TwoslashFloatingVue as unknown as Plugin),
      app.use(NolebaseGitChangelogPlugin),
      app.provide(InjectionKey, {
        hideChangelogNoChangesText: true,
        commitsRelativeTime: true,
        displayAuthorsInsideCommitLine: true,
        hideContributorsHeader: true,
        hideChangelogHeader: true
      }),
      app.use(NolebasePagePropertiesPlugin<{
        progress: number
      }>() as Plugin, {
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
      })
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = useData();
    codeblocksFold({ route, frontmatter }, true, 400);
  }
}