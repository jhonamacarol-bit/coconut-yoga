# 🥥 Coconut Yoga — Blog

Blog de saúde, alimentação e ciclo menstrual construído com [Astro](https://astro.build).

---

## 🚀 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# Abrir: http://localhost:4321
```

---

## ✍️ Como publicar um artigo novo

Crie um arquivo `.md` dentro de `src/content/blog/` com este modelo:

```markdown
---
title: "Título do artigo"
description: "Descrição curta para o Google (máx 160 caracteres)"
pubDate: 2025-02-10
fase: folicular          # folicular | ovulatoria | lutea | menstrual
categoria: alimentação   # ex: alimentação, ciclo, bem-estar, receitas
readTime: 6              # tempo de leitura em minutos
featured: false          # true = aparece em destaque na homepage
---

Seu texto aqui em Markdown...
```

### Formatação Markdown básica

```markdown
## Título de seção

**negrito**   _itálico_

- lista
- de itens

> Citação em destaque

[link](https://url.com)
```

---

## 📁 Estrutura do projeto

```
coconut-yoga/
├── src/
│   ├── content/
│   │   ├── config.ts          ← schema dos artigos
│   │   └── blog/              ← seus artigos .md ficam aqui
│   ├── layouts/
│   │   └── Base.astro         ← nav, footer, SEO
│   ├── pages/
│   │   ├── index.astro        ← homepage
│   │   ├── blog/
│   │   │   ├── index.astro    ← listagem de artigos
│   │   │   └── [slug].astro   ← página de cada artigo
│   └── styles/
│       └── global.css         ← design system completo
├── public/                    ← imagens, favicon
├── astro.config.mjs
└── package.json
```

---

## 🌐 Deploy gratuito na Vercel

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte ao repositório GitHub do projeto
3. Clique em **Deploy** — a Vercel detecta Astro automaticamente
4. Pronto! A cada `git push`, o blog atualiza sozinho

### Domínio próprio (opcional)
Na Vercel, vá em **Settings → Domains** e adicione seu domínio.

---

## 🎨 Design system — cores

| Variável          | Cor         | Uso                        |
|-------------------|-------------|----------------------------|
| `--terra`         | Terracota   | CTAs, destaques            |
| `--sage`          | Verde sage  | Fase folicular             |
| `--lavender`      | Lavanda     | Fase lútea                 |
| `--rose`          | Rosa suave  | Menstruação                |
| `--bark`          | Marrom dark | Textos, fundo footer       |
| `--cream`         | Creme       | Fundo principal            |

---

## 📦 Build para produção

```bash
npm run build
npm run preview  # visualizar o build antes de subir
```
