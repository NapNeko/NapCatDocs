---
layout: page
title: API 文档
---

<script setup>
import { useRoute, useData } from 'vitepress'
import { ref, computed, watchEffect } from 'vue'

const { params } = useData()
const route = useRoute()

// 优先使用 VitePress 动态路由 params，备用从 URL 路径提取版本号
const version = computed(() => {
  if (params.value?.version) return params.value.version
  const match = route.path.match(/\/api\/([^/]+)/)
  return match?.[1] || ''
})

const specLoaders = import.meta.glob('./*/openapi.json', { import: 'default' })
const spec = ref(null)
const loading = ref(true)

watchEffect(async () => {
  const v = version.value
  if (!v) return
  const key = `./${v}/openapi.json`
  const loader = specLoaders[key]
  if (loader) {
    loading.value = true
    try {
      spec.value = await loader()
    } catch (e) {
      console.error('Failed to load spec:', e)
      spec.value = null
    }
    loading.value = false
  } else {
    spec.value = null
    loading.value = false
  }
})
</script>

<ApiDocViewer :spec="spec" :version="version" :loading="loading" />
