import { viteMockServe } from 'vite-plugin-mock';
import { UserConfigExport, ConfigEnv } from 'vite';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command == "serve",
      }),
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  }
}
