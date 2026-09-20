import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

/**
 * Projects content collection.
 *
 * One Markdown file per project under src/content/projects/<slug>.md.
 * The file id (filename without extension) is the URL slug: /projects/<slug>.
 * Edit a project by editing its file — never the layout.
 *
 * Body of the file holds the prose (use `## What it is` and `## What I built`
 * headings). Everything else lives in the frontmatter below.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Short one-line description shown on cards and under the hero.
    oneLiner: z.string(),
    year: z.string(),
    // Channel = category. CH1 Embedded, CH2 PCB & Hardware, CH3 Control & Applied ML.
    channel: z.enum(['CH1', 'CH2', 'CH3']),
    // Sort order within featured / channel groups (lower = first).
    order: z.number(),
    featured: z.boolean().default(false),
    // Repo slug(s) under github.com/Hidi1208/. Omit when there is no public repo.
    // Do NOT add a disabled "code unavailable" button — just leave this empty.
    repos: z
      .array(z.string())
      .default([]),
    // Hero media at /public/images/<slug>/. type controls the element used.
    hero: z.object({
      src: z.string().optional(),
      alt: z.string(),
      type: z.enum(['image', 'video']).default('image'),
    }),
    // Spec strip: 3–5 compact key/value pairs, rendered in monospace.
    specs: z
      .array(z.object({ key: z.string(), value: z.string() }))
      .max(5)
      .default([]),
    // Optional single-line status (e.g. "Paper under review, IEEE RICE.").
    // Kept as one field so updating it is a one-line edit.
    status: z.string().optional(),
  }),
});

export const collections = { projects };
