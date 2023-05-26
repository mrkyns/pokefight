import { useState, useEffect, createContext, useContext } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [allPokemons, setAllPokemons] = useState({});
  const [creators, setCreators] = useState({});

  useEffect(() => {
    const fetchEmAll = async () => {
      const res = await fetch("https://pokefight-api.onrender.com/pokemons/");
      const data = await res.json();

      setAllPokemons(data.data);
    };
    fetchEmAll();
  }, []);

  useEffect(() => {
    const fetchCreators = async () => {
      const res = await fetch("https://pokefight-api.onrender.com/creators/");
      const data = await res.json();

      setCreators(data.data);
    };
    fetchCreators();
  }, []);

  console.log(allPokemons);
  console.log(creators);

  return (
    <DataContext.Provider value={allPokemons}>{children}</DataContext.Provider>
  );
}
