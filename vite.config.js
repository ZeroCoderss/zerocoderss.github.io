import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // The output directory for the static build
    emptyOutDir: true, // Clears the output directory before building
    assetsDir: "assets", // Directory for static assets
    rollupOptions: {
      // Options to control how the final files are bundled
      input: "/index.html", // Ensures the entry point is correct
      output: {
        manualChunks: undefined, // Prevents code splitting for simpler deployment
      },
    },
  },
  base: "./",
});
