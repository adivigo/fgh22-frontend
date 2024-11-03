/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      grey: "#EDEDED",
      red: "#DA0037",
      gray: "#444444",
      dark: "#171717",
      secondary: "#A0A3BD",
      blue: "#1D4ED8",
      green: "#008000",
      background: "#A0A3BD33",
      yellow: "#FFFF00",
    },
    extend: {
      backgroundImage: {
        bgimg: "url('/src/assets/images/imagebg.png')",
      },
    },
  },
  plugins: [],
};
