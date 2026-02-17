# 📄 README → Docs Generator

> **Turn your GitHub README into a beautiful, searchable documentation site in seconds.**

![Project Banner](https://img.shields.io/badge/Status-Active_Development-success?style=for-the-badge) ![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white) ![Preact](https://img.shields.io/badge/preact-%23673AB8.svg?style=for-the-badge&logo=preact&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Overview

**README → Docs Generator** is a tool designed to effortlessly convert your existing GitHub repository `README.md` and other markdown files into a structured, aesthetically pleasing documentation website.

Stop wasting time manually building documentation sites. Just point this tool to your repo, and get a professional docs site instantly.

## ✨ Key Features

- **⚡ Instant Conversion**: Layouts and navigation generated automatically from your file structure.
- **🎨 Modern Aesthetics**: Dark mode by default, glassmorphism effects, and premium typography.
- **🔍 SEO Optimized**: Built with Astro for blazing fast performance and SEO-friendly static markup.
- **🛠️ Developer Focused**: Syntax highlighting, copy-to-clipboard code blocks, and clear typography.

## 🏗️ Project Structure

This project is organized as a monorepo:

```text
/
├── web/              # The main web application (Astro + Preact)
├── package.json      # Root configuration and workspace scripts
└── ...
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (v9 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/readme-docs.git
cd readme-docs
npm install
```

### 💻 Running the Application

To start the development server for the web application:

```bash
npm run dev:web
```

This will start the Astro dev server, typically at `http://localhost:4321`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
