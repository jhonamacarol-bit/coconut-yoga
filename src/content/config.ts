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
    heroTag: z.string(),
    heroTitulo: z.string(),
    heroDescricao: z.string(),
    heroBotaoPrimario: z.string(),
    heroBotaoSecundario: z.string(),
    card1Fase: z.string(),
    card1Texto: z.string(),
    card2Fase: z.string(),
    card2Texto: z.string(),
    card3Fase: z.string(),
    card3Texto: z.string(),
    secaoCicloTitulo: z.string(),
    secaoCicloDescricao: z.string(),
    manifestoTitulo: z.string(),
    manifestoDescricao: z.string(),
    valor1Titulo: z.string(),
    valor1Texto: z.string(),
    valor2Titulo: z.string(),
    valor2Texto: z.string(),
    valor3Titulo: z.string(),
    valor3Texto: z.string(),
    newsletterTitulo: z.string(),
    newsletterDescricao: z.string(),
  }),
});

export const collections = { blog, paginas };