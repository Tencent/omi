import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['omi', '@omiu/checkbox', '@omiu/input'],
      input: {
        main: resolve(__dirname, 'index.html'),
        ...process.argv[2] !== 'build' && { demo: resolve(__dirname, 'demo.html') }
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f'
  }
})
