# NewspaperCard

A project card styled like a newspaper column: a kicker between two hairline rules, an image, a serif title and one line of text.

- Ground `paper-deep`, padding `space-5`, `radius-0`, no border, no shadow.
- Kicker: Poppins 600 12px, 2px tracking, uppercase, centred between `border-hairline` rules in `line`. Format: `CLIENT · YEAR`, or `SAMPLE · DISCIPLINE · YEAR` for samples.
- Image: 4:3, `photo` ground while it's a placeholder.
- Title: `title` style (Fraunces 500 30px). Text: 14px `ink-soft`.
- The whole card is one link to the case study.
- In grids use `repeat(auto-fit, minmax(300px, 1fr))` with `space-6` gaps.
- The consumer provides the kicker, image, title, blurb and link.
