# Aniruddha Deshmukh — portfolio

Static portfolio built with [Astro](https://astro.build/), deployed to GitHub
Pages. Oscilloscope visual direction: scope graticule, a self-drawing amber
trace, and project categories as channels. See
[`docs/portfolio-build-prompt.md`](docs/portfolio-build-prompt.md) for the full
brief.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve the built site
```

Requires Node 22+.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. In the repo settings enable **Settings → Pages →
Build and deployment → Source: GitHub Actions** once.

The site is configured as a GitHub *user* site (served from the domain root) in
`astro.config.mjs`. If you move it to a project repo, set `base: '/<repo-name>'`
there.

## Add or edit a project

Each project is **one Markdown file** — you never touch layout code.

1. Create `src/content/projects/<slug>.md`. The filename is the URL slug:
   `/projects/<slug>`.
2. Fill the frontmatter (schema in `src/content.config.ts`):

   ```yaml
   ---
   title: 'Project Title'
   oneLiner: 'One sentence shown on the card and under the hero.'
   year: '2026'
   channel: CH1            # CH1 Embedded · CH2 PCB & Hardware · CH3 Control & Applied ML
   order: 1                # sort order within its group (lower = first)
   featured: true          # true = featured row on the landing page
   repos:                  # GitHub slugs under github.com/Hidi1208/. Omit if none.
     - my-repo-slug        # (do NOT add a disabled "code unavailable" button)
   hero:
     alt: 'Describe the hero image for screen readers.'
     type: image           # image | video  (video = muted looping MP4)
   specs:                  # 3–5 key/value pairs, rendered in monospace
     - key: MCU
       value: STM32F401RE
   status: 'Paper under review, IEEE RICE.'   # optional single status line
   ---

   ## What it is

   Two or three sentences.

   ## What I built

   - The specific technical contributions.
   ```

3. Write the body prose under `## What it is` and `## What I built`.

### Notes

- **Featured order** on the landing page is controlled by `featured: true` +
  `order`. The intended order is PEARL → SDHM TinyML → PV-BES → Invendis.
- To omit a repo button, just leave `repos` out. Never add a placeholder/Drive
  link or a disabled button.

## Media

Real photos are dropped in later. Reference an asset at its **final path** and a
neutral placeholder (dark panel, amber border, filename label) shows until the
file exists — **no code change** is needed when you add the real file; the build
detects it automatically.

- Hero per project: `public/images/<slug>/hero.jpg` (or `.png`; set
  `hero.type: video` and use `.mp4` for a muted looping clip).
- To use a path other than `hero.jpg`, add `hero.src: '/images/<slug>/…'`.

### Expected asset paths

Drop files here as they're shot. Featured heroes first (PEARL and SDHM have real
hardware photos).

| Path | Used by |
|---|---|
| `public/cv.pdf` | CV link (header + footer) — **placeholder present, replace it** |
| `public/og-default.png` | default social share image — regenerate via `node scripts/make-assets.mjs` |
| `public/images/pearl/hero.jpg` | PEARL — hardware photo |
| `public/images/sdhm-tinyml/hero.jpg` | SDHM TinyML — hardware photo |
| `public/images/pv-bes-control/hero.png` | PV-BES — diagram/render |
| `public/images/invendis-internship/hero.png` | Invendis — simplified block diagram (never the real schematic) |
| `public/images/neat-maze/hero.png` | NEAT maze generalisation |
| `public/images/sim-to-real/hero.png` | Sim-to-real robot controller |
| `public/images/acoustic-turret/hero.jpg` | Acoustic localisation turret |
| `public/images/pcb-designs/hero.png` | PCB design portfolio |
| `public/images/about/speaking-1.jpg` | About — Toastmasters stage photo |
| `public/images/about/speaking-2.jpg` | About — Toastmasters stage photo |
| `public/images/about/art/*` | About — digital-art gallery |

> All eight project pages and the About page exist; the paths above are where
> the real photos/renders go. Until a file is present, a labelled placeholder
> shows automatically — dropping the file in needs no code change.

## Project structure

```
src/
  content/projects/     one .md per project (content collection)
  content.config.ts     project frontmatter schema
  components/           ScopeTrace, ProjectCard, ChannelTag, HeroMedia, Placeholder, Header, Footer
  layouts/BaseLayout.astro   <head>, meta/OG, header + footer
  lib/site.ts           author info, channel labels, repo-URL helper
  pages/                index.astro, about.astro, projects/[slug].astro
  styles/global.css     design tokens + shared component styles
public/                 static assets served at the domain root
scripts/                one-off generators for the OG image and CV placeholder
```
