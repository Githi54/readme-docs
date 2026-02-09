interface GithubRepo {
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
