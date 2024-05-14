/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#23180d",
        },
        "custom-color-1": {
          DEFAULT: "#2d2013",
        },
      },
    },
  },
  plugins: [],
};
