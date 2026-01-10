import { resolve } from 'path'
import { defineConfig } from 'vite'

const buildConfig = {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OmiVue2ify',
      formats: ['es', 'umd'],
      fileName: (format) => `omi-vue2ify.${format}.js`
    },
    rollupOptions: {
      external: ['omi', 'vue']
    }
  },
  demo: {
    lib: {
      entry: resolve(__dirname, 'src/demo/omi-vue2ify-demo.ts'),
      name: 'OmiVue2ifyDemo',
      formats: ['es', 'umd'],
      fileName: (format) => `omi-vue2ify-demo.${format}.js`
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
