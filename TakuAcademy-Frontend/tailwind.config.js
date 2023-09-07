/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cusOrange: "#EFA400",
        cusBlue: "#E9F6FF",
        cusDarkBlue: "#2A2A72",
        cusBlack: "#232528",
        cusWhite: "#E9F6FF",
      },
    },
  },
  plugins: [],
};
