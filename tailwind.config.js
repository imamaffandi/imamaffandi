/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkest: "#16161D",
        dark: "#390000",
        mid: "#771313",
        light: "#ACACAC",
        lightest: "#FFFFFF",
        brand: "#FF0000",
      },
    },
  },
  plugins: [],
};
