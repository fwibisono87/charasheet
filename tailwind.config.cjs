/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#26457A',
        'secondary': '#CCCCFF'
      },
      screens: {
        'xs': '280px',
      }
    },
  },
  plugins: [],
}
