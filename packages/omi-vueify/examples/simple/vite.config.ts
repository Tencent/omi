import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    target: 'esnext',
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h } from 'omi'`,
    jsx: 'transform',
    keepNames: true,
    tsconfigRaw: `{
      "compilerOptions": {
        "experimentalDecorators": true
      }
    }`
  },
})
