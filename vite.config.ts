import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@design-system": path.resolve(__dirname, "./src/design-system"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@content": path.resolve(__dirname, "./src/content"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }

          if (id.includes("src/components")) {
            return "components";
          }
          if (id.includes("src/pages")) {
            return "pages";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
