import { resolve } from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "index.html"),
        // admin: resolve(__dirname, "admin.html")
      }
    }
   }
  // cssPreprocessOptions: {
  //   scss: {
  //     additionalData: '@import "./src/index.scss";'
  //   }
  // }
};
