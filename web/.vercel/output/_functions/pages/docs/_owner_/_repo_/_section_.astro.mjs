import { e as createComponent, r as renderTemplate, k as renderScript, l as renderSlot, g as addAttribute, n as renderComponent, o as renderHead, h as createAstro, p as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../../../chunks/astro/server_BASk6Pbb.mjs';
import 'piccolore';
/* empty css                                             */
import { $ as $$Search } from '../../../../chunks/Search_JdK-i2SE.mjs';
import { f as fetchReadme, p as processReadme } from '../../../../chunks/github_pDlrVI0-.mjs';
import { marked } from 'marked';
import * as emoji from 'node-emoji';
import DOMPurify from 'isomorphic-dompurify';
import { p as parseReadmeIntoSections, f as findSectionBySlug, g as getAdjacentSections } from '../../../../chunks/sections_DCls65ii.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$EnhancedDocsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EnhancedDocsLayout;
  const { title, repoName, owner, sections, currentSlug } = Astro2.props;
  const repoUrl = `https://github.com/${owner}/${repoName}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", ' | README Docs</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">', `</head> <body class="bg-[#0B0C10] text-gray-300 antialiased min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200 font-['Inter']"> <!-- Header --> <header class="border-b border-white/5 bg-[#0B0C10]/80 backdrop-blur-md sticky top-0 z-50"> <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"> <div class="flex items-center gap-8"> <a href="/" class="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity flex items-center gap-2"> <span class="p-1.5 bg-indigo-600 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)]"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </span> <span class="font-['Outfit']">README<span class="text-indigo-500">Docs</span></span> </a> <div class="hidden md:flex items-center text-sm font-medium text-gray-400"> <span class="mx-2">/</span> <a`, ' target="_blank" class="text-white hover:text-indigo-400 transition-colors uppercase tracking-widest text-[10px]">', '</a> <span class="mx-2">/</span> <span class="text-white">', '</span> </div> </div> <div class="flex items-center gap-4"> <div class="w-64 hidden sm:block"> ', " </div> <a", ' target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg> </a> </div> </div> </header> <div class="max-w-[1600px] mx-auto w-full flex"> <!-- Sidebar --> <aside class="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky top-16 border-r border-white/5 overflow-y-auto px-6 py-10 bg-[#0B0C10]/50 backdrop-blur-sm"> <div class="mb-8 px-2 uppercase tracking-[0.2em] text-[10px] font-bold text-gray-500">\nNavigation\n</div> <nav class="space-y-1"> ', ` </nav> <div class="mt-12 pt-8 border-t border-white/5 px-2"> <button id="copyLinkBtn" class="w-full flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all group"> <span>Share Docs</span> <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path> </svg> </button> </div> </aside> <!-- Main Content --> <main class="flex-1 min-w-0 bg-[#0B0C10] relative"> <div class="relative max-w-4xl mx-auto px-4 sm:px-10 lg:px-16 py-12 lg:py-20"> <div class="prose prose-invert prose-slate max-w-none
            prose-headings:font-['Outfit'] prose-headings:font-semibold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-white
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-gray-100 prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-2
            prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-400
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300 prose-a:transition-colors
            prose-strong:text-white
            prose-code:text-indigo-300 prose-code:bg-indigo-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#0D1117]/80 prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl prose-pre:shadow-2xl
            prose-li:text-gray-400 prose-ul:list-disc prose-ol:list-decimal
            prose-table:border prose-table:border-white/10 prose-thead:border-b prose-thead:border-white/10"> `, ' </div> <!-- Adjacent Navigation --> <div id="sectionNav" class="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between"> ', ' </div> </div> </main> <!-- Table of Contents (Right) --> <aside class="hidden xl:block w-72 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto px-6 py-10 border-l border-white/5"> <div class="mb-4 uppercase tracking-[0.2em] text-[10px] font-bold text-gray-500">\nOn this page\n</div> <div id="toc-container"> ', ' </div> </aside> </div> <!-- Scripts for Search --> <script>\n            // Only load Pagefind if the files exist (usually after build)\n            async function checkPagefind() {\n                try {\n                    const res = await fetch("/pagefind/pagefind-ui.js", {\n                        method: "HEAD",\n                    });\n                    if (res.ok) {\n                        const link = document.createElement("link");\n                        link.href = "/pagefind/pagefind-ui.css";\n                        link.rel = "stylesheet";\n                        document.head.appendChild(link);\n\n                        const script = document.createElement("script");\n                        script.src = "/pagefind/pagefind-ui.js";\n                        document.head.appendChild(script);\n                    }\n                } catch (e) {\n                    // Pagefind not available\n                }\n            }\n            checkPagefind();\n        <\/script> ', " </body> </html>"])), addAttribute(`Documentation for ${repoName}`, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(repoUrl, "href"), owner, repoName, renderComponent($$result, "Search", $$Search, {}), addAttribute(repoUrl, "href"), sections.map((section) => renderTemplate`<a${addAttribute(`/docs/${owner}/${repoName}/${section.slug}`, "href")}${addAttribute([
    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group",
    currentSlug === section.slug ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]" : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
  ], "class:list")}> <span${addAttribute([
    "w-1.5 h-1.5 rounded-full transition-all",
    currentSlug === section.slug ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" : "bg-gray-700 group-hover:bg-gray-500"
  ], "class:list")}></span> ${section.title} </a>`), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["adjacent-nav"]), renderSlot($$result, $$slots["toc"]), renderScript($$result, "/Users/admin/Documents/pet-projects/readme-docs/web/src/layouts/EnhancedDocsLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/admin/Documents/pet-projects/readme-docs/web/src/layouts/EnhancedDocsLayout.astro", void 0);

async function renderMarkdown(text, options) {
  const headings = [];
  const renderer = new marked.Renderer();
  const branch = options?.branch || "main";
  const rawBaseUrl = options ? `https://raw.githubusercontent.com/${options.owner}/${options.repo}/${branch}` : "";
  const blobBaseUrl = options ? `https://github.com/${options.owner}/${options.repo}/blob/${branch}` : "";
  renderer.link = function({
    href,
    title,
    tokens
  }) {
    let cleanHref = href;
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (options && !isExternal && !href.startsWith("#") && !href.startsWith("mailto:")) {
      const path = href.startsWith("./") ? href.slice(2) : href;
      cleanHref = `${blobBaseUrl}/${path}`;
    }
    const text2 = this.parser.parseInline(tokens);
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${cleanHref}"${title ? ` title="${title}"` : ""}${targetAttr}>${text2}</a>`;
  };
  renderer.image = function({
    href,
    title,
    text: text2
  }) {
    let cleanHref = href;
    if (options && !href.startsWith("http") && !href.startsWith("//")) {
      const path = href.startsWith("./") ? href.slice(2) : href;
      cleanHref = `${rawBaseUrl}/${path}`;
    }
    return `<img src="${cleanHref}" alt="${text2}"${title ? ` title="${title}"` : ""} />`;
  };
  renderer.code = function({
    text: text2,
    lang
  }) {
    if (lang === "mermaid") {
      return `<div class="mermaid-container my-8 flex justify-center bg-white/5 p-6 rounded-xl border border-white/5 overflow-x-auto"><pre class="mermaid">${text2}</pre></div>`;
    }
    const escapedText = text2.replace(/[&<>"']/g, (m) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[m] || m);
    return `<pre><code class="language-${lang || "text"}">${escapedText}</code></pre>`;
  };
  renderer.heading = function({
    tokens,
    depth
  }) {
    const text2 = this.parser.parseInline(tokens);
    const rawText = tokens.map((t) => t.text || t.raw).join("");
    const slug = rawText.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
    const cleanText = text2.replace(/<[^>]*>/g, "").trim();
    headings.push({
      depth,
      slug,
      text: cleanText
    });
    return `<h${depth} id="${slug}">${text2}</h${depth}>`;
  };
  const emojifiedText = emoji.emojify(text);
  const dirtyHtml = await marked.parse(emojifiedText, {
    renderer,
    async: true
  });
  const html = DOMPurify.sanitize(dirtyHtml, {
    ADD_TAGS: ["iframe"],
    // Allow iframes for embeds if needed, but be careful
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"]
  });
  return {
    html,
    headings
  };
}

const $$Astro = createAstro();
const prerender = false;
const $$section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$section;
  const { owner, repo, section: sectionSlug } = Astro2.params;
  if (!owner || !repo || !sectionSlug) {
    return Astro2.redirect("/generate");
  }
  let sections = [];
  let currentSection = null;
  let error = null;
  let html = "";
  let headings = [];
  try {
    const rawReadme = await fetchReadme({ owner, repo });
    sections = parseReadmeIntoSections(rawReadme);
    currentSection = findSectionBySlug(sections, sectionSlug);
    if (!currentSection) {
      return Astro2.redirect(`/docs/${owner}/${repo}/${sections[0].slug}`);
    }
    const processedContent = processReadme(currentSection.content, {
      owner,
      repo
    });
    const rendered = await renderMarkdown(processedContent, { owner, repo });
    html = rendered.html;
    headings = rendered.headings;
  } catch (e) {
    console.error(
      `Error fetching section ${sectionSlug} for ${owner}/${repo}:`,
      e
    );
    error = "Failed to load this section. Please try again later.";
  }
  const { previous, next } = getAdjacentSections(sections, sectionSlug);
  const title = currentSection ? `${currentSection.title} - ${repo}` : repo;
  const filteredHeadings = headings.filter((h) => h.depth <= 3);
  return renderTemplate`${renderComponent($$result, "EnhancedDocsLayout", $$EnhancedDocsLayout, { "title": title, "repoName": repo, "owner": owner, "sections": sections, "currentSlug": sectionSlug }, { "adjacent-nav": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col sm:flex-row gap-4 justify-between mt-12 pt-8 border-t border-white/5"> ${previous && renderTemplate`<a${addAttribute(`/docs/${owner}/${repo}/${previous.slug}`, "href")} class="flex-1 px-6 py-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group text-left"> <div class="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
Previous
</div> <div class="text-white font-medium group-hover:text-indigo-400 transition-colors flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> ${previous.title} </div> </a>`} ${next && renderTemplate`<a${addAttribute(`/docs/${owner}/${repo}/${next.slug}`, "href")} class="flex-1 px-6 py-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group text-right ml-auto"> <div class="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
Next
</div> <div class="text-white font-medium group-hover:text-indigo-400 transition-colors flex items-center gap-2 justify-end"> ${next.title} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a>`} </div>`, "default": async ($$result2) => renderTemplate`${error ? renderTemplate`<div class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-6 text-red-400"> ${error} </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h1 class="text-4xl font-bold tracking-tight text-white mb-8 border-b border-white/5 pb-4"> ${currentSection?.title} </h1> <div class="docs-content"> ${(() => {
    let finalHtml = html;
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) {
      const h1Content = h1Match[1].replace(/<[^>]*>/g, "").trim();
      if (h1Content.toLowerCase() === repo.toLowerCase() || h1Content.toLowerCase() === currentSection?.title.toLowerCase()) {
        finalHtml = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "");
      }
    }
    return renderTemplate`<div>${unescapeHTML(finalHtml)}</div>`;
  })()} </div> <style is:global>
                    /* Ensure badges at the top of the content are in a row */
                    .docs-content > p:first-child:has(img) {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                        align-items: center;
                        margin-bottom: 2rem;
                    }
                    .docs-content img {
                        display: inline-block;
                        margin: 0 !important;
                    }
                </style> ` })}`}    `, "toc": async ($$result2) => renderTemplate`<ul class="space-y-3 text-sm"> ${filteredHeadings.length > 0 ? filteredHeadings.map((heading) => renderTemplate`<li${addAttribute([
    {
      "pl-4 border-l border-white/5 ml-1": heading.depth === 3
    }
  ], "class:list")}> <a${addAttribute(`#${heading.slug}`, "href")} class="text-gray-400 hover:text-white transition-colors block py-0.5"> ${heading.text} </a> </li>`) : renderTemplate`<li class="text-gray-600 italic">
No headings in this section
</li>`} </ul>` })}`;
}, "/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/docs/[owner]/[repo]/[section].astro", void 0);

const $$file = "/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/docs/[owner]/[repo]/[section].astro";
const $$url = "/docs/[owner]/[repo]/[section]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$section,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
