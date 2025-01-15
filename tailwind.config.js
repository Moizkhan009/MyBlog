/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['peer-checked'], // Ensure peer-checked utility is enabled
    },
  },
  plugins: [],
}

