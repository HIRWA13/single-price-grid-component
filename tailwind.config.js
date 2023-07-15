/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        sm: "520px",
      },
      colors:{
        "cyan-one": "#2ab2af",
        "cyan-two": "#6ad0ce",
        "bright-yellow": "#c0df34",
        "light-gray": "#e5eff5",
        "grayish-blue": "#98a6bd",
      }
    },
  },
  plugins: [],
}

