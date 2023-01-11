const { EDGE_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./content/**/*.{js,tx,jsx}", "./styles/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
    
      colors: { 
        'burnt-yellow': '#F1CB59',
        'sunset-yellow': '#fefcee',
        'darkened-yellow': '#C5A050',
        'dark-green' : '#499542',
        'light-green' : '#90E38A'
      },

    },
  },
  plugins: [
  ],
}
