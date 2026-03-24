import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/content/loaders'; 

const homepage = defineCollection({
  // This tells Astro 5 WHERE to look for the markdown
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/homepage" }),
  schema: z.object({
    headline: z.string(),
    highlight: z.string(),
    // ... rest of your fields
  }),
});

export const collections = { homepage };
