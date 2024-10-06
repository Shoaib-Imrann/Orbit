/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
      },
      screens: {
        sm: "640px",
        md: "895px",
        lg: "1129px",
        xl: "1350px",
      },
    },
  },
  plugins: [],
};
