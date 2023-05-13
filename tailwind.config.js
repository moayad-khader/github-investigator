/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./common/**/*.{js,ts,jsx,tsx}"
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: '#1C1C21'
    }),
  },
  plugins: []
};
