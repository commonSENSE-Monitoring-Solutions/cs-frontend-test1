/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Roboto'],
        'secondary': ['Montserrat']
      },
      keyframes: {
        'left-to-right': {
          from: { 'margin-left': '-150vw', 'opacity': '0' },
          to: { 'margin-left': '0', 'opacity': '1' },
        },
        'fade-scale-in': {
          from: { 'opacity': '0', scale: '0.2'},
          to: { 'opacity': '1', scale: 1}
        }
      },
      animation: {
        'left-to-right': 'left-to-right 2s ease',
        'fade-scale-in': 'fade-scale-in 2s ease-in-out'
      },
    },
  },
  plugins: [],
}