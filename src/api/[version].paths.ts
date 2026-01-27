import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  paths() {
    // 扫描所有版本目录
    const apiDir = __dirname
    const versions: { params: { version: string } }[] = []
    
    if (fs.existsSync(apiDir)) {
      const dirs = fs.readdirSync(apiDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => /^\d+\.\d+\.\d+$/.test(name))
      
      for (const version of dirs) {
        const specPath = path.join(apiDir, version, 'openapi.json')
        if (fs.existsSync(specPath)) {
          versions.push({ params: { version } })
        }
      }
    }
    
    console.log('[api/[version].paths] Generated paths:', versions)
    return versions
  }
}
