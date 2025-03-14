import { resolve } from 'path'
import { defineConfig } from 'vite'

const buildConfig = {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['omi']
    }
  },
  demo: {
    lib: {
      entry: resolve(__dirname, 'src/demo/omi-component.tsx'),
      name: 'omi-component',
      formats: ['es', 'umd'],
      fileName: (format) => `omi-component.${format}.js`
    },
    rollupOptions: {
      external: ['omi']
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    build: buildConfig[mode] || {
      rollupOptions: {
        external: ['omi'],
      }
    },
    esbuild: mode === 'demo' ? {
      jsxFactory: 'OmiComponent.h',
      jsxFragment: 'OmiComponent.f',
      jsxInject: `import { Component as OmiComponent  } from 'omi'`,
    } : {},
  }
})
