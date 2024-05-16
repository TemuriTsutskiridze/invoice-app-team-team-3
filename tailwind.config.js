/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#7C5DFA",
        gray: "#7E88C3",
      },
    },
  },
  plugins: [],
};
