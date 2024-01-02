import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: process.argv[4] === 'omiu' ? {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
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
  }: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html')
      }
    }
  },
  base: './',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`
  },
  resolve: {
    alias: {
      "omi-elements": resolve("./src/lib/index.tsx"),
      "@": resolve("./src/"),
    },
  },
})
