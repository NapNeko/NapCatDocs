---
layout: page
---
# API 文档
<script setup>
import { useOpenapi } from 'vitepress-openapi/client'
import { useData } from 'vitepress'
import { computed } from 'vue'
const specs = import.meta.glob('./*/openapi.json', { eager: true, import: 'default' })
const { params } = useData()
const specKey = computed(() => `./${params.value.version}/openapi.json`)
const spec = computed(() => specs[specKey.value])


//console.log(params.value.version);
</script>

<div v-if="spec">
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
