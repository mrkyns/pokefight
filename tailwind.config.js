/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pokefont: ["Pokefont", "sans-serif"],
        code: ["Code", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('images/body_bg.png')",
        menu: "url('images/menu_bg.svg')",
        menu_dark: "url('images/menu_bg_w.svg')",
        menu_sm: "url('images/menu_bg_sm.svg')",
      },
      colors: {
        bug: "#729f3f",
        dark: "#161616",
        dragon: "#bb9f1e",
        electric: "#ead02a",
        fairy: "#fdb9e9",
        fighting: "#c42312",
        fire: "#fd7d24",
        flying: "#a3deeb",
        ghost: "#7b62a3",
        grass: "#50cc8a",
        ground: "#807c60",
        ice: "#51c4e7",
        normal: "#f3f3f3",
        poison: "#b97fc9",
        psyhic: "#f366b9",
        rock: "#493d07",
        steel: "#9aaaab",
        water: "#4592c1",
        pokedex: "#194485",
        pokefigt: "#e51b1b",
        pokecreator: "#67a814",
        pokeleader: "#c8981b ",
        elementbBg: "#2b2b2b",
        elementbBg_w: "#b7b7b7",
        pokemonBg: "#373737",
        bgColor: "#cbcbcb",
      },
      boxShadow: {
        shadow: "5px 5px 8px rgba(0, 0, 0, 0.5)",
        shadow_w: "5px 5px 8px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        landingPage: {
          "0%, 65%": { opacity: "0" },
          "35%, 100%": { opacity: "1" },
        },
        welcomme: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        grow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        landingPage: "landingPage 1.5s 2s 2 ease-in-out forwards",
        welcomme: "welcomme 1s 1s ease-in-out forwards",
        appear: "appear 300ms ease-out both",
        grow: "grow 400ms ease-out both",
      },
    },
  },
  plugins: [],
};
