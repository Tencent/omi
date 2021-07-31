import { resolve } from "path";

console.log(resolve(__dirname, "/index.html"))

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "demos/index.html"),
       // main:"/demos/index.html"
        //admin: resolve(__dirname, "admin.html")
      },
      // external:['omi'],
      // output: {
      //   name: 'core',
      //   dir: 'dist/lib/core.js',
      //   format: 'umd',
      // },
      // plugins: [],
    }
  }
};

