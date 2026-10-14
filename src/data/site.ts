// Contact details and links. Bracketed values are placeholders until Suki sends the real ones.
export const site = {
  name: 'Suki',
  title: 'Luft',
  description: 'Work, art and a little radio: the portfolio of Suki, designer, illustrator and the person behind Radio Luft.',
  year: '[Year]',
  email: '[your@email]',
  emailHref: 'mailto:hello@example.com',
  linkedin: { label: '[your LinkedIn]', href: 'https://www.linkedin.com/' },
  instagram: { label: '@radio.luft', href: 'https://www.instagram.com/radio.luft/' },
  sayHiLine: "I'm Suki. [One line on what you're open to: commissions, collaborations, a coffee in Belgrade.]",
};

export const pages = [
  { href: '/', label: 'Home' },
  { href: '/work/', label: 'Work' },
  { href: '/art/', label: 'Art' },
  { href: '/radio-luft/', label: 'Radio Luft' },
] as const;
