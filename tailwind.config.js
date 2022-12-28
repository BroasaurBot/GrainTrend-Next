const { EDGE_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
     mono2: ["Consolas", "Menlo", "Courier", "monospace"]
    },
    extend: {
    colors: {
      'burnt-yellow': '#F1CB59',
      'sunset-yellow': '#fefcee',
      'darkened-yellow': '#C5A050',
      'dark-green' : '#499542',
    },

    },
  },
  plugins: [
  ],
}
