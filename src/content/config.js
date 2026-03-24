import { defineCollection, z } from 'astro:content';

// Define the Projects collection (for the grid)
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

// Define the Homepage collection (for the bio/hero)
const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    mission_id: z.string(),
    headline: z.string(),
    highlight: z.string(),
    subheadline: z.string(),
    tagline: z.string(),
    sticky_note: z.string(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string()
    }))
  }),
});

export const collections = { projects, homepage };
