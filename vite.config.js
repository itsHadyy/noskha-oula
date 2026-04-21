import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { transformWithOxc } from 'vite'

function jsJsxPlugin() {
  return {
    name: 'js-jsx',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.js$/) || id.includes('node_modules')) return null
      const result = await transformWithOxc(code, id, { lang: 'jsx', jsx: { runtime: 'automatic' } })
      return result
    },
  }
}

export default defineConfig({
  plugins: [jsJsxPlugin(), react()],
  build: {
    rollupOptions: {
      moduleTypes: { '.js': 'jsx' },
    },
  },
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: { '.js': 'jsx' },
    },
  },
})
