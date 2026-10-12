# Daymark website

Marketing site for [Daymark](https://github.com/jazib-bashir/daymark) — a local-first desktop workspace for project context.

## Tech stack

- [Astro](https://astro.build/) (static)
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open the URL printed by Astro (usually `http://localhost:4321`).

## Production build

```bash
npm run build
npm run preview
```

## Configuration

| Setting | Where | Notes |
| --- | --- | --- |
| Download URL | `src/data/site.ts` → `downloadUrl` | Leave empty for “Coming soon”; set to a release asset URL when ready |
| Site / base | `astro.config.mjs` + workflow env | Project Pages uses `/daymark-website/`; override with `ASTRO_SITE` / `ASTRO_BASE` for a custom domain |
| Product screenshots | `public/images/screenshots/` | Uncomment `image` paths in `src/data/site.ts` (and Hero / Privacy) when real PNGs are added |

## Product screenshots

Until real Daymark screenshots are added, feature sections use the approved HTML app-window mocks (Atlas / Northstar / Relay demo data only).

Suggested filenames:

- `hero-work-context.png`
- `project-atlas.png`
- `planning.png`
- `work-context.png`
- `locker.png`
- `settings-backup.png`

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which builds with Astro and deploys via `upload-pages-artifact` / `deploy-pages`.

**One-time repository setup:** If deploy fails with `Failed to create deployment (status: 404)`:

1. Open **Repository Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Re-run the latest **Deploy to GitHub Pages** workflow.

**Custom domain later:** add `public/CNAME`, then set workflow env to `ASTRO_BASE=/` and `ASTRO_SITE=https://your-domain`.
