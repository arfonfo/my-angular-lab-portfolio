/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1a1a',
          card: '#2a2a2a',
          border: '#3a3a3a',
          text: '#e0e0e0',
          muted: '#9a9a9a',
        },
        accent: {
          primary: '#64748b',
          hover: '#475569',
        }
      }
    },
  },
  plugins: [],
}
