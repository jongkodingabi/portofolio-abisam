/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#42b883",
        secondary: "#64748b",
        dark: "#020617",
        youngGreen: "#34d399",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
