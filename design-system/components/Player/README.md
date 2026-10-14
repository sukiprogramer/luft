# Player

The Radio Luft playlist: a now-playing bar with controls, then the tracks as tappable rows.

- Container: `violet` ground, padding `space-6`, playlist title in `display-m` `white`.
- Now-playing bar: `night` ground; previous and next are 44px outline icon buttons in `on-night`; play/pause is a 52–56px `yellow` disc. The status line reads "NOW PLAYING · 02 / 10" (Poppins 600 11px, `yellow`), then the song (Bitter 700) and artist (Bitter 400) in `on-night`.
- Rows: `track` style in `on-violet`, 1px rules between rows. Each row is a `<button>`; the current one gets a `yellow` ground, `aria-current="true"` and a ♪ instead of its number.
- Curator byline at the bottom in `byline` style.
- The prototype has no audio. In production each row should link to or embed the track (Spotify, SoundCloud or YouTube); the consumer provides the URLs.
- The status line is an `aria-live="polite"` region.
