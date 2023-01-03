const { EDGE_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono2: ["Consolas", "Menlo", "Courier", "monospace"]
      },
    
      colors: { 'burnt-yellow': '#F1CB59',
        'sunset-yellow': '#fefcee',
        'sunset-yellow-1': '#EFE3AD',
        'darkened-yellow': '#C5A050',
        'dark-green' : '#499542',
        'light-green' : '#1FBB15'
      },

    },
  },
  plugins: [
  ],
}
