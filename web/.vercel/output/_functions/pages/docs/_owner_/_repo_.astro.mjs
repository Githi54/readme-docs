import { e as createComponent, h as createAstro } from '../../../chunks/astro/server_BASk6Pbb.mjs';
import 'piccolore';
import 'clsx';
import { f as fetchReadme } from '../../../chunks/github_pDlrVI0-.mjs';
import { p as parseReadmeIntoSections } from '../../../chunks/sections_DCls65ii.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { owner, repo } = Astro2.params;
  if (!owner || !repo) {
    return Astro2.redirect("/generate");
  }
  try {
    const rawReadme = await fetchReadme({ owner, repo });
    const sections = parseReadmeIntoSections(rawReadme);
    if (sections.length > 0) {
      return Astro2.redirect(`/docs/${owner}/${repo}/${sections[0].slug}`);
    }
  } catch (e) {
    console.error(`Error in docs root for ${owner}/${repo}:`, e);
  }
  return Astro2.redirect("/generate");
}, "/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/docs/[owner]/[repo]/index.astro", void 0);

const $$file = "/Users/admin/Documents/pet-projects/readme-docs/web/src/pages/docs/[owner]/[repo]/index.astro";
const $$url = "/docs/[owner]/[repo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
