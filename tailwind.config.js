module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#0B0D17",
        lightblue: "#D0D6F9",
        lightGray: "#979797",
        darkGray: "#383B4B"
      },
      fontFamily: {
        bellefair: "'Bellefair', sans-serif",
        barlow: "'Barlow Condensed', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
