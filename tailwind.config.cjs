/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-background": "#2A2141",
        "font-primary": "#E1E1E6",
        "font-secondary": "#D9D9D9",
        "timer-primary": "#C4C4CC",
      },
      fontFamily: {
        roboto: ["Roboto, sans-serif"],
      },

      width: {
        "first-card-width": "16.5rem",
        "second-card-width": "357.71px",
      },
      height: {
        "first-card-height": "31.1rem",
        "second-card-height": "266.68px",
        "third-card-height": " 199.26px",
      },
    },
  },
  plugins: [],
};
