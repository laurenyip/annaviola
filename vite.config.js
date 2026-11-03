import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the domain root on Cloudflare. Set BASE_PATH only to host under a subpath.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
