/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: [
    './templates/**/*.html'
    ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',       
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    typography,
  ],
}




