/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
      },
      fontFamily: {
        graphit: ["Graphit", "sans-serif"],
      },
    },
  },
  plugins: [],
};