# Spec (SPEC.md)

## 1. Overview & Goals

Web portal for project **Desenvolvendo sustentabilidade em ambientes de aprendizagem**, hosting initiatives "Plantando Consciência" and "Caminhos da Igualdade" focused on environmental education and inequality reduction in school environments. Static educational resource repository built as university extension activity.

## 2. Scope

Multi-page static website presenting projects, distributing educational materials and extension documents for download, and providing a direct contact channel.

## 3. Tech Stack

- **Framework**: Astro (SSG - Static Site Generation, zero client-side JavaScript by default).
- **Language**: TypeScript (`.ts` / `.astro` scripts).
- **Styling**: CSS3 Vanilla (Glassmorphism design tokens, Flexbox, fonts 'Outfit' and 'Lato').
- **Runtime / Package Manager**: Node.js v24+, npm.

## 4. Functional Requirements (FR)

- **FR1 (Layout & Navigation Shell)**: Shared layout component (`src/layouts/Layout.astro`) providing persistent Header, sticky navigation bar, and Footer.
- **FR2 (Multi-Page Static Routes)**: Distinct static pages for `/` (Home), `/material` (Materials download & guide), and `/sobre` (About & Contact). Fully pre-rendered at build time.
- **FR3 (Active Route Indication)**: Navigation buttons highlight current active page based on current URL pathname.
- **FR4 (Resource Distribution)**: Material page provides verified links/downloads for extension project packages.

## 5. Business Rules (BR)

- **BR1 (Minimal Framework Footprint)**: Use Astro purely as a static compiler. Output zero unnecessary client-side JavaScript (`<script>` only when strictly interactive behavior required).
- **BR2 (File-Based Structure)**: Pages reside strictly under `src/pages/`. Shared components reside in `src/components/` and layouts in `src/layouts/`.
- **BR3 (Naming & Content Language)**: User-facing interface text, public documentation, and code comments must remain in Brazilian Portuguese (pt-BR). Engineering specs, commit messages, and harness rules remain in English.
- **BR4 (Asset Distribution)**: Heavy binaries (>10 MB, e.g., zip archives) must not be tracked directly in Git repository; offloaded to release assets or external storage.

## 6. Non-Functional Requirements (NFR)

- **NFR1 (Responsive Viewport Flow)**: Unlocked document scroll flow (`overflow-y: auto`) with sticky header. (Fallback model: fixed 100dvh modal recorded in [ADR 0002](./docs/ADRs/0002-layout-and-viewport-scrolling-model.md)).
- **NFR2 (Asset Weight & Performance)**: Background and raster images optimized as WebP/AVIF (<150 KB each) to guarantee high Core Web Vitals and low mobile data consumption.
- **NFR3 (Accessibility & Semantics)**: Valid semantic HTML5 headings (`h1` -> `h2` -> `h3`), ARIA landmarks, WCAG-compliant color contrast ratios.
- **NFR4 (SEO Indexability)**: Pre-rendered static HTML with proper meta tags (`title`, `description`, OpenGraph) per route.
