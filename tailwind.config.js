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
        menu: "url('images/menu_bg.svg')",
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
        ground: "#806e5f",
        ice: "#51c4e7",
        normal: "#f3f3f3",
        poison: "#b97fc9",
        psyhic: "#f366b9",
        steel: "#9aaaab",
        water: "#4592c1",
        pokedex: "#194485",
        pokefigt: "#e51b1b",
        pokecreator: "#67a814",
        pokeleader: "#c8981b ",
        elementbBg: "#2b2b2b",
        pokemonBg: "#373737",
      },
    },
  },
  plugins: [],
};
