/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: [
    './templates/**/*.html'
    ],
  theme: {
    colors :{
      'deep-koamaru': {
        '50': '#f2f5ff',
        '100': '#e8eeff',
        '200': '#d4dfff',
        '300': '#b1c2ff',
        '400': '#8499ff',
        '500': '#5369ff',
        '600': '#2f3bf8',
        '700': '#1d24e4',
        '800': '#181fbf',
        '900': '#161c9c',
        '950': '#0c1475',
    },
    
    },
    },
    extend: {
      fontFamily:{
        sans:['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',       
      },
    },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    typography,
  ],
}
