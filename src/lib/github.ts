export interface GithubRepo {
    owner: string;
    repo: string;
    branch?: string;
}

export async function fetchReadme({ owner, repo, branch = 'main' }: GithubRepo): Promise<string> {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            // Fallback to master if main fails, common pattern
            if (branch === 'main') {
                const masterUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`;
                const masterResponse = await fetch(masterUrl);
                if (masterResponse.ok) return await masterResponse.text();
            }
            throw new Error(`Failed to fetch README: ${response.statusText}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error fetching README for ${owner}/${repo}:`, error);
        throw error;
    }
}

export function processReadme(content: string, { owner, repo, branch = 'main' }: GithubRepo): string {
    let processed = content;

    // 1. Strip badges (common patterns)
    // Look for lines starting with [![ (image in link)
    // This is a heuristic: conservative stripping of top-level badges
    // We'll strip block-level badges at the start of the file.
    processed = processed.replace(/^\[!\[.*?\]\(.*?\)\]\(.*?\)\s*$/gm, '');
    processed = processed.replace(/^!\[.*?\]\(.*?\)\s*$/gm, (match) => {
        // Check if it looks like a badge (shield.io or github actions)
        if (match.includes('shields.io') || match.includes('github.com') && match.includes('/badge/') || match.includes('travis-ci')) {
            return '';
        }
        return match;
    });

    // 2. Rewrite relative links
    const rawBaseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
    const blobBaseUrl = `https://github.com/${owner}/${repo}/blob/${branch}`;

    // Image links: ![alt](path) -> ![alt](raw_url/path)
    processed = processed.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
        if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#')) return match;
        // Fix relative paths like ./abc or just abc
        const cleanUrl = url.startsWith('./') ? url.slice(2) : url;
        return `![${alt}](${rawBaseUrl}/${cleanUrl})`;
    });

    // File links: [text](path) -> [text](blob_url/path)
    // Be careful not to match images (already handled above) or external links
    // We use a negative lookbehind or just handle []() that are NOT ![]()
    // But regex lookbehind support varies.
    // Helper: We iterate content and replace.

    // Simple heuristic: If it starts with ! it's an image. If not, it's a link.
    // We matched images above. Now we match general links [text](url)
    // This regex matches [text](url) but we must skip if it was preceded by !
    // A simple way is to match both and ignore started with !

    processed = processed.replace(/([^!])\[([^\]]+)\]\(([^)]+)\)/g, (match, prefix, text, url) => {
        if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#') || url.startsWith('mailto:')) return match;
        const cleanUrl = url.startsWith('./') ? url.slice(2) : url;
        // If it ends with an image extension, pointing to it as a file view? standard github behavior is blob view.
        return `${prefix}[${text}](${blobBaseUrl}/${cleanUrl})`;
    });

    return processed;
}
