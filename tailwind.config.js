/** @type {import('tailwindcss').Config} */

const { width } = require('@fortawesome/free-solid-svg-icons/fa0');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowX: 'auto',
              scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.slate.200')}`,
              scrollbarWidth: 'thin',
          },
          '.scrollbar::-webkit-scrollbar': {
              width: '5px',
              height: '10px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              background: "#0a66c2",
              borderRadius: '10px',
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.blue.200'),
          },
          '.scrollbar::-webkit-scrollbar-button:decrement': {
              width: '0px', 
              display: "none",
          }
      });
  }),
  ],
}

