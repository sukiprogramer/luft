# Luft

Suki's portfolio of work, art and Radio Luft, built with [Astro](https://astro.build) on the Luft design system.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the build
```

The build is plain static HTML, CSS and a little JavaScript.

## Hosting

Every push to `main` deploys to GitHub Pages at https://sukiprogramer.github.io/luft/ through `.github/workflows/deploy.yml`. Pages must be switched on once: repo **Settings → Pages → Source: GitHub Actions**.

Links in the source are root-relative (`/work/`) and go through `link()` in `src/data/link.ts`, which adds the `/luft` base. With a custom domain, set `site` to it in `astro.config.mjs` and remove `base`.

## Where things live

| Path | What it holds |
|---|---|
| `design-system/` | The Luft design system: rules (`README.md`), `tokens.json`, `tokens.css` and component references. |
| `src/styles/tokens.css` | Tokens from `design-system/tokens.css`, without the font import (fonts load in `Base.astro`). |
| `src/styles/global.css` | Layout, type helpers and placeholder styles, all on tokens. |
| `src/components/` | Header, Button, NewspaperCard, PosterCard, Sticker, Squiggle, ColourBand, Player, SayHiDialog, Footer. |
| `src/layouts/Base.astro` | Page shell, fonts, the Say hi dialog and mobile menu behaviour. |
| `src/pages/` | Home, Work, Art and Radio Luft. |
| `src/data/site.ts` | Email, LinkedIn, Instagram, year and the Say hi line. |
| `src/data/eos.ts` | The Eos playlist. Add a `url` to a track to make its row open it. |
| `src/assets/radio-luft/` | Radio Luft images (optimised to WebP at build time). |

## Still to fill in

Placeholders in square brackets stay visible until the real content arrives:

- Email, LinkedIn URL and the copyright year in `src/data/site.ts`
- B&W street photo, ink characters and Suki's photo
- Home hero line and About story
- Comusity text and images, the three app ideas, and the Retreats copy
- Real projects for Work. Paper Dogs and Trackmate are samples with invented copy.
- The site's domain

## Theme

Light and dark follow the visitor's system setting. Setting `localStorage['luft-theme']` to `light` or `dark` forces one.
