import { marked } from 'marked';
import type { MarkdownHeading } from 'astro';

export async function renderMarkdown(text: string) {
    const headings: MarkdownHeading[] = [];
    const renderer = new marked.Renderer();

    // Custom renderer to capture headings
    // @ts-ignore
    renderer.heading = function (textOrObj, level, raw) {
        let text, depth, rawContent;
        if (typeof textOrObj === 'object' && textOrObj !== null && 'depth' in textOrObj) {
            const obj = textOrObj as any;
            depth = obj.depth;
            rawContent = obj.raw;
            text = obj.text;
        } else {
            text = textOrObj;
            depth = level;
            rawContent = raw;
        }

        const content = String(rawContent || text || '');
        const slug = content.toLowerCase().replace(/[^\w]+/g, '-');
        headings.push({ depth: depth || 1, slug, text: content });
        return `<h${depth} id="${slug}">${text}</h${depth}>`;
    };

    const html = await marked.parse(text, { renderer, async: true });

    return { html, headings };
}
