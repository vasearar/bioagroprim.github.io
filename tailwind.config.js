/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        'galben': '#EDD06A',
        'verde': '#42906A',
        'alb':'#f1f1f1',
        'negru':'#1E1E1E',
      },
    },
  },
  plugins: [],
}

