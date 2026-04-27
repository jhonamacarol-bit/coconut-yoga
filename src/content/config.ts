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

const paginas = defineCollection({
  type: 'content',
  schema: z.object({
    heroTag: z.string().optional(),
    heroTitulo: z.string().optional(),
    heroDescricao: z.string().optional(),
    heroBotaoPrimario: z.string().optional(),
    heroBotaoSecundario: z.string().optional(),
    card1Fase: z.string().optional(),
    card1Texto: z.string().optional(),
    card2Fase: z.string().optional(),
    card2Texto: z.string().optional(),
    card3Fase: z.string().optional(),
    card3Texto: z.string().optional(),
    secaoCicloTitulo: z.string().optional(),
    secaoCicloDescricao: z.string().optional(),
    manifestoTitulo: z.string().optional(),
    manifestoDescricao: z.string().optional(),
    valor1Titulo: z.string().optional(),
    valor1Texto: z.string().optional(),
    valor2Titulo: z.string().optional(),
    valor2Texto: z.string().optional(),
    valor3Titulo: z.string().optional(),
    valor3Texto: z.string().optional(),
    newsletterTitulo: z.string().optional(),
    newsletterDescricao: z.string().optional(),
  }),
});

export const collections = { blog, paginas };
