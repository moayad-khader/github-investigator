/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/common/**/*.{js,ts,jsx,tsx}"
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      ...colors,
    }
  },
  plugins: []
};
