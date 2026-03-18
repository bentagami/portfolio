import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
    link: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { work };
