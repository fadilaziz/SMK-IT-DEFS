/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pettern': "url('src/img/dashboard.JPG')"
      }
    },
  },
  plugins: [],
}