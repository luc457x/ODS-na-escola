# Layout and Viewport Scrolling Model

**Status:** accepted
**Date:** 2026-10-09

### Context & Problem Statement
The original layout locked `html` and `body` with `overflow: hidden` and `height: 100vh`, trapping content inside an inner glass card with nested scrolling. On mobile browsers with dynamic address bars, `100vh` caused vertical clipping and layout shifts.

### Decision
Decided to **switch to Option 1: Standard document flow with sticky header (`overflow-y: auto` on document, fluid height)** because:
1. **Natural mobile scrolling**: Native momentum scrolling, eliminates address bar jumpiness, and supports browser pull-to-refresh without nested scroll conflicts.
2. **Accessibility**: Screen magnifiers and keyboard navigation behave consistently with standard browser flow.

### Preserved Fallback (Option 2)
If Option 1 compromises the intended visual glass card aesthetic on desktop displays, we will fallback to **Option 2: Fixed Viewport Modal Container**:
- Use modern CSS dynamic viewport units (`min-height: 100dvh` / `max-height: 100dvh`) instead of `100vh`.
- Container cards retain glassmorphism border and internal custom scrollbar, with explicit `overscroll-behavior: contain`.

### Consequences
- **Good:** Frictionless mobile reading experience, no content cut off under sticky footers/headers.
- **Bad:** Desktop full-bleed fixed card appearance will scroll with page content unless sticky positioning applied.
