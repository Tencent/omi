import { resolve } from "path";
import path from 'path';

//console.log(resolve(__dirname, "/index.html"))

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  lib: {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    name: 'index',
    formats: ['es'],
    fileName: (format) => `index.${format}.js`
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        //admin: resolve(__dirname, "admin.html")
      },
      external:/^omi/,
      // output: {
      //   name: 'core',
      //   dir: 'dist/lib/core.js',
      //   format: 'umd',
      // },
      // plugins: [],
    }
  }
};

