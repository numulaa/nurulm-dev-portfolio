/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        veryDarkPurple: "#74486",
        darkPurple: "#9576cd",
        brightPurple: "#9a83c4",
        brightPurpleLight: "#b99fe8",
        brightPurpleSupLight: "#d9c6fa",
        darkGrayishPurple: "#e7e6ea",
        darkBlue: "hsl(228, 39%, 23%)",
        veryGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
