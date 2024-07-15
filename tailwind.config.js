/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-1': '0px 0px 0px 2px #F0F0F0',
        'custom-2': '0px 1px 2px 0px #1018280D',
        'custom-3': '0px 4px 9.8px 0px #FFFFFF40 inset',
        'custom-combined': '0px 0px 0px 2px #F0F0F0, 0px 1px 2px 0px #1018280D, inset 0px 4px 9.8px 0px #FFFFFF40',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
