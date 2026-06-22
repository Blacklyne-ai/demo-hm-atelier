// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// HM Atelier, Dubai — STATIC build, no SSR, no adapter.
// Output: /dist plain HTML. Deploy: Cloudflare Pages (Astro preset, npm run build, dist).
// Tailwind v3.4 via @astrojs/tailwind (v4 breaks on Cloudflare Pages).
export default defineConfig({
  site: 'https://demo-hm-atelier.pages.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/(legal|privacy|ar)\/?$/.test(page),
    }),
  ],
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
