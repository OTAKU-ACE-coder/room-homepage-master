# Room Homepage: Project Explanation

## What this project is
A starter kit for the **Frontend Mentor "Room homepage"** challenge. The goal is to build a responsive furniture-store homepage with a hero slider, matching the JPG designs as closely as possible.

> Status: **complete.** `index.html` now has full semantic markup, `styles.css` handles the responsive layout, and `script.js` powers the slider and mobile menu.

## Folder structure
| Path | Purpose |
|---|---|
| `index.html` | Finished page markup |
| `styles.css` | All styles (mobile first, desktop breakpoint at 48em) |
| `script.js` | Hero slider (3 slides, buttons and arrow keys) and mobile menu |
| `design/` | Reference JPGs: desktop slides 1-3, mobile design, mobile navigation, active (hover) states |
| `images/` | Optimized assets: hero images (desktop and mobile, 3 each), about images, logo, icons (arrow, angle left/right, hamburger, close), favicon |
| `style-guide.md` | Colors, font and layout widths |
| `preview.jpg` | Preview image of the finished design |
| `README.md` / `README-template.md` | Challenge brief and a template for your own README |
| `AGENTS.md` / `CLAUDE.md` | Instructions for AI coding assistants (CLAUDE.md just points to AGENTS.md) |

## What users must be able to do
1. See the best layout for their screen size (responsive).
2. See hover states on every interactive element.
3. Navigate the slider with mouse/trackpad **or keyboard**.

## Design details (from style-guide.md)
- **Widths:** mobile 375px, desktop 1440px (test 320px up to large screens).
- **Colors:** White `hsl(0,100%,100%)`, Grey 500 `hsl(0,0%,63%)`, Grey 800 `hsl(0,0%,27%)`, Black `hsl(0,0%,0%)`.
- **Font:** League Spartan, weights 500/600/700. Body text 16px.

## Page sections in the starter HTML
1. Navigation: Home, Shop, About, Contact
2. Hero slider headline: "Discover innovative ways to decorate" + Shop now
3. "We are available all across the globe"
4. "Manufactured with the best materials"
5. "About our furniture"

## Suggested approach
1. Structure the HTML semantically (`header`, `nav`, `main`, sections, `button` for slider controls).
2. Add base styles: font, colors, box-sizing, 16px body.
3. Build mobile first, then add a desktop breakpoint.
4. Add slider JS: three slides, next/previous buttons, arrow-key support, and swap hero images and text per slide (use the mobile images on small screens, e.g. with `<picture>`).
5. Build the mobile hamburger menu using `icon-hamburger.svg` and `icon-close.svg`.
6. Add hover states, then test keyboard navigation and accessibility.

## Before you submit
Replace `Your Name Here` in the footer, rewrite the README from `README-template.md`, and deploy (GitHub Pages, Vercel or Netlify).

## How the finished solution works
- **Slider:** `script.js` holds the three slides (title, text, desktop and mobile image). Next/previous buttons wrap around, and the left/right arrow keys work while focus is inside the hero. The text area is an `aria-live` region so screen readers hear slide changes.
- **Responsive images:** a `<picture>` element serves the mobile image below 48em and the desktop image above it.
- **Mobile menu:** the hamburger opens a white bar with the links and a dimmed backdrop. Escape, the backdrop or the close button closes it, and resizing to desktop resets it.
- **Hover/focus states:** nav underline, "Shop now" fade, slider button highlight, and visible focus outlines.
- **Motion:** fades are disabled for users who prefer reduced motion.
