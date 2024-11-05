import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fetch: resolve(__dirname, "fetch.html"),
        key: resolve(__dirname, "filename.html"),
      },
      external: [
        "/src/assets/images/checkLogo.png",
        "/src/assets/images/chatLogo.png",
      ],
    },
  },
});
