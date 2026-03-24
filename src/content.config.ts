import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default("Untitled Project"),
    id: z.string().default("ID-000"),
    year: z.coerce.number().default(2026),
    icon: z.string().optional().default("📁"),
    handtag: z.string().optional(),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    description: z.string().default("No description provided."),
  }),
});

const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    mission_id: z.string().optional(),
    headline: z.string().optional(),
    highlight: z.string().optional(),
    subheadline: z.string().optional(),
    tagline: z.string().optional(),
    sticky_note: z.string().optional(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional().default([])
  }),
});

export const collections = { projects, homepage };
