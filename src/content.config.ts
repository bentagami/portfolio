import { defineCollection, z } from 'astro:content';
// Try this direct import which is often more stable in newer environments
import { glob } from 'astro/loaders'; 

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
    coverImage: image().optional(),
  }),
});

const homepage = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/homepage" }),
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

const about = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string().default("About"),
    subtitle: z.string().optional(),
    description: z.string().optional(),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content/contact" }),
  schema: z.object({
    title: z.string().default("Contact"),
    email: z.string().optional(),
    socials: z.array(z.object({
      platform: z.string(),
      url: z.string(),
      handle: z.string()
    })).optional().default([])
  }),
});

export const collections = { projects, homepage, about, contact };
