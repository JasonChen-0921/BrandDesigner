# Chen Jiansheng Portfolio Design

## Goal

Create a dark, editorial personal portfolio for Chen Jiansheng, a brand designer, that makes his profile, selected work and contact information easy to browse on desktop while remaining safe on smaller screens.

## Visual direction

The page uses near-black #0A0B0D and #111216 foundations, warm-white typography, subdued grey metadata, and #FF6538 only for precise accents. A fixed 1700px content frame, hairline dividers, compact labels, oversized condensed headings, muted media and soft orange/blue-grey atmospheric light create the rhythm. The supplied screenshot informs only the vertical editorial pacing; its copy, imagery and visual assets are not reproduced.

## Information architecture

1. Full-screen hero with quiet video/poster background, fixed navigation, bilingual identity, scroll metadata and contact CTA.
2. Profile with portrait placeholder, resume-derived biography, published phone/email, service list and factual profile figures.
3. Six alternating work entries driven by project data, each linking to a matching `/projects/:slug` placeholder page.
4. Expertise grid with five disciplines and a concise process/tools strip.
5. Near-full-screen contact finale with channels, inquiry CTA, availability state, copyright and return-to-top control.

## Architecture

React Router maps the homepage and project detail placeholder. Content lives in `src/data`, media stays in `src/assets`, and presentational page sections remain focused components. A reusable reveal hook uses IntersectionObserver and respects reduced-motion settings. CSS owns responsive layout and motion without a UI framework.

## Constraints and acceptance

- React 18, Vite, TypeScript, React Router and native CSS only.
- No external image dependency. A missing/unplayable hero video shows a local gradient poster.
- Semantic landmarks, keyboard-accessible navigation/controls and no horizontal overflow at tablet or mobile sizes.
- Desktop uses a maximum 1700px content frame and a 100svh hero plus near-100svh footer.
- Navigation anchors, mobile menu, reveal animation and restrained project hover treatment must work.
- Name, public phone, email, biography and experience are derived from the supplied resume. Placeholder project assets are explicitly replaceable.
