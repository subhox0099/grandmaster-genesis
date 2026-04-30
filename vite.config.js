import { defineConfig } from "vite";

// Minimal Vite config — serves the static HTML/CSS/JS site.
export default defineConfig({
  server: { host: "::", port: 8080, hmr: { overlay: false } },
});