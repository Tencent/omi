import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: process.argv[2] === 'build' ? {
    lib: {
      entry: resolve(__dirname, 'src/router.tsx'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['omi'],
      output: {
        globals: {
          omi: 'Omi',
        },
      },
    }
  } : {
    rollupOptions: {
      external: ['omi'],
      input: {
        index: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [dts()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`
  }
})
