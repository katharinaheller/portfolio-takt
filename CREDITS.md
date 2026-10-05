# Credits and provenance — TAKT

Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind fiktiv.

## Foundation and modifications

Adapted the Radix Accordion composition from nobruf/shadcn-landing-page (ec8e18e8ed56ed6636023ced09948515c19258cc), MIT © 2025 Bruno Felipy, in src/components/Faq.tsx. Removed Tailwind, Lucide and its visual styles; replaced questions, appearance and layout. Studied ixartz/Next-js-Boilerplate (6acd079673a4eaaf7df6875d8025d2bec1240985), MIT © 2026 Remi W., for centralized AppConfig, strict TypeScript and post-deployment sanity tests. No Clerk, database, telemetry or third-party backend copied. Next App Router selected for prerendered marketing pages with independently interactive product components.

Exact upstream MIT texts are retained in `licenses/` for studied/adapted priority repositories. The dependency inventory is in `DEPENDENCY_LICENSES.md`. Package manager lockfiles pin the inspected dependency graph.

## Typefaces

DM Sans — DM Sans Project Authors. Source: https://github.com/googlefonts/dm-fonts. Delivered by the corresponding Fontsource npm packages, licensed SIL Open Font License 1.1. Complete notices are retained in `licenses/*-OFL.txt`. Latin WOFF2 includes German umlauts/ß; fonts are locally served. Variable faces use one file; DM Serif Display uses only its regular weight. No Google Fonts requests.

## Media and original design

No stock photography. Original code-native dashboard, timeline, ramp plan, icons and charts. No third-party logos or claimed integration partnerships.

All raster concept imagery was created for this project with the built-in image generation tool on 2026-10-05. Prompt records are in `ASSET_PROVENANCE.json`. These generated outputs are not CC0 stock photographs and are not claimed to be copyright-exclusive. No third-party photograph or image-source license was inferred from a source-code license. The assets were selected, visually reviewed, converted to responsive WebP and shipped locally. Original generations were retained in the generation archive. OpenAI terms governing the generation service apply to the outputs; no separate stock license or paid stock source was used.

Logos, SVG favicons, CSS graphic elements and the social card are original project-specific code-native work. Icons are original simple SVG/CSS or generic Unicode symbols, not an imported icon library. No audio, external video, commercial template, copied brand asset or unlicensed texture is included.

## Libraries

Runtime/build libraries and exact versions/licenses are listed in `DEPENDENCY_LICENSES.md`. Three.js, Astro, Eleventy, Next.js, React, Radix UI and glTF Transform are used only where present in this project's package.json. Retained direct dependency notices are in `licenses/dependencies/`. Test tooling includes Playwright (Apache-2.0) and ESLint/TypeScript-related packages under their package licenses. No licensing guarantee is made beyond the inspected files and recorded provenance.

