import { resolve } from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "h.f"
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        preview: resolve(__dirname, "preview.html")
      }
    }
  }
};
