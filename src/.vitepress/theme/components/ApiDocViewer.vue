<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'
import { data as apiVersions } from '../../../api/versions.data'

const props = defineProps<{
  spec: any
  version: string
  loading?: boolean
}>()

const router = useRouter()

const latestVersion = apiVersions[0]?.version
const isLatest = computed(() => props.version === latestVersion)
const hasError = computed(() => !props.loading && !props.spec)

const specTitle = computed(() => props.spec?.info?.title || 'API 文档')
const specDescription = computed(() => props.spec?.info?.description || '')

function onVersionChange(e: Event) {
  const v = (e.target as HTMLSelectElement).value
  router.go(`/api/${v}`)
}
</script>

<template>
  <!-- 加载中 -->
  <div v-if="props.loading" class="adv-loading">
    <span class="adv-spinner" />
    <p>加载中...</p>
  </div>

  <!-- 版本不存在 -->
  <div v-else-if="hasError" class="adv-error">
    <div class="adv-error-icon">⚠️</div>
    <h2>版本不存在</h2>
    <p>无法找到版本 <code>{{ props.version }}</code> 的 API 文档</p>
    <a href="/api/" class="adv-btn-back">← 返回版本列表</a>
  </div>

  <!-- 主内容 -->
  <div v-else class="adv-root">

    <!-- ─── Hero 头部 ─── -->
    <div class="adv-hero">
      <div class="adv-hero-inner">
        <!-- 顶部导航栏 -->
        <div class="adv-hero-nav">
          <a href="/api/" class="adv-back-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            版本列表
          </a>
          <div class="adv-version-switcher">
            <span class="adv-vs-label">切换版本</span>
            <select class="adv-vs-select" :value="props.version" @change="onVersionChange">
              <option
                v-for="v in apiVersions"
                :key="v.version"
                :value="v.version"
              >v{{ v.version }}{{ v.version === latestVersion ? ' · 最新' : '' }}</option>
            </select>
          </div>
        </div>

        <!-- 标题区域 -->
        <div class="adv-hero-body">
          <div class="adv-badge-row">
            <span class="adv-badge adv-badge-version">v{{ props.version }}</span>
            <span v-if="isLatest" class="adv-badge adv-badge-latest">✓ 最新版本</span>
          </div>
          <h1 class="adv-hero-title">{{ specTitle }}</h1>
          <p v-if="specDescription" class="adv-hero-desc">{{ specDescription }}</p>
        </div>
      </div>
    </div>

    <!-- ─── OASpec 内容区 ─── -->
    <div class="adv-spec-wrap">
      <OASpec :spec="props.spec" />
    </div>

  </div>
</template>

<style scoped>
/* ─── 加载状态 ───────────────────────────────────── */
.adv-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 8rem 2rem;
  color: var(--vp-c-text-2);
}
.adv-spinner {
  display: inline-block;
  width: 2.25rem;
  height: 2.25rem;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: adv-spin 0.7s linear infinite;
}
@keyframes adv-spin {
  to { transform: rotate(360deg); }
}

/* ─── 错误状态 ───────────────────────────────────── */
.adv-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 8rem 2rem;
  text-align: center;
}
.adv-error-icon { font-size: 3rem; }
.adv-error h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.adv-error p { color: var(--vp-c-text-2); }
.adv-btn-back {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.25rem;
  background: var(--vp-c-brand-1);
  color: white !important;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none !important;
  font-size: 0.875rem;
  transition: opacity 0.2s;
}
.adv-btn-back:hover { opacity: 0.85; }

/* ─── Hero 头部 ───────────────────────────────────── */
.adv-hero {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.adv-hero-inner {
  position: relative;
  z-index: 1;
  padding: 1.5rem 2rem 2.25rem;
}

/* 顶部导航栏 */
.adv-hero-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.adv-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--vp-c-text-2) !important;
  text-decoration: none !important;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  transition: all 0.2s;
}
.adv-back-btn:hover {
  color: var(--vp-c-text-1) !important;
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-text-3);
}

.adv-version-switcher {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.adv-vs-label {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}
.adv-vs-select {
  appearance: none;
  padding: 0.35rem 2.2rem 0.35rem 0.75rem;
  background-color: var(--vp-c-bg);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23888888' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  max-width: 180px;
}
.adv-vs-select:hover {
  border-color: var(--vp-c-text-3);
}
.adv-vs-select:focus {
  outline: none;
  border-color: var(--vp-c-text-2);
}
.adv-vs-select option {
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}

/* 标题区域 */
.adv-badge-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}
.adv-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.adv-badge-version {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  font-family: var(--vp-font-family-mono, monospace);
}
.adv-badge-latest {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.adv-hero-title {
  font-size: 2rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  color: var(--vp-c-text-1) !important;
  margin: 0 0 0.6rem !important;
  padding: 0 !important;
  border: none !important;
  letter-spacing: -0.025em;
}
@media (max-width: 640px) {
  .adv-hero-title { font-size: 1.5rem !important; }
  .adv-hero-inner { padding: 1.25rem 1.25rem 1.75rem; }
}

.adv-hero-desc {
  color: var(--vp-c-text-2) !important;
  font-size: 0.95rem !important;
  line-height: 1.65 !important;
  margin: 0 !important;
}
</style>

<!-- 非 scoped：OASpec 内容样式覆盖 -->
<style>
/* ─── 隐藏 OASpec 自带的信息头部（我们用自己的 hero 代替）────── */
.adv-spec-wrap > div > div:first-child,
.adv-spec-wrap > div > div:first-child + p,
.adv-spec-wrap > div > div:first-child + p + hr {
  display: none !important;
}

/* ─── 标签组区域 h1（各接口分类标题）─────────────────────────── */
.adv-spec-wrap h1 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.15rem !important;
  font-weight: 600 !important;
  color: var(--vp-c-text-1) !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 0 1rem !important;
  letter-spacing: -0.01em;
}
/* 左侧竖线 accent */
.adv-spec-wrap h1::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 1.1em;
  border-radius: 2px;
  background: linear-gradient(180deg, #6366f1, #ec4899);
  flex-shrink: 0;
}

