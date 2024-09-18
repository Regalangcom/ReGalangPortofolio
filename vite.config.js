/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@eli": path.resolve(__dirname, "src"),
      "@eli-style": path.resolve(__dirname, "styles"),
    },
  },
});
