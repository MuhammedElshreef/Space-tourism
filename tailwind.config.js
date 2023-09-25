/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      }
    },
    extend: {
      fontFamily: {
        ballefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'serif-serif'],
        'barlow-condensed': ['Barlow Condensed', 'serif-serif']
      },
      colors: {
        bgColor: '#0B0D17',
        primary: '#D0D6f9',
        secondary: '#FFFFFF'
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite'
      }
    }
  },
  plugins: [require('daisyui')]
}
