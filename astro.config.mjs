import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://superamigos.cl",
  integrations: [sitemap(), icon()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
