/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/*/.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: {
          DEFAULT: '#001899',
        },
        primaryYellow: {
          DEFAULT: '#FDD400',
        },
        primaryBlack: {
          DEFAULT: '#050505',
        },
        primaryWhite: {
          DEFAULT: '#F4F4F4',
        },
        primaryGrey: {
          DEFAULT: '#A7A7A7',
        },
        SecondaryGrey: {
          DEFAULT: '#575959',
        },
      },
    },
  },
  plugins: [],
};
