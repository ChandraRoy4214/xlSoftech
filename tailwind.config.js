/** @type {import('tailwindcss').Config} */
const colors = require('./utils/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors,
      fontSize: {
        xxs: '0.75rem',
      },
      backgroundColor: {
        PG800: '#1F1F1F',
      },
      fontFamily: {
        barlowCondensed: ['var(--font-barlow-condensed)'],
        barlow: ['var(--font-barlow)'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: `slide 60s linear infinite`,
        shake: `shake 400ms`,
      },
    },
  },
  plugins: [],
};
