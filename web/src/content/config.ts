import { defineCollection, z } from 'astro:content';
import { fetchReadme, processReadme } from '@/lib/github';
import { SITE_CONFIG } from '@/consts';

const docs = defineCollection({
    loader: async () => {
        // Custom loader to fetch README
        try {
            const raw = await fetchReadme(SITE_CONFIG.github);
            const content = processReadme(raw, SITE_CONFIG.github);

            // Return array of entries (one entry for the README)
            return [{
                id: 'index',
                title: SITE_CONFIG.title,
                description: SITE_CONFIG.description,
                repoUrl: `https://github.com/${SITE_CONFIG.github.owner}/${SITE_CONFIG.github.repo}`,
                readmeContent: content,
            }];
        } catch (e) {
            console.error("Loader failed", e);
            return [];
        }
    },
    schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        repoUrl: z.string().url().optional(),
        readmeContent: z.string(),
    }),
});

export const collections = { docs };
