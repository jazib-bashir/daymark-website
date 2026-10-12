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
	/** macOS download URL — leave empty until the release is public */
	downloadUrl: '' as string,
	downloadLabel: 'Get Daymark',
	downloadComingSoonLabel: 'Coming soon',
	downloadNote: 'Private preview · Desktop application',
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

/** media-end: copy left, product right · media-start: product left, copy right · feature: emphasized Work Context */
export type ShowcaseLayout = 'media-end' | 'media-start' | 'feature';

export const showcases: {
	id: string;
	step: string;
	verb: string;
	category: string;
	title: string;
	copy: string;
	bullets: string[];
	screen: Screen;
	layout: ShowcaseLayout;
	tone?: 'default' | 'soft' | 'dark';
	/** Drop a real PNG/WebP into public/images/screenshots/ and set this path to use it instead of the HTML mock. */
	image?: string;
	imageAlt?: string;
}[] = [
	{
		id: 'projects',
		step: '01',
		verb: 'Organize',
		category: 'Projects',
		title: 'Everything about a project, in one place.',
		copy: 'Links, environments, references, notes, goals, and tasks remain connected to the project they belong to.',
		bullets: [
			'Project links and environments stay close',
			'Goals and tasks share the same project context',
			'Notes capture what the README does not',
		],
		screen: 'project',
		layout: 'media-end',
		tone: 'default',
		// image: '/images/screenshots/project-atlas.png',
	},
	{
		id: 'planning',
		step: '02',
		verb: 'Prioritize',
		category: 'Planning',
		title: 'Know what matters today.',
		copy: 'Shape weekly and monthly goals, set priorities and due dates, then see a focused view of the work that needs your attention now.',
		bullets: [
			'Weekly and monthly goals',
			'Priorities, due dates, and progress',
			'A focused dashboard for today',
		],
		screen: 'planning',
		layout: 'media-start',
		tone: 'soft',
		// image: '/images/screenshots/planning.png',
	},
	{
		id: 'context',
		step: '03',
		verb: 'Resume',
		category: 'Work Context',
		title: 'Pick up where you left off.',
		copy: 'Every task keeps the trail of progress, decisions, blockers, journal history, and the next action waiting for you.',
		bullets: [
			'Record progress without starting a timer',
			'Separate decisions from blockers',
			'Leave a clear next action for future-you',
		],
		screen: 'context',
		layout: 'feature',
		// image: '/images/screenshots/work-context.png',
	},
	{
		id: 'locker',
		step: '04',
		verb: 'Protect',
		category: 'Locker',
		title: 'Keep sensitive information separate.',
		copy: 'Credentials and environment variables live apart from ordinary project details in a locally stored, encrypted vault.',
		bullets: [
			'Masked by default',
			'Grouped by project',
			'Kept apart from ordinary project notes',
		],
		screen: 'locker',
		layout: 'media-end',
		tone: 'default',
		// image: '/images/screenshots/locker.png',
	},
];
