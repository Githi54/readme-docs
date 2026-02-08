// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    // GFM is enabled by default in Astro
  },

  integrations: [preact()]
});