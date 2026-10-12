/** Prefix a site path with Astro `base` (e.g. `/daymark-website/` on GitHub Pages). */
export function withBase(path: string): string {
	if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#')) {
		return path;
	}

	const base = import.meta.env.BASE_URL;
	const normalized = path.startsWith('/') ? path.slice(1) : path;
	return `${base}${normalized}`;
}
