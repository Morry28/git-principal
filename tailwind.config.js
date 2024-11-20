/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.js'],
  theme: {
    extend: {
      colors:{
        PM:'#e4f0fe',
        SC: '#12243e',
        TR:'#76919e',
        AC:'#e5b62f'
      }
    },
  },
  plugins: [],
}

