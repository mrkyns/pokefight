/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pokefont: ["Pokefont", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('images/body_bg.png')",
      },
    },
  },
  plugins: [],
};
