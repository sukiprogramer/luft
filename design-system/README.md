# Luft

A paper sketchbook with the radio on: black-and-white street photos, loose ink characters, calm editorial type, with Radio Luft yellow as the accent and violet and blue as supporting colours. This system powers Suki's portfolio of work, art and Radio Luft.

The interactive reference for every page is the **Luft Portfolio** design canvas (claude.ai/artifact/MPth3z4whA4Ui8FEaZ8aN2). When this README and the canvas disagree, this README wins.

## Principles

1. **Paper and ink first.** Most of every page is `paper` with `ink` text and 2px ink borders. Colour arrives in whole blocks, never as tints or gradients.
2. **One loud thing per screen.** A yellow poster card, a violet band or a big Fraunces headline. Not all three side by side.
3. **Hand-made on a tidy grid.** Ink characters, squiggles and stickers break out of frames, but the grid underneath is strict: a 1280px column, 32px gutters, square corners.
4. **Editorial, not app-like.** Newspaper rules, uppercase kickers and serif headlines carry the structure. Cards don't get shadows or rounded corners.
5. **Real content or a labelled placeholder.** Never lorem ipsum. Missing facts appear as `[Your role]`-style placeholders so Suki can see what to fill in.

## Voice

Plain, warm and first person ("I sketched the dogs that came in every morning"). Short sentences. Buttons say what happens: "See the work", "Tune in", "Say hi", "Get in touch". Radio Luft copy can mix in Serbian, set with `lang="sr"`.

## Colour

| Role | Token | Rule |
|---|---|---|
| Ground | `paper` | Every page. `paper-deep` for panels and the App ideas band. |
| Text and line | `ink`, `ink-soft`, `muted` | `ink` for text and borders; `ink-soft` for standfirsts; `muted` only for metadata. |
| Accent | `yellow` + `on-yellow` | Accent buttons, poster cards, stickers, the current track, one highlighted word in a headline. |
| Radio | `violet` + `on-violet` | Radio Luft bands, the Trackmate project, the Eos playlist. Display type on violet may be `white`; body text is `on-violet`. |
| Links and quotes | `blue` | Text links, pull quotes, the Mozaik panel (on `quote-ground`), the Radio hero ground. |
| Photos | `photo`, `on-photo` | Ground behind B&W photos and photo placeholders. |
| Footer | `night`, `on-night` | Footer and "Next project" bands. |

Contrast: `ink` on `yellow` is 11:1 and `on-violet` on `violet` is 5.1:1. `white` on `violet` is only 3.6:1, so use it at 24px and up.

## Type

