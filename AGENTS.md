# AGENTS.md — Project Knowledge for AI Agents

## Component Structure

### Landing Page Sections (`src/components/landing/sections/`)

Each Astro file in `sections/` is a full-width section rendered on the landing page (`src/pages/index.astro`):

| Component            | Purpose                                          |
|----------------------|--------------------------------------------------|
| `Hero.astro`         | Hero banner with headline and CTA                |
| `LiveDemo.astro`     | Product preview section (generator + docs result) |
| `HowItWorks.astro`   | Step-by-step explanation                         |
| `WhyThis.astro`      | Feature highlights / value props                 |
| `CallToAction.astro` | Final CTA block                                  |
| `Footer.astro`       | Site footer                                      |

### LiveDemo Sub-components (`src/components/landing/live-demo/`)

The LiveDemo section is split into composable sub-components:

| Component              | Role                                                                       |
|------------------------|----------------------------------------------------------------------------|
| `GeneratorDemo.astro`  | **Left panel** — mimics the real `/generate` page: repo input, animated processing steps, success banner. |
| `DocsPreview.astro`    | **Right panel** — browser-chrome iframe showing the actual generated docs for `facebook/react`. |

> **Convention**: When a landing section grows beyond ~100 lines, extract panels / blocks into a same-named sub-folder under `src/components/landing/`. For example, `LiveDemo.astro` delegates to `live-demo/GeneratorDemo.astro` and `live-demo/DocsPreview.astro`.

### Generator (`src/components/generate/`)

| Component              | Role                                                            |
|------------------------|-----------------------------------------------------------------|
| `RepoGenerator.astro`  | Interactive Custom Element (`<repo-generator>`) with form logic, validation, and success state. Used on `/generate`. |

## Design Tokens

- Dark background: `#0B0C10`
- Primary accent: Indigo (`indigo-600`, `indigo-500`)
- Secondary accent: Purple gradient
- Glass: `backdrop-blur-xl`, `bg-white/5`, `border-white/10`
- Animations: `fade-in-up` with staggered `animation-delay`
