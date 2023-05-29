import { createContext, useState } from "react";

export const FightContext = createContext();

export default function FightContextProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [selectablePokes, setSelectablePokes] = useState([]);
  const [randomWildPokemon, setRandomWildPokemon] = useState({});

  const fetchWildPokemon = async () => {
    const randomNum = Math.floor(Math.random() * 809);
    const res = await fetch(
      `https://pokefight-api.onrender.com/pokemons/${randomNum}`
    );
    const data = await res.json();
    // console.log("data.data: ", data.data);
    if (!data.data.length) return;
    setRandomWildPokemon(data.data[0]);
  };

  return (
    <FightContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        selectablePokes,
        setSelectablePokes,
        randomWildPokemon,
        setRandomWildPokemon,
        fetchWildPokemon,
      }}
    >
      {children}
    </FightContext.Provider>
  );
}
