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
    'gin': {
        '50': '#f4f9f7',
        '100': '#e9f4ee',
        '200': '#cde5d8',
        '300': '#a6cfba',
        '400': '#77b192',
        '500': '#539472',
        '600': '#41785b',
        '700': '#35604a',
        '800': '#2e4d3d',
        '900': '#274034',
        '950': '#11221a',
    },
    'base': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#1c1c1c',
    },
    
    
    },
    },
    extend: {
      fontFamily:{
        'body':['Inter'],
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
