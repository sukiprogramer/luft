# Button

Pill buttons in three variants: primary (ink), accent (yellow) and outline.

- **Primary** (`ink` ground, `paper` text): the main action of a section, such as "See the work".
- **Accent** (`yellow` ground, `on-yellow` text, 2px border): "Say hi" in the header, and buttons on violet or blue bands.
- **Outline** (transparent, 2px `line` border): the secondary action next to a primary one.
- Shape: `radius-pill`, at least `touch-min` (44px) tall, 24px side padding, `button` type style (Poppins 600 15px).
- Focus: 3px `blue` outline, 3px offset.
- On `night` (footer), the accent button drops its border colour to `yellow`.
- Use a real `<button>` for actions (open Say hi, play) and `<a href>` for navigation.
- Don't put two accent buttons next to each other, and don't use icons inside buttons except in the Player.
