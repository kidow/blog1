const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          main: '#fd7e14'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
