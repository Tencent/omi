import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: process.argv[2] === 'build' ? {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['omi', '@omiu/checkbox', '@omiu/input']
    }
  } : {
    lib: {
      entry: resolve(__dirname, 'src/demo.tsx'),
      name: 'demo',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['omi', '@omiu/checkbox', '@omiu/input'],
      input: {
        demo: resolve(__dirname, 'demo.html')
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f'
  }
})
