// @ts-check
import { defineConfig } from 'astro/config';

// This is a GitHub user site (Hidi1208.github.io), served from the domain root,
// so no `base` path is needed. If this is ever moved to a project repo, set
// `base: '/<repo-name>'` and adjust internal links via `import.meta.env.BASE_URL`.
export default defineConfig({
  site: 'https://Hidi1208.github.io',
  build: {
    inlineStylesheets: 'auto',
  },
});
