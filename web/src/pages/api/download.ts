
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

export const GET: APIRoute = async ({ url }) => {
    const owner = url.searchParams.get('owner');
    const repo = url.searchParams.get('repo');

    if (!owner || !repo) {
        return new Response('Missing owner or repo', { status: 400 });
    }

    const filename = `${owner}-${repo}-docs.zip`;
    const projectRoot = process.cwd();

    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    const chunks: Buffer[] = [];

    return new Promise((resolve, reject) => {
        archive.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        archive.on('end', () => {
            const buffer = Buffer.concat(chunks);
            resolve(new Response(buffer, {
                headers: {
                    'Content-Type': 'application/zip',
                    'Content-Disposition': `attachment; filename="${filename}"`
                }
            }));
        });
        archive.on('error', (err) => {
            console.error('Archive error:', err);
            resolve(new Response('Error creating archive', { status: 500 }));
        });

        // Add files
        // We want to exclude the "SaaS" parts of the app from the download
        const srcIgnore = [
            'pages/index.astro',
            'pages/generate.astro',
            'pages/api/**/*',
            'components/landing/**/*',
            'components/generate/**/*',
        ];

        archive.glob('src/**/*', {
            cwd: projectRoot,
            ignore: srcIgnore
        });
        // Note: glob ignores are relative to cwd usually or the match. 
        // Let's use specific file adding to be safer or just overwrite index.astro in memory

        archive.glob('public/**/*', { cwd: projectRoot });
        archive.file(path.join(projectRoot, 'package.json'), { name: 'package.json' });

        if (fs.existsSync(path.join(projectRoot, 'astro.config.mjs'))) {
            archive.file(path.join(projectRoot, 'astro.config.mjs'), { name: 'astro.config.mjs' });
        }

        if (fs.existsSync(path.join(projectRoot, 'tsconfig.json'))) {
            archive.file(path.join(projectRoot, 'tsconfig.json'), { name: 'tsconfig.json' });
        }

        if (fs.existsSync(path.join(projectRoot, 'tailwind.config.mjs'))) {
            archive.file(path.join(projectRoot, 'tailwind.config.mjs'), { name: 'tailwind.config.mjs' });
        }

        // Custom index page that redirects to the docs
        const indexAstroContent = `---
    return Astro.redirect('/docs/${owner}/${repo}');
---
`;
        archive.append(indexAstroContent, { name: 'src/pages/index.astro' });

        archive.finalize();
    });
}
