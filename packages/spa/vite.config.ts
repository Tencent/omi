import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`
  }
})
