import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';
export { renderers } from '../../renderers.mjs';

const GET = async ({
  url
}) => {
  const owner = url.searchParams.get("owner");
  const repo = url.searchParams.get("repo");
  if (!owner || !repo) {
    return new Response("Missing owner or repo", {
      status: 400
    });
  }
  const filename = `${owner}-${repo}-docs.zip`;
  const projectRoot = process.cwd();
  const archive = archiver("zip", {
    zlib: {
      level: 9
    }
  });
  const chunks = [];
  return new Promise((resolve, reject) => {
    archive.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    archive.on("end", () => {
      const buffer = Buffer.concat(chunks);
      resolve(new Response(buffer, {
        headers: {
          "Content-Type": "application/zip",
          "Content-Disposition": `attachment; filename="${filename}"`
        }
      }));
    });
    archive.on("error", (err) => {
      console.error("Archive error:", err);
      resolve(new Response("Error creating archive", {
        status: 500
      }));
    });
    const srcIgnore = ["pages/index.astro", "pages/generate.astro", "pages/api/**/*", "components/landing/**/*", "components/generate/**/*"];
    archive.glob("src/**/*", {
      cwd: projectRoot,
      ignore: srcIgnore
    });
    archive.glob("public/**/*", {
      cwd: projectRoot
    });
    archive.file(path.join(projectRoot, "package.json"), {
      name: "package.json"
    });
    if (fs.existsSync(path.join(projectRoot, "astro.config.mjs"))) {
      archive.file(path.join(projectRoot, "astro.config.mjs"), {
        name: "astro.config.mjs"
      });
    }
    if (fs.existsSync(path.join(projectRoot, "tsconfig.json"))) {
      archive.file(path.join(projectRoot, "tsconfig.json"), {
        name: "tsconfig.json"
      });
    }
    if (fs.existsSync(path.join(projectRoot, "tailwind.config.mjs"))) {
      archive.file(path.join(projectRoot, "tailwind.config.mjs"), {
        name: "tailwind.config.mjs"
      });
    }
    const indexAstroContent = `---
    return Astro.redirect('/docs/${owner}/${repo}');
---
`;
    archive.append(indexAstroContent, {
      name: "src/pages/index.astro"
    });
    archive.finalize();
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
