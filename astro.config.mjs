// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stokevanlocks.co.uk',
  output: 'static',
  vite: {
    server: {
      allowedHosts: true, // allow tunnel hosts for sharing previews
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      // Only include SEO-value pages; exclude policy pages
      filter: (page) =>
        !page.includes('/privacy') && !page.includes('/cookies'),
    }),
  ],
});
