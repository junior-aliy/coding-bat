import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "white": "#ffffff",
      'tahiti': '#3ab7bf',
      "black": "#000000"
    },
    extend: {
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        ".container": {
          width: "90%",
          maxWidth: "1567px",
          margin: "0 auto"
        },
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ],
}