// 使用 VitePress data loader 在构建时扫描 API 版本
import { readdirSync, existsSync, readFileSync } from 'fs'
import { resolve, join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export interface ApiVersion {
  version: string
  title: string
  description: string
}

declare const data: ApiVersion[]
export { data }

export default {
  watch: ['./**/openapi.json'],
  load(): ApiVersion[] {
    // __dirname 是 src/api，所以直接使用当前目录
    const apiDir = __dirname
    const versions: ApiVersion[] = []
    
    console.log('[versions.data] Scanning API directory:', apiDir)
    
    if (existsSync(apiDir)) {
      const dirs = readdirSync(apiDir, { withFileTypes: true })
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
      
      console.log('[versions.data] Found version directories:', dirs)
      
      for (const version of dirs) {
        const specPath = join(apiDir, version, 'openapi.json')
        if (existsSync(specPath)) {
          try {
            const spec = JSON.parse(readFileSync(specPath, 'utf-8'))
            versions.push({
              version,
              title: spec?.info?.title || 'NapCat OneBot 11 HTTP API',
              description: spec?.info?.description || '',
            })
          } catch {
            versions.push({
              version,
              title: 'NapCat OneBot 11 HTTP API',
              description: '',
            })
          }
        }
      }
    }
    
    console.log('[versions.data] Loaded versions:', versions)
    return versions
  }
}
