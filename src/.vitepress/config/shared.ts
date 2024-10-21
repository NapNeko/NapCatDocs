import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'NapCatQQ',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://napneko.github.io/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://avatars.githubusercontent.com/u/165024194'
      }
    ],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://avatars.githubusercontent.com/u/165024194'}],
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: 'https://avatars.githubusercontent.com/u/165024194'}],
    ['link', {rel: 'mask-icon', href: 'https://avatars.githubusercontent.com/u/165024194', color: '#5bbad5'}],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],

  themeConfig: {
    logo: { src: 'https://avatars.githubusercontent.com/u/165024194', width: 24, height: 24 },
    //开启本地搜索
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/NapNeko/NapCatQQ' }]
  }
})
