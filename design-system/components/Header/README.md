# Header

The site header: the LUFT wordmark on the left, page links and the Say hi button on the right.

- Wordmark: `wordmark` style (Gochi Hand 44px, 2px tracking), links to Home.
- Links: Work, Art, Radio Luft, in Poppins 500 15px, `ink`. The current page gets `aria-current="page"` and a 4px `yellow` underline, offset 6px.
- **Say hi** is an accent Button that opens the SayHiDialog.
- Layout: a flex row that wraps; inner wrapper at `content-max` with `gutter` padding.
- Under 600px: wordmark at 34px, Say hi button and a 44px ☰ icon button. The menu opens full screen on `yellow` with Fraunces display links 46px, separated by 2px ink rules, and a primary Say hi button at the bottom.
- The header may be sticky on mobile, with a 1px `rule-soft` bottom border.
