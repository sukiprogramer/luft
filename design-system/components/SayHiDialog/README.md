# SayHiDialog

The contact dialog opened by every **Say hi** and **Get in touch** button: Suki's photo, a short line, and LinkedIn, Instagram and email.

- Backdrop: `scrim`. Dialog: `paper`, 2px `line` border, `shadow-offset` (hard yellow), max width 520px, centred.
- Photo: an 88–112px circle on a yellow starburst. Title "Say hi." in display Fraunces with "hi." in `violet`.
- Three contact rows, each a full-width link with `radius-md` and a 2px border: LinkedIn on `paper`, Instagram on `violet`, Email on `yellow`. Each shows its label, the handle and an arrow.
- Show the email address as visible text, not only as a `mailto:` link.
- Phones: a bottom sheet with `radius-sheet` top corners and a 2px top border.
- Behaviour: `role="dialog"`, `aria-modal="true"`, labelled by its title. Focus moves to the close button on open and is trapped inside. Esc and the 44px close button close it, and focus returns to the button that opened it.
- The consumer provides the photo, LinkedIn URL, Instagram handle and email.
