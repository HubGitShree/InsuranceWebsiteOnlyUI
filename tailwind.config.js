/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts}"  
  ],
  theme: {
    extend: {colors: {
      'custom-color': '#CCFBF1', // custom teal color
    },},
  },
  plugins: [],
}

