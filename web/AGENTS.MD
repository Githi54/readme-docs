# AI Agent Development Guidelines

This file is the specific source of truth for AI agents working on this project. Read this before proposing or making changes.

## 1. Core Principles
- **Relative Paths ONLY**: All imports must use relative paths (e.g., `../components/Hero.astro`) rather than aliases (e.g., `@/components/Hero.astro`). This is a **HARD REQUIREMENT**.
- **Modern & Premium**: The UI should feel "App-like", dark, and developer-focused. Use glassmorphism, glows, and smooth interactions.
- **Strict TypeScript**: No `any`. Ensure strict type safety.

## 2. Technology Stack
- **Framework**: Astro 5
- **Styling**: Tailwind CSS 4 (Vite plugin)
- **Language**: TypeScript
- **Bundler**: Vite
- **Content**: Markdown (via `marked`)
- **Search**: Pagefind

## 3. Development Rules

### CSS & Styling
- **Tailwind v4**: Use the new `@theme` configuration in `src/styles/global.css`.
- **Variables**: Use CSS variables for colors (e.g., `--color-primary`) defined in `global.css`.
- **Typography**: `Inter` font family.
- **Utility Libraries**: Always use `clsx` and `tailwind-merge` when combining classes.

### Code Style
- **Components**: Keep components small and focused.
- **Imports**: Group imports logically.
- **Formatting**: Code should be formatted (Prettier standard).

### Directory Structure
- `web/src/pages`: Application routes.
- `web/src/components`: Reusable UI components.
- `web/src/layouts`: Layout wrappers (Document shell).
- `web/src/lib`: core logic (GitHub fetching, parsing).
- `web/src/consts.ts`: Site-wide constants.

## 4. Verification
- **Build**: Always verify changes with `npm run build`.
- **Type Check**: Ensure `tsc` or `astro check` passes.
