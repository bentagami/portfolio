import { defineCollection, z } from 'astro:content';

// 1. Relaxed Projects Schema
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default("Untitled Project"),
    id: z.string().default("#000"),
    year: z.coerce.number().default(2026), // .coerce handles strings as numbers
    icon: z.string().optional().default("📁"),
    handtag: z.string().optional(),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    description: z.string().default("No description provided."),
  }),
});

// 2. Relaxed Homepage Schema
const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    mission_id: z.string().optional().default("MISSION: BT-001"),
    headline: z.string().optional().default("HI, I'M BEN."),
    highlight: z.string().optional().default("MAKE"),
    subheadline: z.string().optional().default("Engineer"),
    tagline: z.string().optional().default("Maker of things."),
    sticky_note: z.string().optional().default("Notes"),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional().default([])
  }),
});

export const collections = { 
  'projects': projects, 
  'homepage': homepage 
};
