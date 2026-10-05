import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/information-systems-data-knowledge-management/',
  plugins: [react(), {
    name: 'rewrite-asset-paths',
    transform(code, id) {
      if (!id.endsWith('/src/main.jsx')) return null
      return code
        .replaceAll("'/assets/", "'/information-systems-data-knowledge-management/assets/")
        .replaceAll('"/assets/', '"/information-systems-data-knowledge-management/assets/')
    },
  }],
})
