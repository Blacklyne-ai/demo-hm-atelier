/** @type {import('tailwindcss').Config} */
// HM Atelier — LIGHT, delicate, premium. Warm porcelain/bone base, near-black
// crest ink, champagne/brass accent used barely-there. Fraunces (light display)
// + Manrope (fine UI). RGB triples → alpha modifier. :root is the single source.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bone: 'rgb(var(--rgb-bone) / <alpha-value>)',
        surface: 'rgb(var(--rgb-surface) / <alpha-value>)',
        paper: 'rgb(var(--rgb-paper) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          soft: 'rgb(var(--rgb-ink-soft) / <alpha-value>)',
        },
        graphite: 'rgb(var(--rgb-graphite) / <alpha-value>)',
        stone: 'rgb(var(--rgb-stone) / <alpha-value>)',
        mist: 'rgb(var(--rgb-mist) / <alpha-value>)',
        line: 'rgb(var(--rgb-line) / <alpha-value>)',
        brass: {
          DEFAULT: 'rgb(var(--rgb-brass) / <alpha-value>)',
          deep: 'rgb(var(--rgb-brass-deep) / <alpha-value>)',
          lite: 'rgb(var(--rgb-brass-lite) / <alpha-value>)',
        },
        noir: 'rgb(var(--rgb-noir) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      maxWidth: { shell: '82rem' },
    },
  },
  plugins: [],
};
