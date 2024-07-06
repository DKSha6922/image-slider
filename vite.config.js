import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/image-slider/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
});
