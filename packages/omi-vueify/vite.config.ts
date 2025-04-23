import { resolve } from 'path'
import { defineConfig } from 'vite'

const buildConfig = {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OmiVueify',
      formats: ['es', 'umd'],
      fileName: (format) => `omi-vueify.${format}.js`
    },
    rollupOptions: {
      external: ['omi', 'vue']
    }
  },
  demo: {
    lib: {
      entry: resolve(__dirname, 'src/demo/omi-vueify-demo.ts'),
      name: 'OmiVueifyDemo',
      formats: ['es', 'umd'],
      fileName: (format) => `omi-vueify-demo.${format}.js`
    },
    rollupOptions: {
      external: ['omi', 'vue']
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: buildConfig[mode] || {
      rollupOptions: {
        external: ['omi', 'vue'],
      }
    },
    esbuild: {},
  }
})