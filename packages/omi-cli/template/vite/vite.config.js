import { resolve } from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        src: resolve(__dirname, "src/index.html")
      }
    }
  }
};
