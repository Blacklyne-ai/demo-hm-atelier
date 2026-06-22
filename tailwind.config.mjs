/** @type {import('tailwindcss').Config} */
// HM Atelier — cinematic DARK system. Logo-pixel-extracted palette:
// near-black brand + warm cream/bone (logo ground) + champagne gold accent
// (derived from real cognac leather + gold marque emblem). RGB triples → alpha modifier.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--rgb-bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--rgb-surface) / <alpha-value>)',
          2: 'rgb(var(--rgb-surface-2) / <alpha-value>)',
        },
        line: 'rgb(var(--rgb-line) / <alpha-value>)',
        black: 'rgb(var(--rgb-black) / <alpha-value>)',
        cream: {
          DEFAULT: 'rgb(var(--rgb-cream) / <alpha-value>)',
          dim: 'rgb(var(--rgb-cream-dim) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--rgb-gold) / <alpha-value>)',
          deep: 'rgb(var(--rgb-gold-deep) / <alpha-value>)',
        },
        cognac: 'rgb(var(--rgb-cognac) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      maxWidth: { shell: '82rem' },
      letterSpacing: { label: '0.22em' },
    },
  },
  plugins: [],
};
