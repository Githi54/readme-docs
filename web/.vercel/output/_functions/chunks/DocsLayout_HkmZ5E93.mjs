import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, h as createAstro, o as renderHead, n as renderComponent, p as Fragment, l as renderSlot } from './astro/server_BASk6Pbb.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';
import { $ as $$Search } from './Search_JdK-i2SE.mjs';

const $$Astro$1 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { headings } = Astro2.props;
  const toc = headings.filter((h) => h.depth >= 2 && h.depth <= 3);
  return renderTemplate`${maybeRenderHead()}<nav class="w-64 flex-shrink-0 hidden lg:block h-screen sticky top-0 overflow-y-auto border-r border-gray-200 py-8 px-4 bg-gray-50/50"> <div class="mb-4 font-semibold text-sm text-gray-900 tracking-wide uppercase">On this page</div> <ul class="space-y-2 text-sm"> ${toc.length === 0 ? renderTemplate`<li class="text-gray-500 italic">No sections found</li>` : toc.map((heading) => renderTemplate`<li${addAttribute([{ "pl-4": heading.depth === 3 }], "class:list")}> <a${addAttribute(`#${heading.slug}`, "href")} class="block text-gray-600 hover:text-blue-600 transition-colors truncate"> ${heading.text} </a> </li>`)} </ul> </nav>`;
}, "/Users/admin/Documents/pet-projects/readme-docs/web/src/components/Sidebar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$DocsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const { title = "Docs", headings = [], variant = "docs", owner, repo } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Documentation generated from README.md"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-[#0B0C10] text-gray-300 antialiased min-h-screen flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200"> <!-- Navbar --> <header class="border-b border-white/5 bg-[#0B0C10]/80 backdrop-blur-md sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"> <div class="flex items-center gap-3"> <a href="/" class="flex items-center gap-3 text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"> ${owner && repo ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(`https://github.com/${owner}.png`, "src")}${addAttribute(owner, "alt")} class="w-8 h-8 rounded-full border border-white/10"> <span> ${owner} <span class="text-gray-500">/</span> <span class="text-indigo-400">${repo}</span> </span> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
README<span class="text-indigo-500">Docs</span> ` })}`} </a> </div> <div class="flex items-center gap-4"> <a href="/guide" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">
Guide
</a> ${variant === "docs" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <div class="w-64 hidden sm:block"> ', ' </div>  <link href="/pagefind/pagefind-ui.css" rel="stylesheet"> <script src="/pagefind/pagefind-ui.js"><\/script> '])), renderComponent($$result2, "Search", $$Search, {})) })}`} <a href="https://github.com/Githi54" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg> </a> </div> </div> </header> <div${addAttribute(["flex flex-1 w-full", variant === "docs" ? "max-w-7xl mx-auto" : ""], "class:list")}> ${variant === "docs" && renderTemplate`${renderComponent($$result, "Sidebar", $$Sidebar, { "headings": headings })}`} <main${addAttribute(["flex-1 w-full min-w-0", variant === "docs" ? "py-8 px-4 sm:px-6 lg:px-8" : ""], "class:list")}> ${variant === "docs" ? renderTemplate`<div class="prose prose-invert prose-slate prose-headings:scroll-mt-20 max-w-none hover:prose-a:text-indigo-400"> ${renderSlot($$result, $$slots["default"])} </div>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </main> </div> </body></html>`;
}, "/Users/admin/Documents/pet-projects/readme-docs/web/src/layouts/DocsLayout.astro", void 0);

export { $$DocsLayout as $ };
