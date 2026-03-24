import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    id: z.string(),
    year: z.number(),
    icon: z.string().optional(),
    handtag: z.string().optional(),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    description: z.string(),
  }),
});

export const collections = { projects };
