import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    // 支持装饰器
    target: 'esnext',
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h } from 'omi'`,
    jsx: 'transform',
    keepNames: true, // 保留函数和类名
    tsconfigRaw: `{
      "compilerOptions": {
        "experimentalDecorators": true
      }
    }`
  },
})
