/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": 'hsl(212, 45%, 89%)',
        "theme-blue": 'hsl(218, 44%, 22%)',
        "theme-grey": 'hsl(220, 15%, 55%)',
      }
    },
  },
  plugins: [],
}
