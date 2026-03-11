---
name: Mandai Website Redesign
overview: "Redesign the M&A.i website to align with the attached reference: a full-bleed hero photo, elegant serif typography, light cream content sections, and the warm taupe accent color replacing the current dark/indigo palette."
todos:
  - id: globals-css
    content: Update globals.css with new palette variables (cream bg, dark text, taupe accent)
    status: completed
  - id: layout-font
    content: Add Cormorant Garamond display font to layout.tsx
    status: completed
  - id: page-redesign
    content: "Full redesign of page.tsx: hero with photo bg, cream content sections, taupe accents throughout"
    status: completed
  - id: form-restyle
    content: Restyle AccessForm.tsx inputs and button for light/cream theme
    status: completed
isProject: false
---

# Mandai Website Redesign

## Design Direction

**Reference design key traits:**

- Full-screen hero with `hero-banner.png` (dramatic B&W architectural photo) as background
- White/light text overlaid on the dark hero image
- Below-the-fold sections: light warm cream background
- Typography: elegant serif (Cormorant Garamond) for headings, Geist for body
- Accent color: `rgb(159, 143, 124)` — warm taupe, replacing all indigo/violet

**Color palette:**

- Hero background: `hero-banner.png` + dark overlay for legibility
- Content background: `#faf8f5` (warm off-white)
- Primary text on light: `#1a1a1a`
- Accent: `rgb(159, 143, 124)` (taupe) for buttons, borders, highlights
- Logo: `logo-white.svg` on hero, `logo.svg` on light sections

---

## Files to Change

### `[app/globals.css](app/globals.css)`

Update CSS variables to reflect new palette:

```css
:root {
  --background: #faf8f5;
  --foreground: #1a1a1a;
  --accent: rgb(159, 143, 124);
}
```

### `[app/layout.tsx](app/layout.tsx)`

Add `Cormorant_Garamond` from Google Fonts as the display/heading font (`--font-display` variable), alongside existing Geist.

### `[app/page.tsx](app/page.tsx)`

Full section-by-section restyle:

- **Nav**: Transparent on hero, `logo-white.svg`, CTA button styled with taupe accent border/color
- **Hero**: Full viewport, `hero-banner.png` as `background-image` with a subtle dark overlay, centered white text, serif headline, taupe CTA button
- **Stats bar**: Light cream bg, taupe numerals, muted body text
- **Features**: Light cream bg, taupe icon borders, serif section labels
- **Contact form section**: Light cream bg, taupe-bordered card, serif heading
- **Footer**: Light border, cream bg, dark muted text

### `[app/components/AccessForm.tsx](app/components/AccessForm.tsx)`

Restyle all inputs for light theme: light bg inputs with taupe focus ring, taupe submit button replacing the current indigo one.

---

## Key Style Replacements

- `bg-[#080810]` → `bg-[#faf8f5]`
- `text-white` (body) → `text-[#1a1a1a]`
- `bg-indigo-600` / `hover:bg-indigo-500` → `bg-[rgb(159,143,124)]` / `hover:bg-[rgb(140,125,107)]`
- `border-indigo-500/...` → `border-[rgb(159,143,124)]/...`
- `text-indigo-400` → `text-[rgb(159,143,124)]`
- All glow/gradient effects removed or replaced with warm neutral equivalents
- Heading font class: `font-display` applied to `h1`, `h2` via the new CSS variable

