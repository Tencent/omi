import { resolve } from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "h.f"
  },
  build: {
    rollupOptions: {
      // external: [/^omi/, '@omiu/toast'],
      input: {
        main: resolve(__dirname, "index.html"),
        preview: resolve(__dirname, "preview.html")
      }
    }
  }
};
