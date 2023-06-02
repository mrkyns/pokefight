import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  //variable for adding dynamic CSS classes
  const pokeTypes = {
    Bug: {
      color: "bg-bug",
      text: "text-bug",
      border: "border-bug",
      hover_bg: "hover:bg-bug",
      hover_b: "hover:border-bug",
      dark_hover_bg: "dark:hover:bg-bug",
      dark_hover_b: "dark:hover:border-bug",
    },
    Dark: {
      color: "bg-dark",
      text: "text-dark",
      border: "border-dark",
      hover_bg: "hover:bg-dark",
      hover_b: "hover:border-dark",
      dark_hover_bg: "dark:hover:bg-dark",
      dark_hover_b: "dark:hover:border-dark",
    },
    Dragon: {
      color: "bg-dragon",
      text: "text-dragon",
      border: "border-dragon",
      hover_bg: "hover:bg-dragon",
      hover_b: "hover:border-dragon",
      dark_hover_bg: "dark:hover:bg-dragon",
      dark_hover_b: "dark:hover:border-dragon",
    },
    Electric: {
      color: "bg-electric",
      text: "text-electric",
      border: "border-electric",
      hover_bg: "hover:bg-electric",
      hover_b: "hover:border-electric",
      dark_hover_bg: "dark:hover:bg-electric",
      dark_hover_b: "dark:hover:border-electric",
    },
    Fairy: {
      color: "bg-fairy",
      text: "text-fairy",
      border: "border-fairy",
      hover_bg: "hover:bg-fairy",
      hover_b: "hover:border-fairy",
      dark_hover_bg: "dark:hover:bg-fairy",
      dark_hover_b: "dark:hover:border-fairy",
    },
    Fighting: {
      color: "bg-fighting",
      text: "text-fighting",
      border: "border-fighting",
      hover_bg: "hover:bg-fighting",
      hover_b: "hover:border-fighting",
      dark_hover_bg: "dark:hover:bg-fighting",
      dark_hover_b: "dark:hover:border-fighting",
    },
    Fire: {
      color: "bg-fire",
      text: "text-fire",
      border: "border-fire",
      hover_bg: "hover:bg-fire",
      hover_b: "hover:border-fire",
      dark_hover_bg: "dark:hover:bg-fire",
      dark_hover_b: "dark:hover:border-fire",
    },
    Flying: {
      color: "bg-flying",
      text: "text-flying",
      border: "border-flying",
      hover_bg: "hover:bg-flying",
      hover_b: "hover:border-flying",
      dark_hover_bg: "dark:hover:bg-flying",
      dark_hover_b: "dark:hover:border-flying",
    },
    Ghost: {
      color: "bg-ghost",
      text: "text-ghost",
      border: "border-ghost",
      hover_bg: "hover:bg-ghost",
      hover_b: "hover:border-ghost",
      dark_hover_bg: "dark:hover:bg-ghost",
      dark_hover_b: "dark:hover:border-ghost",
    },
    Grass: {
      color: "bg-grass",
      text: "text-grass",
      border: "border-grass",
      hover_bg: "hover:bg-grass",
      hover_b: "hover:border-grass",
      dark_hover_bg: "dark:hover:bg-grass",
      dark_hover_b: "dark:hover:border-grass",
    },
    Ground: {
      color: "bg-ground",
      text: "text-ground",
      border: "border-ground",
      hover_bg: "hover:bg-ground",
      hover_b: "hover:border-ground",
      dark_hover_bg: "dark:hover:bg-ground",
      dark_hover_b: "dark:hover:border-ground",
    },
    Ice: {
      color: "bg-ice",
      text: "text-ice",
      border: "border-ice",
      hover_bg: "hover:bg-ice",
      hover_b: "hover:border-ice",
      dark_hover_bg: "dark:hover:bg-ice",
      dark_hover_b: "dark:hover:border-ice",
    },
    Normal: {
      color: "bg-normal",
      text: "text-normal",
      border: "border-normal",
      hover_bg: "hover:bg-normal",
      hover_b: "hover:border-normal",
      dark_hover_bg: "dark:hover:bg-normal",
      dark_hover_b: "dark:hover:border-normal",
    },
    Poison: {
      color: "bg-poison",
      text: "text-poison",
      border: "border-poison",
      hover_bg: "hover:bg-poison",
      hover_b: "hover:border-poison",
      dark_hover_bg: "dark:hover:bg-poison",
      dark_hover_b: "dark:hover:border-poison",
    },
    Psychic: {
      color: "bg-psyhic",
      text: "text-psyhic",
      border: "border-psyhic",
      hover_bg: "hover:bg-psyhic",
      hover_b: "hover:border-psyhic",
      dark_hover_bg: "dark:hover:bg-psyhic",
      dark_hover_b: "dark:hover:border-psyhic",
    },
    Rock: {
      color: "bg-rock",
      text: "text-rock",
      border: "border-rock",
      hover_bg: "hover:bg-rock",
      hover_b: "hover:border-rock",
      dark_hover_bg: "dark:hover:bg-rock",
      dark_hover_b: "dark:hover:border-rock",
    },
    Steel: {
      color: "bg-steel",
      text: "text-steel",
      border: "border-steel",
      hover_bg: "hover:bg-steel",
      hover_b: "hover:border-steel",
      dark_hover_bg: "dark:hover:bg-steel",
      dark_hover_b: "dark:hover:border-steel",
    },
    Water: {
      color: "bg-water",
      text: "text-water",
      border: "border-water",
      hover_bg: "hover:bg-water",
      hover_b: "hover:border-water",
      dark_hover_bg: "dark:hover:bg-water",
      dark_hover_b: "dark:hover:border-water",
    },
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, toggleDarkMode, pokeTypes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
