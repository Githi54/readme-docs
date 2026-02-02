import * as emoji from 'node-emoji';

/**
 * Section parsing utilities for multi-page documentation
 */

export interface Section {
    slug: string;        // URL-friendly: "getting-started"
    title: string;       // Display: "Getting Started"
    content: string;     // Markdown content for this section
    level: number;       // Heading level (2 for H2)
    order: number;       // Position in document
}

/**
 * Generate URL-friendly slug and clean title from heading text (removes markdown like links/badges)
 */
function cleanTitle(text: string): string {
    return text
        .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
        .replace(/`|#|\*|_/g, '') // Remove other markdown
        .trim();
}

function slugify(text: string): string {
    return cleanTitle(text)
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-')       // Replace multiple hyphens with single
        .replace(/^-+|-+$/g, '');  // Remove leading/trailing hyphens
}

/**
 * Parse README markdown into sections based on H2 headings
 */
export function parseReadmeIntoSections(markdown: string): Section[] {
    const emojifiedMarkdown = emoji.emojify(markdown);
    const sections: Section[] = [];

    // Split by H2 headings (## )
    const lines = emojifiedMarkdown.split('\n');
    let currentSection: Partial<Section> | null = null;
    let contentLines: string[] = [];
    let order = 0;

    // Check if there's content before the first H2
    const firstH2Index = lines.findIndex(line => line.trim().startsWith('## '));
    if (firstH2Index !== 0) {
        const endIdx = firstH2Index === -1 ? lines.length : firstH2Index;
        const overviewContent = lines.slice(0, endIdx).join('\n').trim();
        if (overviewContent) {
            sections.push({
                slug: 'overview',
                title: 'Overview',
                content: overviewContent,
                level: 2,
                order: order++
            });
        }
    }

    // Parse sections
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for H2 heading
        if (line.trim().startsWith('## ')) {
            // Save previous section if exists
            if (currentSection && currentSection.title) {
                sections.push({
                    slug: currentSection.slug!,
                    title: currentSection.title,
                    content: contentLines.join('\n').trim(),
                    level: 2,
                    order: currentSection.order!
                });
                contentLines = [];
            }

            // Start new section
            const rawTitle = line.replace(/^##\s+/, '').trim();
            const title = cleanTitle(rawTitle);
            currentSection = {
                slug: slugify(rawTitle),
                title: title,
                level: 2,
                order: order++
            };
        } else if (currentSection) {
            // Add line to current section content
            contentLines.push(line);
        }
    }

    // Save last section
    if (currentSection && currentSection.title) {
        sections.push({
            slug: currentSection.slug!,
            title: currentSection.title,
            content: contentLines.join('\n').trim(),
            level: 2,
            order: currentSection.order!
        });
    }

    // If no sections found, create a single overview section
    if (sections.length === 0) {
        sections.push({
            slug: 'overview',
            title: 'Overview',
            content: markdown,
            level: 2,
            order: 0
        });
    }

    return sections;
}

/**
 * Find section by slug
 */
export function findSectionBySlug(sections: Section[], slug: string): Section | undefined {
    return sections.find(s => s.slug === slug);
}

/**
 * Get previous and next sections for navigation
 */
export function getAdjacentSections(sections: Section[], currentSlug: string): {
    previous: Section | null;
    next: Section | null;
} {
    const currentIndex = sections.findIndex(s => s.slug === currentSlug);

    return {
        previous: currentIndex > 0 ? sections[currentIndex - 1] : null,
        next: currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null
    };
}
