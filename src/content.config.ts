import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const countries = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/countries',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    flag: z.string(),
    capital: z.string(),
    languages: z.array(z.string()),
    currency: z.string(),
    monthlyCostUSD: z.number().int().positive(),
    order: z.number().int(),
    tag: z.string().optional(),
  }),
});

export const collections = { countries };
