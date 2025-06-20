/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 -10px 6px 0 rgba(0, 0, 0, 0.1), 0 10px 6px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
