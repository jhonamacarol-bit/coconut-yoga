import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    fase: z.enum(['folicular', 'ovulatoria', 'lutea', 'menstrual']),
    categoria: z.string(),
    readTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
