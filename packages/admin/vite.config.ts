import { viteMockServe } from 'vite-plugin-mock';
import { UserConfigExport, ConfigEnv } from 'vite';

export default (conifg: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      viteMockServe({
        mockPath: 'mock',
        localEnabled: conifg.command == "serve",
      }),
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  }
}
