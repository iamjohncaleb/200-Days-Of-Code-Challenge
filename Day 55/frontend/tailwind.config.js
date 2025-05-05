/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          green: {
            100: "#D4F0C5",
            500: "#4CAF50",
            600: "#388E3C",
          },
          white: "#ffffff",
          gray: {
            100: "#F1F1F1",
            800: "#3A3A3A",
          },
        },
      },
    },
    plugins: [],
  };
  