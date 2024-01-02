/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38A188',
          50: '#B4DBD4',
          25: '#EFFAF8',
        },
      },
    },
  },
  plugins: [],
};
