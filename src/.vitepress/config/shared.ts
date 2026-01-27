import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import {
  PageProperties,
  PagePropertiesMarkdownSection,
} from '@nolebase/vitepress-plugin-page-properties/vite'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { useSidebar } from 'vitepress-openapi'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 在 Node.js 配置环境中扫描 API 版本（构建时执行）
function scanApiVersions() {
  const apiDir = path.resolve(__dirname, '../../api')
  const versions: { version: string; spec: any }[] = []
  
  if (fs.existsSync(apiDir)) {
    const dirs = fs.readdirSync(apiDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => /^\d+\.\d+\.\d+$/.test(name))
      .sort((a, b) => {
        const aParts = a.split('.').map(Number)
        const bParts = b.split('.').map(Number)
        for (let i = 0; i < 3; i++) {
          if (bParts[i] !== aParts[i]) return bParts[i] - aParts[i]
        }
        return 0
      })
    
    for (const version of dirs) {
      const specPath = path.join(apiDir, version, 'openapi.json')
      if (fs.existsSync(specPath)) {
        try {
          const spec = JSON.parse(fs.readFileSync(specPath, 'utf-8'))
          versions.push({ version, spec })
        } catch (error) {
          console.warn(`[API] Failed to parse OpenAPI spec for version ${version}:`, error)
        }
      }
    }
  }
  
  return versions
}

// API 版本配置（构建时扫描）
export const apiVersions = scanApiVersions()
export const shared = defineConfig({
  title: 'NapCatQQ',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  vite: {
    ssr: {
      noExternal: ['@nolebase/*'],
    },
    plugins: [
      GitChangelog({
        maxGitLogCount: 2000,
        repoURL: () => 'https://github.com/NapNeko/NapCatDocs',
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
        sections: {
          // 禁用页面历史
          disableChangelog: false,
          // 禁用贡献者
          disableContributors: true,
        },
      }) as any,
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: ['index.md'],
      }),
      groupIconVitePlugin({
        customIcon: {
          ts: 'logos:typescript',
          js: 'logos:javascript', //js图标
          md: 'logos:markdown', //markdown图标
          css: 'logos:css-3', //css图标
        },
      }),
    ],
  },
  markdown: {
    math: true,
    config: (md) => {
      // 时间线
      md.use(timeline)
      // 任务列表
      md.use(taskLists)
      // 行内链接预览
      md.use(InlineLinkPreviewElementTransform)
      // 代码组图标
      md.use(groupIconMdPlugin)
    },
    codeTransformers: [transformerTwoslash() as any],
    // Explicitly load these languages for types hightlighting
    languages: ['js', 'jsx', 'ts', 'tsx'] as any,
  },

  sitemap: {
    hostname: 'https://napneko.github.io/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    },
  },

  /* prettier-ignore */
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/newnewlogo.png'
      }
    ],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/newnewlogo.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/newnewlogo.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/newnewlogo.png', color: '#5bbad5' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],

  themeConfig: {
    logo: { src: '/assets/newnewlogo.png', width: 24, height: 24 },
    //开启本地搜索
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/NapNeko/NapCatQQ' }],
  },
})
