/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'primary': 'rgb(17 24 39)',
      //   'secondary': 'rgb(31 41 55)',
      //   'teritary': 'rgb(55 65 81)',
      //   'white': 'rgb(209 213 219)',
      //   'tahiti': {
      //     100: '#cffafe',
      //     200: '#a5f3fc',
      //     300: '#67e8f9',
      //     400: '#22d3ee',
      //     500: '#06b6d4',
      //     600: '#0891b2',
      //     700: '#0e7490',
      //     800: '#155e75',
      //     900: '#164e63',
      //   },
      //   // ...
      // },
    },
  },
  plugins: [],
}