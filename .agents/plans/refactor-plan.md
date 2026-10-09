# Refactoring Plan: Astro SSG & Multi-Page Migration

## Problem Summary
1. **Pseudo-SPA via string literals**: HTML embedded in `scripts/content_handler.js`, breaking URLs, browser history, SEO, and maintainability.
2. **Asset Bloat**: 6.2 MB uncompressed background images, 38.5 MB zip tracked in git.
3. **Viewport & Mobile Scrolling**: Locked `100vh` + `overflow: hidden` causing mobile clipping and address-bar layout shift.
4. **Accessibility & Heading Hierarchy**: Invalid `<h2>` in contact links, empty initial DOM, missing ARIA tab attributes.

---

## Phase 1: Toolchain & Project Bootstrap
- [x] Initialize `package.json` with minimal dependencies (`astro`, `typescript`, `@astrojs/check`).
- [x] Create `astro.config.mjs` configured for static output (`output: 'static'`).
- [x] Create `tsconfig.json` extending `astro/tsconfigs/strict`.
- [x] Verify build and check scripts (`npm run build`, `npm run check`).

## Phase 2: Design Tokens & Base Layout
- [x] Migrate `css/styles.css` into `src/styles/global.css` (Glassmorphism, CSS variables, Outfit/Lato fonts).
- [x] Implement Option 1 layout model: unlocked document flow (`overflow-y: auto`), sticky header, responsive glass card.
- [x] Create `src/layouts/Layout.astro` with full HTML5 semantic head (SEO meta tags, favicon, OpenGraph).
- [x] Build `src/components/Header.astro` and `src/components/Footer.astro`.
- [x] Add active route indicator via `Astro.url.pathname`.

## Phase 3: Route Migration (Multi-Page Static)
- [x] **Home Page (`src/pages/index.astro`)**:
  - Migrate content from `conteudos['home']`.
  - Maintain structured cards, emojis, and highlighting.
- [x] **Material Page (`src/pages/material.astro`)**:
  - Migrate content from `conteudos['material']`.
  - Add download action linking to optimized asset / external release.
- [x] **About Page (`src/pages/sobre.astro`)**:
  - Migrate content from `conteudos['sobre']`.
  - Fix heading hierarchy: replace `<a><h2>...</h2></a>` with semantic `<p>` / `<span>` formatted contact cards.

## Phase 4: Asset Optimization
- [x] Convert `img/bg-w.jpg` and `img/bg.jpg` to WebP/AVIF format (<150 KB).
- [x] Move heavy binary `desenvolvendo_sustentabilidade_em_espacos_de_aprendizagem.zip` to external release / document storage pattern, removing direct git bloat.
- [x] Retain legacy vanilla files in archive / fallback if needed.

## Phase 5: Verification & Quality Gates
- [x] Execute `npx astro check` (0 TypeScript / Astro syntax errors).
- [x] Execute `npx astro build` (verify static output in `dist/`).
- [x] Perform smoke test across `/`, `/material`, `/sobre` routes.
- [x] Verify responsive viewport behavior on mobile simulated screen sizes.
- [x] Update `.agents/PROGRESS.md` with session summary and atomic commit.

