import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://laurenyip.github.io/annaviola/
// Local dev uses "/". CI sets BASE_PATH=/annaviola/
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
