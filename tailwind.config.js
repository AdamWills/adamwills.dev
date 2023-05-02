/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      "brand-black": "#0d0d0a",
      "brand-red": "#d40d0a",
      white: "#ffffff",
    },
    fontFamily: {
      display: ['"futura-pt"'],
    },
    extend: {
      boxShadow: {
        "boxy-red": "8px 8px 0px #d40d0a",
        "boxy-black": "8px 8px 0px #0d0d0a",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand-black"),
            h1: {
              fontFamily: theme("fontFamily.display"),
            },
            h2: {
              fontFamily: theme("fontFamily.display"),
              fontSize: "4rem",
              textTransform: "uppercase",
            },
            h3: {
              fontFamily: theme("fontFamily.display"),
              fontSize: "2rem",
              textTransform: "uppercase",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
