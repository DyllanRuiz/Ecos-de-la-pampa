/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
     colors: {
        primary: {
          50: '#A4FFA8',
          100: '#03E12E',
          200: '#02B423',
          300: '#018A18', // base
          400: '#00620E',
          500: '#003D05',
          600: '#001B01',
        },
        // opcional: podrías agregar más variantes si quieres usar las otras filas
        secondary: {
          50: '#C6FFC8',
          100: '#06EF35',
          200: '#03C229',
          300: '#02971E',
          400: '#016E13',
          500: '#004809',
          600: '#002503',
        },
        terciary: {
          50: '#0CFF34',
          100: '#02D227',
          200: '#01A61D',
          300: '#017C13',
          400: '#00550A',
          500: '#003103',
          600: '#001501',
        },
        graytone: {
          50: '#E7EBE7',
          100: '#BCC4BC',
          200: '#979D97',
          300: '#737873',
          400: '#515551',
          500: '#313431',
          600: '#151615',
        },
      },
    },
  },
  plugins: [],
};