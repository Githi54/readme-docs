import { marked } from 'marked';
import * as emoji from 'node-emoji';
import DOMPurify from 'isomorphic-dompurify';
import type { MarkdownHeading } from 'astro';

interface RenderOptions {
    owner: string;
    repo: string;
    branch?: string;
}

export async function renderMarkdown(text: string, options?: RenderOptions) {
    const headings: MarkdownHeading[] = [];
    const renderer = new marked.Renderer();

    const branch = options?.branch || 'main';
    const rawBaseUrl = options ? `https://raw.githubusercontent.com/${options.owner}/${options.repo}/${branch}` : '';
    const blobBaseUrl = options ? `https://github.com/${options.owner}/${options.repo}/blob/${branch}` : '';

    // Custom renderer for relative links
    renderer.link = function (this: any, { href, title, tokens }: any) {
        let cleanHref = href;
        const isExternal = href.startsWith('http') || href.startsWith('//');

        if (options && !isExternal && !href.startsWith('#') && !href.startsWith('mailto:')) {
            const path = href.startsWith('./') ? href.slice(2) : href;
            cleanHref = `${blobBaseUrl}/${path}`;
        }

        const text = this.parser.parseInline(tokens);
        const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

        return `<a href="${cleanHref}"${title ? ` title="${title}"` : ''}${targetAttr}>${text}</a>`;
    };

    // Custom renderer for relative images
    renderer.image = function (this: any, { href, title, text }: any) {
        let cleanHref = href;
        if (options && !href.startsWith('http') && !href.startsWith('//')) {
            const path = href.startsWith('./') ? href.slice(2) : href;
            cleanHref = `${rawBaseUrl}/${path}`;
        }
        return `<img src="${cleanHref}" alt="${text}"${title ? ` title="${title}"` : ''} />`;
    };

    // Custom renderer for code blocks (specifically for mermaid)
    renderer.code = function (this: any, { text, lang }: any) {
        if (lang === 'mermaid') {
            return `<div class="mermaid-container my-8 flex justify-center bg-white/5 p-6 rounded-xl border border-white/5 overflow-x-auto"><pre class="mermaid">${text}</pre></div>`;
        }
        // Use default code rendering for others
        const escapedText = text.replace(/[&<>"']/g, (m: string) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[m] || m));
        return `<pre><code class="language-${lang || 'text'}">${escapedText}</code></pre>`;
    };

    // Custom renderer to capture headings and parse inline markdown
    renderer.heading = function (this: any, { tokens, depth }: any) {
        const text = this.parser.parseInline(tokens);
        const rawText = tokens.map((t: any) => t.text || t.raw).join('');
        const slug = rawText.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '');

        // Strip HTML tags to get clean text for the TOC
        // We use the rendered 'text' which handles markdown parsing, then strip tags
        const cleanText = text.replace(/<[^>]*>/g, '').trim();

        headings.push({ depth, slug, text: cleanText });
        return `<h${depth} id="${slug}">${text}</h${depth}>`;
    };

    // Parse emojis (GitHub style :emoji:)
    const emojifiedText = emoji.emojify(text);

    const dirtyHtml = await marked.parse(emojifiedText, { renderer, async: true });

    // Sanitize HTML to prevent XSS (the "modal" alert issue)
    const html = DOMPurify.sanitize(dirtyHtml, {
        ADD_TAGS: ['iframe'], // Allow iframes for embeds if needed, but be careful
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
    });

    return { html, headings };
}
