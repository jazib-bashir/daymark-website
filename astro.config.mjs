// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from /{repo}/ — assets must use that base path.
// Custom domain: set ASTRO_BASE=/ and ASTRO_SITE=https://your-domain in CI when ready.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'daymark-website';
const baseFromEnv = process.env.ASTRO_BASE?.trim();
const base =
	baseFromEnv !== undefined && baseFromEnv !== ''
		? baseFromEnv.endsWith('/')
			? baseFromEnv
			: `${baseFromEnv}/`
		: process.env.GITHUB_ACTIONS === 'true'
			? `/${repoName}/`
			: '/';

const siteFromEnv = process.env.ASTRO_SITE?.trim();
// Default to the GitHub Pages project URL. Override with ASTRO_SITE when a custom domain is live.
const site = siteFromEnv || `https://jazib-bashir.github.io/${repoName}`;

// https://astro.build/config
export default defineConfig({
	site,
	base,
});
