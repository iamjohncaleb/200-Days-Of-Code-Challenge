/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#00ffcc",
          dark: "#0f0f1b",
          futuristic: "#1b1b2f"
        },
        fontFamily: {
          futuristic: ["Orbitron", "sans-serif"]
        }
      },
    },
    plugins: [],
  };
  