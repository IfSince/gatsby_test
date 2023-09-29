const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Futura PT', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'off-white': '#FAF9F6',
        'custom-gray': '#2F3035',
      },
    },
  },
  plugins: [],
}

