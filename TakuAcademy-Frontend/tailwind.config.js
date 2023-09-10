/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cusOrange: "#EFA400",
        cusBlue: "#009FFD",
        cusDarkBlue: "#2A2A72",
        cusBlack: "#232528",
        cusWhite: "#E9F6FF",
      },
      fontSize: {
        25: "25px",
      },
    },
  },
  plugins: [],
};
