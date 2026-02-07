---
layout: page
---
# API 文档
<script setup>
import { useData } from 'vitepress'
import { computed, ref, watchEffect } from 'vue'
const { params } = useData()

// 懒加载：仅加载当前版本的 spec，不再一次性全部加载
const specLoaders = import.meta.glob('./*/openapi.json', { import: 'default' })
const spec = ref(null)
const loading = ref(true)

watchEffect(async () => {
  const key = `./${params.value.version}/openapi.json`
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


//console.log(params.value.version);
</script>

<div v-if="loading" class="loading">
  <p>加载中...</p>
</div>
<div v-else-if="spec">
  <OASpec :spec="spec" />
</div>
<div v-else class="not-found">
  <h1>API 版本未找到</h1>
  <p>版本 {{ params.value.version }} 不存在</p>
  <a href="/api/">返回版本列表</a>
</div>

<!-- <style scoped>
.not-found {
  text-align: center;
  padding: 4rem 2rem;
}
</style> -->
