# 🌐 Web Application | README -> Docs

> **The power station of the documentation generation engine.**

![Astro](https://img.shields.io/badge/Astro-5.17.1-orange?style=flat-square&logo=astro) ![Preact](https://img.shields.io/badge/Preact-10.28.3-blue?style=flat-square&logo=preact) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.1-cyan?style=flat-square&logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Vercel-Adapter-black?style=flat-square&logo=vercel)

## 📌 About

This directory contains the **Web Application** for the **README → Docs Generator** monorepo. It handles the user interface, routing, and dynamic generation of documentation pages.

Built with **Astro** for optimal performance and SEO, and **Preact** for lightweight interactivity, this app delivers a blazing-fast experience.

## ✨ Features

- **Dynamic Routing**: Documentation paths generated on-the-fly.
- **Live Markdown Preview**: See changes instantly with our custom preview engine.
- **Responsive Design**: Mobile-first approach with a focus on readability.
- **Dark Mode**: Easy on the eyes for developer-centric workflows.
- **Code Highlighting**: Syntax highlighting for all major programming languages using Shiki.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v5)
- **UI Library**: [Preact](https://preactjs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Astro Icon](https://www.astroicon.dev/)
- **Linting**: [Knip](https://knip.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
/web
├── public/           # Static assets (favicons, images)
├── src/
│   ├── components/   # Reusable UI components (Hero, Navbar, Footer)
│   ├── layouts/      # Page layouts (Base, Docs)
│   ├── lib/          # Helper functions and business logic
│   ├── pages/        # Astro routes and page content
│   └── styles/       # Global CSS and Tailwind directives
├── astro.config.mjs  # Astro configuration
└── package.json      # Dependencies and scripts
```

## 🧞 Commands

Run these commands from the `/web` directory (or use `npm run <command> -w web` from root).

| Command                   | Description                                      |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts the local development server              |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the production build locally            |
| `npm run knip`            | Checks for unused files, dependencies, and exports|

## 🚀 Deployment

The project is configured for deployment on **Vercel** via the `@astrojs/vercel` adapter.

To deploy manually:
1. Ensure `vercel-cli` is installed.
2. Run `vercel deploy`.

## 🤝 Contributing

We welcome contributions! Please check the root `README.md` for guidelines.