All four families are free on Google Fonts. Load them with:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..900,0..100,0..1&family=Poppins:wght@400;500;600&family=Bitter:wght@400;700&family=Gochi+Hand&display=swap">
```

- **Fraunces** (`display`) is the voice. For the display styles turn on the soft and wonky axes: `font-variation-settings: 'SOFT' 100, 'WONK' 1, 'opsz' 144`. Editorial styles (headline, title, pull-quote) use plain Fraunces at weight 500 or 400.
- **Poppins** (`sans`) for body, UI, buttons and uppercase kickers.
- **Bitter** (`slab`) only for Radio Luft: quotes, playlists and curator bylines. It echoes the slab in the Instagram posts.
- **Gochi Hand** (`hand`) only for the LUFT wordmark, uppercase with 2px tracking. Suki approved the hand-drawn wordmark. It stays in this face until Suki letters a custom one.

A highlighted word in a display headline is filled `yellow` with a `2px` ink outline (`-webkit-text-stroke: 2px var(--ink)`), as in "Work, art **&** a little radio."

## Layout

- Each full-width band (section) holds an inner wrapper: `max-width: var(--content-max)` (1280px), centred, `padding-inline: var(--gutter)` (32px), and `var(--gutter-mobile)` (20px) under 600px.
- Vertical section padding is `space-9` (96px) on desktop and `space-8` (64px) on mobile.
- Lay out with flex or grid plus `gap`. Two-column heroes use `flex-wrap: wrap` with children `flex: 999 1 560px` and `flex: 1 1 360px`, so they stack on phones without media queries.
- Card grids: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, gap `space-5`.
- Corners are `radius-0` everywhere except pills (`radius-pill`), the contact rows (`radius-md`) and the mobile sheet (`radius-sheet`).
- Anything tappable is at least `touch-min` (44px).

## Motifs

- **Broken frame:** a B&W photo block with an ink character crossing its bottom-left edge and a yellow starburst sticker over its top-right corner.
- **Newspaper panel:** `paper-deep` card with a 1px rule above and below an uppercase kicker, a Fraunces title and short body. Case studies open with a masthead: a 3px rule on top, a 1px rule below, with "CASE STUDY · No. 01 / CLIENT / YEAR" in between.
- **Poster card:** a `yellow` block with a 2px ink border, a display headline, one doodle and one button.
- **Colour band:** a full-width `violet` (or `yellow`) section with a 2px ink rule top and bottom.
- **Sticker:** a 14-point starburst, `yellow` fill and 2.5px ink stroke, with 1–2 words in a 13px uppercase label.
- **Doodles:** hand-drawn squiggles and motion ticks as inline SVG strokes, 2.5–3px ink, round caps. Use 1–2 per screen.

## Imagery

- Photography is black and white with grain. Colour only when the work itself is colour (Radio Luft posts).
- Illustrations are Suki's ink characters: solid black fills, no grey shading, often overlapping a frame edge. Until they exist, show a dashed 2px ink box labelled "[ Ink character ]".
- Images on colour bands get a 2px ink border and may tilt ±2°.

## Pages

| Page | Sections |
|---|---|
| Home | Header · broken-frame hero · Selected work (2 newspaper cards) · Radio Luft violet band · Art & ideas poster card + 3 tiles · About · Footer |
| Work | Header · index of 2 projects (poster cards) · case study Paper Dogs · case study Trackmate (violet band, phone mockup) · Back to top · Footer |
| Art | Header · title + jump pills · 01 Radio Luft (violet) · 02 Comusity (yellow poster card + photos) · 03 App ideas (paper-deep, 3 idea cards) · Footer |
| Radio Luft | Header · photo hero on blue · The shows (4 cards) · Eos player + Mozaik quote · Retreats yellow band · From the feed · Footer |

The **Say hi** button in the header and the **Get in touch** button in the footer open the Say hi dialog on every page. It is a centred dialog on desktop and a bottom sheet on phones.

## Mobile

- The header shrinks to the wordmark (34px), a **Say hi** button and a ☰ menu button. The menu opens full screen on `yellow` with Fraunces 46px links.
- Display sizes step down: display-xl to 84px, display-l to 52–60px, headline to 40px.
- Everything stacks to one column. Image pairs stay two-up; the App ideas cards scroll horizontally.

## Building it (notes for Claude Code)

- Start from `tokens.css` (generated from `tokens.json`) and use the CSS custom properties, never raw hex values. The theme is chosen with `data-theme="light|dark"` on `<html>`, defaulting to `prefers-color-scheme`.
- Build the components below as real components: Header, Button, NewspaperCard, PosterCard, Sticker, ColourBand, Player, SayHiDialog, Footer.
- Use semantic HTML: real `<button>` and `<a href>`, `<nav aria-label>`, `aria-current="page"` on the active nav link (shown with a 4px yellow underline), a `role="dialog"` with `aria-modal` and a focus trap for Say hi, closing on Esc.
- Respect `prefers-reduced-motion`; motion is limited to a short fade or slide on the dialog and menu.
- Radio Luft images are in the **Radio Luft** asset group. Everything else is a placeholder until Suki sends content: photos, ink characters, project write-ups, bio, LinkedIn URL, email and the site's domain.
- The Work projects (Paper Dogs, Trackmate) are samples. Their copy is invented; keep them clearly marked as samples.
