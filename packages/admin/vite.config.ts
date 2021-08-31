import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    plugins: [
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command == 'serve'
      })
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'h.f'
    },
    server: {
      fs: {
        strict: true
      }
    }
  }
})
