# Migration to Astro SSG and TypeScript

**Status:** accepted
**Date:** 2026-10-09

### Context & Problem Statement
The original codebase implemented a pseudo-SPA by injecting HTML strings through JavaScript template literals inside `scripts/content_handler.js`. This caused lack of native URL routing, inability to bookmark/share routes, zero SEO indexability on initial page load, and poor code maintainability without HTML linting or type safety.

### Decision
Decided to **migrate from vanilla JavaScript string injection to Astro SSG with TypeScript** because:
1. **Multi-page static HTML output**: Astro compiles routes (`/`, `/material`, `/sobre`) directly to pure HTML files at build time, giving native browser navigation, working back/forward buttons, and complete SEO crawlers accessibility.
2. **Zero client-side JS overhead**: Unlike heavier frameworks (Next.js, Nuxt), Astro ships 0 KB of client-side JavaScript by default unless explicitly needed.
3. **Type safety & maintainability**: TypeScript provides static checks for props, layout components, and data structures.

### Consequences
- **Good:** Complete SEO crawlability, native browser routing, component reusability (`Layout.astro`, `Nav.astro`), TypeScript typing.
- **Bad:** Introduces Node.js build step (`package.json`, `astro build`), breaking the original zero-dependency constraint.
