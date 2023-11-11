import { defineConfig } from 'vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`
  },
  resolve: {
    alias: {
      "omi-elements": path.resolve("./src/lib/index.tsx"),
      "@": path.resolve("./src/"),
    },
  },
})
