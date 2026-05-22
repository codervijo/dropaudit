// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dropaudit.co',
  integrations: [sitemap()],
  output: 'static',
});
