<script setup lang="ts">
import { data as apiVersions } from '../../../api/versions.data'

console.log('[ApiVersionSelector] apiVersions:', apiVersions)

const versions = apiVersions.map((v, index) => ({
  ...v,
  badge: index === 0 ? '最新版本' : '历史版本',
  isLatest: index === 0,
}))

console.log('[ApiVersionSelector] versions:', versions)
</script>

<template>
  <div class="api-version-selector">
    <h1>📚 API 文档</h1>
    <p class="subtitle">选择一个版本查看完整的 OpenAPI 接口文档</p>
    
    <div v-if="versions.length === 0" class="no-versions">
      <p>正在加载版本信息...</p>
    </div>
    
    <div v-else class="version-list">
      <a 
        v-for="(item, index) in versions" 
        :key="item.version"
        :href="`/api/${item.version}`"
        class="version-card"
      >
        <div class="version-header">
          <span class="version-number">v{{ item.version }}</span>
          <span :class="['version-badge', item.isLatest ? 'latest' : '']">
            {{ item.badge }}
          </span>
        </div>
        <p class="version-description">{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.api-version-selector {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.api-version-selector h1 {
  text-align: center;
  margin-bottom: 0.5rem;
}

.api-version-selector .subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.version-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.version-card {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
  background: var(--vp-c-bg-soft);
}

.version-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-elv);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.version-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.version-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.version-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.version-badge.latest {
  background: var(--vp-c-green-soft);
  color: var(--vp-c-green-1);
}

.version-description {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
