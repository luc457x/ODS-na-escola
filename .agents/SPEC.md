# Spec (SPEC.md)

## 1. Overview & Goals

Web portal for project **Desenvolvendo sustentabilidade em ambientes de aprendizagem**, hosting initiatives "Plantando Consciência" and "Caminhos da Igualdade" focused on environmental education and inequality reduction in school environments. Static educational resource repository built as university extension activity.

## 2. Scope

Static SPA web repository presenting projects, distributing educational materials and extension documents for download, and providing contact channel.

## 3. Tech Stack

- **HTML5 Vanilla**: Base document structure (`index.html`).
- **CSS3 Vanilla**: Styling via Glassmorphism, Flexbox, design tokens in `css/styles.css`, fonts 'Outfit' and 'Lato'.
- **JavaScript Vanilla**: Single Page Application routing and dynamic content injection via `scripts/content_handler.js`. No frameworks or build tooling.

## 4. Functional Requirements (FR)

- **FR1 (App Shell)**: File `index.html` defines persistent skeleton (Header, Nav, Footer, and `<main id="conteudo">`).
- **FR2 (Content Injection)**: Sections ("home", "material", "contato") injected dynamically into container `<main id="conteudo">` from object `conteudos` using template literals in `scripts/content_handler.js`.
- **FR3 (SPA Navigation)**: Tab switching updates `active` classes on navigation links and triggers fade-in transitions.

## 5. Business Rules (BR)

- **BR1 (Strict Vanilla)**: Maintain 100% Vanilla code (HTML, CSS, JS). No frameworks (React, Vue, etc.) and no build tools (npm, bundlers).
- **BR2 (SPA Integrity)**: Do not create separate `.html` files for new pages. All page content must be added as keys within object `conteudos` inside `scripts/content_handler.js`.
- **BR3 (Naming & Language Conventions)**: Prefer Portuguese for code identifiers matching existing codebase (`carregarConteudo`, `conteudoDiv`). User-facing UI content and code comments must remain in Brazilian Portuguese (pt-BR).

## 6. Non-Functional Requirements (NFR)

- **NFR1 (Design & UX)**: Preserve modern aesthetic using Glassmorphism, CSS variable color palette (`:root`), and 'Outfit'/'Lato' typography.
- **NFR2 (Transitions)**: Preserve smooth fade-in transitions when switching content tabs.
- **NFR3 (Accessibility & Semantics)**: Semantic HTML5 structure with responsive layout across mobile and desktop.

