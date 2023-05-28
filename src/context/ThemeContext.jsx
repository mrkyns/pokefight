import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