/* ─── "操作" 子标题 h3 ──────────────────────────────────────── */
.adv-spec-wrap h3 {
  font-size: 0.75rem !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.07em !important;
  color: var(--vp-c-text-3) !important;
  margin: 0 0 0.6rem !important;
  padding: 0 !important;
  border: none !important;
}

/* ─── 操作列表容器 ─────────────────────────────────────────── */
.adv-spec-wrap .OASidebarItem {
  padding: 0.45rem 0.75rem !important;
  border-radius: 6px;
  transition: background 0.15s;
}
.adv-spec-wrap .OASidebarItem:hover {
  background: var(--vp-c-bg-alt);
}

/* ─── 标签分组卡片区域 ──────────────────────────────────────── */
.adv-spec-wrap > div > div > div {
  /* tag group wrapper */
}

/* ─── 展开操作详情页内的二级标题 h2 ────────────────────────── */
.adv-spec-wrap h2 {
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: var(--vp-c-text-1) !important;
  border: none !important;
  padding: 0.6rem 0 0.4rem !important;
  margin: 1.25rem 0 0.75rem !important;
  border-top: 1px solid var(--vp-c-divider) !important;
}

/* ─── "显示操作 / 隐藏操作" 按钮 ───────────────────────────── */
.adv-spec-wrap button:has(+ hr),
.adv-spec-wrap hr + button,
/* 目标：每个分组底部的展开按钮 */
.adv-spec-wrap > div > div > div > button {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.4rem !important;
  margin: 0.75rem auto 0.5rem !important;
  padding: 0.45rem 1.5rem !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 8px !important;
  background: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-text-2) !important;
  font-size: 0.82rem !important;
  font-weight: 500 !important;
  cursor: pointer !important;
  transition: all 0.18s !important;
}
.adv-spec-wrap > div > div > div > button:hover {
  border-color: var(--vp-c-brand-1) !important;
  color: var(--vp-c-brand-1) !important;
  background: var(--vp-c-brand-soft) !important;
}

/* ─── 分组之间的分隔线 ──────────────────────────────────────── */
.adv-spec-wrap hr {
  margin: 1.75rem 0 !important;
  border-color: var(--vp-c-divider) !important;
  opacity: 0.7;
}

/* ─── "尝试调试" 主按钮 ─────────────────────────────────────── */
.adv-spec-wrap button.bg-primary {
  background: var(--vp-c-brand-1) !important;
  color: white !important;
  border: none !important;
  padding: 0.5rem 1.25rem !important;
  border-radius: 8px !important;
  font-weight: 500 !important;
  font-size: 0.875rem !important;
  transition: opacity 0.2s !important;
}
.adv-spec-wrap button.bg-primary:hover {
  opacity: 0.85 !important;
}

/* ─── 深色模式微调 ──────────────────────────────────────────── */
.dark .adv-spec-wrap > div > div > div > button {
  background: var(--vp-c-bg-elv) !important;
}

/* ─── Fix 2: 有描述的标签组 - 强制单列，避免 API 列表被挤到右侧 ── */
.adv-spec-wrap .md\:grid-cols-2:has(> .OAMarkdown) {
  grid-template-columns: 1fr !important;
}
/* 描述段落样式美化 */
.adv-spec-wrap .OAMarkdown.oa-doc:not(.OAPathContentStart .OAMarkdown) p {
  color: var(--vp-c-text-2) !important;
  font-size: 0.9rem !important;
  margin: 0 0 1rem !important;
}

/* ─── Fix 3: 展开操作详情 - 单列布局，修复紧凑和溢出问题 ──────── */
/* 将二列网格改为单列 flex */
.adv-spec-wrap .OAPath > div.relative.grid {
  display: flex !important;
  flex-direction: column !important;
}
/* 右侧面板（端点+试一试+示例）提到左侧内容前面 */
.adv-spec-wrap .OAPath > div.relative.grid > div:last-child {
  order: -1;
}
/* 取消 sticky 定位，让面板正常流动 */
.adv-spec-wrap .OAPathContentEnd {
  position: static !important;
  top: auto !important;
  inset: auto !important;
}
/* 右侧面板卡片化，增加视觉区分 */
.adv-spec-wrap .OAPath > div.relative.grid > div:last-child {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1rem 1rem 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--vp-c-divider);
}
/* 右侧面板内端点标记 - 始终显示 */
.adv-spec-wrap .OAPathContentEnd > div.hidden {
  display: flex !important;
}
/* 左侧面板内重复的移动端端点标记 - 隐藏 */
.adv-spec-wrap .OAPathContentStart > div.sm\:hidden {
  display: none !important;
}
/* 示例代码块防溢出 */
.adv-spec-wrap .OAPathContentEnd pre,
.adv-spec-wrap .OAPathContentEnd code {
  overflow-x: auto;
  max-width: 100%;
  white-space: pre;
  word-break: normal;
}
/* 示例外框（macOS 窗口）不超出容器 */
.adv-spec-wrap .OAPathContentEnd > div:last-child {
  overflow: hidden;
  border-radius: 8px;
}
</style>
