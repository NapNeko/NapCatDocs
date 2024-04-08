import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'NapCat',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true
})