
interface ParsedRepo {
    valid: boolean;
    owner?: string;
    repo?: string;
}

export function parseRepositoryUrl(input: string): ParsedRepo {
    const trimmed = input.trim();

    // Pattern 1: owner/repo
    const shorthandRegex = /^([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_.-]+)$/;
    const shorthandMatch = trimmed.match(shorthandRegex);
    if (shorthandMatch) {
        return {
            valid: true,
            owner: shorthandMatch[1],
            repo: shorthandMatch[2],
        };
    }

    // Pattern 2: https://github.com/owner/repo
    const fullUrlRegex =
        /^https?:\/\/github\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_.-]+)\/?$/;
    const fullUrlMatch = trimmed.match(fullUrlRegex);
    if (fullUrlMatch) {
        return {
            valid: true,
            owner: fullUrlMatch[1],
            repo: fullUrlMatch[2],
        };
    }

    return { valid: false };
}
