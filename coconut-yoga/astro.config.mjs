import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://coconutyoga.com.br',
  integrations: [mdx()],
});
