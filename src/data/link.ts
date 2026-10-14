// Prefix site-relative paths with the deploy base (e.g. /luft on GitHub Pages).
// Paths in the source stay root-relative ('/work/'), so pages read the same anywhere.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const link = (path: string) => (path.startsWith('/') && !path.startsWith('//') ? base + path : path);
