
import type { APIRoute } from 'astro';
import { fetchReadme } from '@/lib/github';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { owner, repo } = body;

        if (!owner || !repo) {
            return new Response(JSON.stringify({
                error: 'Missing owner or repo'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        try {
            // Attempt to fetch README to validate repo existence
            await fetchReadme({ owner, repo });

            return new Response(JSON.stringify({
                valid: true
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            // Repo not found or private or empty
            return new Response(JSON.stringify({
                error: 'Repository not found or private'
            }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

    } catch (e) {
        return new Response(JSON.stringify({
            error: 'Invalid request body'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
