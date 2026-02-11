interface GithubRepo {
    owner: string;
    repo: string;
    branch?: string;
}

export async function fetchReadme({ owner, repo, branch = 'main' }: GithubRepo): Promise<string> {
    // List of possible branches to check
    const branches = [branch];
    if (branch === 'main') branches.push('master');
    // Ensure unique branches
    const uniqueBranches = Array.from(new Set(branches));

    // List of possible filenames to check
    const filenames = ['README.md', 'README', 'readme.md', 'README.rst', 'README.txt'];

    for (const b of uniqueBranches) {
        for (const filename of filenames) {
            const url = `https://raw.githubusercontent.com/${owner}/${repo}/${b}/${filename}`;
            try {
                const response = await fetch(url);
                if (response.ok) {
                    return await response.text();
                }
            } catch (e) {
                // Continue to next combination
                console.warn(`Failed to fetch ${url}`, e);
            }
        }
    }

    throw new Error(`Failed to fetch README for ${owner}/${repo}: Not Found in branches [${uniqueBranches.join(', ')}] with common filenames.`);
}

export function processReadme(content: string, { owner, repo, branch = 'main' }: GithubRepo): string {
    let processed = content;

    // 1. Strip badges (common patterns)
    processed = processed.replace(/^\[!\[.*?\]\(.*?\)\]\(.*?\)\s*$/gm, '');
    processed = processed.replace(/^!\[.*?\]\(.*?\)\s*$/gm, (match) => {
        // Check if it looks like a badge (shield.io or github actions)
        if (match.includes('shields.io') || match.includes('github.com') && match.includes('/badge/') || match.includes('travis-ci')) {
            return '';
        }
        return match;
    });

    return processed;
}
