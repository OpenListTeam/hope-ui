import path from "path";
import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";
import solidPlugin from "vite-plugin-solid";
import solidPkg from "../../packages/solid/package.json";

export default defineConfig({
  base: process.env.DOCS_BASE_URL ?? "./",
  define: {
    __HOPE_UI_VERSION__: JSON.stringify(solidPkg.version),
  },
  plugins: [
    solidPlugin(),
    prismjs({
      languages: ["bash", "js", "tsx", "html", "css"],
      plugins: ["copy-to-clipboard", "line-highlight"],
      css: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
