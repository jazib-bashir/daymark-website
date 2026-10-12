/**
 * Site-wide configuration.
 * Set `downloadUrl` when the macOS release is ready (e.g. a GitHub Releases asset URL).
 * Leave empty to show a coming-soon CTA instead of a fake download.
 */
export const site = {
	name: 'Daymark',
	tagline: 'Switch projects. Not your train of thought.',
	description:
		'Daymark is a local-first desktop workspace that keeps project context, priorities, progress, decisions, blockers, and next actions ready when you return.',
	/** macOS download — GitHub Releases asset (direct .dmg) */
	downloadUrl:
		'https://github.com/jazib-bashir/daymark-website/releases/download/v0.1.0/Daymark_0.1.0_x64.dmg',
	downloadLabel: 'Get Daymark',
	downloadComingSoonLabel: 'Coming soon',
	downloadNote: 'macOS · Daymark 0.1.0',
	downloadFileName: 'Daymark_0.1.0_x64.dmg',
	/** Optional: set when a custom domain is connected (also update CI ASTRO_SITE / ASTRO_BASE). */
	customDomain: '' as string,
} as const;

export const navLinks = [
	{ href: '#product', label: 'Product' },
	{ href: '#features', label: 'Features' },
	{ href: '#privacy', label: 'Privacy' },
] as const;

export const footerLinks = [
	{ href: '#product', label: 'Product' },
	{ href: '#features', label: 'Features' },
	{ href: '#privacy', label: 'Privacy' },
	{ href: '#download', label: 'Download' },
] as const;

export type Screen = 'dashboard' | 'planning' | 'context' | 'project' | 'locker' | 'settings';

/** Editorial showcase layouts for the four-feature product story. */
export type FeatureLayout = 'media-end' | 'media-start' | 'featured';
export type FeatureTone = 'light' | 'soft' | 'dark';

/**
 * Order: Organize → Prioritize → Resume → Protect.
 */
export const features: {
	id: string;
	verb: string;
	category: string;
	title: string;
	copy: string;
	screen: Screen;
	layout: FeatureLayout;
	tone: FeatureTone;
	/** Drop a real PNG/WebP into public/images/screenshots/ and set this path to use it instead of the HTML mock. */
	image?: string;
	imageAlt?: string;
}[] = [
	{
		id: 'projects',
		verb: 'Organize',
		category: 'Projects',
		title: 'Everything about a project, in one place.',
		copy: 'Links, environments, notes, goals, and tasks stay connected to the project they belong to.',
		screen: 'project',
		layout: 'media-end',
		tone: 'light',
		// image: '/images/screenshots/project-atlas.png',
	},
	{
		id: 'planning',
		verb: 'Prioritize',
		category: 'Planning',
		title: 'Know what matters today.',
		copy: 'Set weekly goals and due dates, then focus on the work that needs attention now.',
		screen: 'planning',
		layout: 'media-start',
		tone: 'soft',
		// image: '/images/screenshots/planning.png',
	},
	{
		id: 'context',
		verb: 'Resume',
		category: 'Work Context',
		title: 'Pick up where you left off.',
		copy: 'Progress, decisions, blockers, and the next action stay with the task—ready when you return.',
		screen: 'context',
		layout: 'featured',
		tone: 'dark',
		// image: '/images/screenshots/work-context.png',
	},
	{
		id: 'locker',
		verb: 'Protect',
		category: 'Locker',
		title: 'Keep sensitive information separate.',
		copy: 'Credentials and environment variables live in a local encrypted vault, apart from ordinary notes.',
		screen: 'locker',
		layout: 'media-end',
		tone: 'light',
		// image: '/images/screenshots/locker.png',
	},
];
