/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        navy: 'var(--navy)',
        blue: 'var(--blue)',
        paper: 'var(--paper)',
        parchment: 'var(--parchment)',
        red: 'var(--red)',
        'red-dark': 'var(--red-dark)',
        muted: 'var(--muted)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['"Libre Caslon Display"', 'Georgia', 'serif'],
        serif: ['"Libre Caslon Text"', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
