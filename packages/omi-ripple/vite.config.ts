import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'OmiRipple',
      formats: ['es', 'umd'],
      fileName: (format) => `omi-ripple.${format}.js`,
    },
    rollupOptions: {
      external: /^omi/,
      output: {
        globals: {
          omi: 'Omi',
        },
      },
    },
  },

});
