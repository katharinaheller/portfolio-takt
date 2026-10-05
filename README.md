# TAKT

Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind fiktiv.

A complete German-language portfolio demonstration. Company, products, staff roles, business figures and location context are fictional. This is not a real client project or operational business.

**Live:** https://katharinaheller.github.io/portfolio-takt/

**Preview:** [Desktop](reports/desktop.png) · [Mobile](reports/mobile.png) · [First viewport](reports/hero.png)

## Client concept

Dock appointment and exception-management product for DACH logistics teams. Operations-first product explanation, lavender/lime interface and an interactive exception-resolution flow. Primary conversion: try the real local demo, evaluate transparent hypothetical pricing and plan a fictional pilot.

## Stack and architecture

`src/app` contains App Router pages. `components` split the interactive dashboard, pricing, ROI, accordion and sales simulation into focused client components. Product data is fictional and local, no server API. App Router exports static HTML, route-specific JS and assets.

Locale `de-DE`, German public copy, EUR display. Static output: `out/`. Each project installs and builds independently; no sibling source import or root workspace dependency is required.

## Local setup

Recommended Node.js **24.16+** (see .nvmrc); npm lockfile supplied. The implementation was also built and checked on the preinstalled Node 24.11; current Astro ESLint packages advertise a higher engine minimum, so use the recommended version for new installations.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
npx playwright install chromium
npm test
```

Default smoke-test preview port is 4173. An existing Chrome installation can be selected with `PLAYWRIGHT_CHANNEL=chrome`; set `TEST_URL` to test an already-running or deployed instance. Tests exercise real interactions and validate the principal user journey. No backend credentials are needed.


## Production build and deployment

```sh
npm run build:production
```

This reads `site.config.json`, sets the correct origin/base path and builds a portable static artifact. `postbuild` generates canonical sitemap/robots files. For a different host, edit site.config.json and rebuild; a plain `npm run build` uses the domain root for local previews. Use BASE_PATH (Astro/Vite/Eleventy), NEXT_PUBLIC_BASE_PATH (Next.js) and SITE_ORIGIN for explicit deployment overrides.

Published on GitHub Pages from the `docs/` directory of the project's public repository. Repository: https://github.com/katharinaheller/portfolio-takt. The Pages host is used for a fictional portfolio demonstration; it does not process commerce or provide an operational SaaS service. Cloudflare Pages was preferred but no authenticated local session was available. No paid plans, payment details or paid services were enabled.

To republish: run the production build, synchronize the output into `docs/`, retain `docs/.nojekyll`, commit and push. For Cloudflare Pages, use `npx wrangler pages deploy out --project-name portfolio-takt` after authentication and after configuring a root base path for that host.

## Accessibility, privacy and SEO

Semantic regions, one h1 per page, meaningful titles, skip link, labelled controls, visible focus, mobile navigation with Escape, reduced-motion handling and native or Radix keyboard interactions. Automated axe checks target WCAG 2.2 AA; these do not replace a complete manual assistive-technology audit. Tested responsive widths: 320, 390, 768, 1024, 1440 and 1920 pixels. Keyboard entry and principal navigation verified.

No analytics, marketing scripts, external font calls, maps, embedded videos or unnecessary consent banner. No application cookies or browser storage are used. Forms do not send requests. Hosting still processes ordinary connection data. Legal demo pages are explicitly incomplete for a real operating business; actual operator information and a legal review are needed for a commercial launch.

Unique German title/description, canonical, Open Graph, Twitter card, local social image, SVG favicon, sitemap and robots file. Structured data deliberately describes fictional content and does not fabricate real awards, review ratings or offers. Images include dimensions, responsive variants and useful German alt text.

## Quality evidence

Local/production browser audits, screenshots and Lighthouse reports are in `reports/`. Lighthouse figures are single-run mobile lab measurements, not field Core Web Vitals or an INP guarantee. The root PORTFOLIO_OVERVIEW.md records the final verified results. Functional tests live in `tests/`.

## Open-source and assets

Adapted the Radix Accordion composition from nobruf/shadcn-landing-page (ec8e18e8ed56ed6636023ced09948515c19258cc), MIT © 2025 Bruno Felipy, in src/components/Faq.tsx. Removed Tailwind, Lucide and its visual styles; replaced questions, appearance and layout. Studied ixartz/Next-js-Boilerplate (6acd079673a4eaaf7df6875d8025d2bec1240985), MIT © 2026 Remi W., for centralized AppConfig, strict TypeScript and post-deployment sanity tests. No Clerk, database, telemetry or third-party backend copied. Next App Router selected for prerendered marketing pages with independently interactive product components.

See [CREDITS.md](CREDITS.md), [DEPENDENCY_LICENSES.md](DEPENDENCY_LICENSES.md), `licenses/` and `ASSET_PROVENANCE.json` for exact origins, retained notices and media prompts. No template stock images, brand names, customer claims or authentication/payment integrations were retained.

## Known intentional limits

The transport system is a local demonstration, not a backend product. Integrations and enterprise security controls are design requirements, not operational connections or certifications. ROI values are explicit hypothetical calculations.

