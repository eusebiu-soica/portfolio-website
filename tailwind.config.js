const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-murecho)"],
      },
      colors: {
        primary: {
          100: "#DDE4FB",
          200: "#BCC9F8",
          300: "#95A6EA",
          400: "#7587D6",
          500: "#4A5DBC",
          600: "#3646A1",
          700: "#253287",
          800: "#17216D",
          900: "#0E155A",
          DEFAULT: "#00ACF1",
          foreground: "#061622",
        },
        secondary: {
          DEFAULT: "#081B29",
          foreground: "#061622",
        },
        background: "#081B29",
      },
    },
  },
  darkMode: "class",
  lightMode: "class",
  plugins: [nextui()],
};
