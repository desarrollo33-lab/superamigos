import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://superamigos.cl",
  integrations: [react(), sitemap(), icon()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
});
