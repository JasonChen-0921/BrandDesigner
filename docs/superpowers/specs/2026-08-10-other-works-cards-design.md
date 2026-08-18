# Other Works Cards Design

## Goal

Replace the empty landscape placeholders in the Other Works section with consistent portrait 3:4 project cards.

## Card layout

- Each card uses a 3:4 portrait ratio and remains a horizontal-scroll item.
- The top row shows `品牌设计` on the left and `(2025)` on the right.
- A centered square dark-gray image placeholder occupies the middle of the card, ready for a future cover image.
- The lower area shows `德康当家`, the supplied two-line description, and a compact outlined arrow button at bottom right.
- All five cards use identical placeholder content until project assets are supplied.

## Constraints

- Keep the existing wheel-to-horizontal-scroll behavior and hidden scrollbar.
- Only change `src/components/OtherWorks.tsx` and `src/styles/other-works.css`.
- Do not add dependencies or modify unrelated pages.

## Verification

- Run `npm.cmd run build`.
- Open the homepage and visually confirm portrait cards, the square placeholder, text hierarchy, and horizontal wheel interaction.
