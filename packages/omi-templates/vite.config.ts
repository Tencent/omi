import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    tailwindcss() as any,
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`
  },
  resolve: {
    alias: {
      // "omi": resolve("./src/omi/index.ts"),
      "@": resolve("./src/"),
    },
  },
})
