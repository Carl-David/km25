import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    tailwind(),
    compress({
      SVG: false,
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  site: 'https://km25.se',
});
