# Brand Designer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Vite-powered React portfolio with an editorial dark visual system and data-driven project detail routes.

**Architecture:** Route composition remains thin: `HomePage` assembles section components and `ProjectPage` reads a slug from a single project data source. Components own one visual region, while the global CSS file provides responsive grid, motion and tokens.

**Tech Stack:** React 18, TypeScript, Vite 5, React Router 6, native CSS.

## Global Constraints

- Keep all editable copy, contacts, project records and social links in `src/data`.
- Keep local replacement assets in `src/assets`; do not reference external images.
- Use #0A0B0D / #111216 foundations, #F2F0EB text, #9A9A96 secondary text, and #FF6538 accents.
- Meet keyboard, reduced-motion and responsive no-overflow requirements.

---

### Task 1: Scaffold and design tokens

**Files:** Create `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/styles/global.css`.

- [ ] Add the Vite React TypeScript runtime, scripts and a clean HTML mount point.
- [ ] Set CSS custom properties, global reset, typography, max-width container and reduced-motion overrides.
- [ ] Verify `npm install` and `npm run build` complete without diagnostics.

### Task 2: Centralize portfolio content and replacement assets

**Files:** Create `src/data/portfolio.ts`, `src/assets/portrait-placeholder.svg`, `src/assets/project-*.svg`, `src/assets/hero-poster.svg`.

- [ ] Define typed profile, project, expertise and social records from the resume, with six local placeholder project covers.
- [ ] Create restrained editable SVG posters that work offline and declare their replacement purpose in comments.
- [ ] Verify all imports resolve through TypeScript.

### Task 3: Implement reusable interactions and shell

**Files:** Create `src/hooks/useReveal.ts`, `src/components/SiteHeader.tsx`, `src/components/SectionHeader.tsx`, `src/components/VideoBackdrop.tsx`.

- [ ] Add IntersectionObserver-based reveal state and a reduced-motion fallback.
- [ ] Implement accessible anchor navigation, a labelled mobile menu and video fallback poster behaviour.
- [ ] Verify keyboard focus reaches every header control and links work without a pointer.

### Task 4: Implement homepage sections

**Files:** Create `src/components/Hero.tsx`, `src/components/Profile.tsx`, `src/components/ProjectList.tsx`, `src/components/Expertise.tsx`, `src/components/ContactFooter.tsx`, `src/pages/HomePage.tsx`.

- [ ] Build all five required sections from data with semantic landmarks, design-system classes and desktop-first alternating work layout.
- [ ] Add subtle hover/reveal/scroll treatments with no animation under reduced motion.
- [ ] Verify section anchors and project links are valid at desktop, tablet and mobile widths.

### Task 5: Add router and detail placeholder

**Files:** Create `src/pages/ProjectPage.tsx`, `src/App.tsx`.

- [ ] Route `/` and `/projects/:slug`, rendering project metadata for valid records and a useful not-found state otherwise.
- [ ] Provide navigation back to the selected work section.
- [ ] Verify direct navigation to a valid and invalid slug via `npm run build` and browser checks.

### Task 6: Document, run and visually QA

**Files:** Create `README.md`; verify the complete application.

- [ ] Document installation, development startup, build command and exact content/asset replacement locations.
- [ ] Start Vite and inspect the desktop homepage and a project route in a browser.
- [ ] Capture a current screenshot, compare it to the accepted visual direction and correct visible overflow, hierarchy or interaction defects.
