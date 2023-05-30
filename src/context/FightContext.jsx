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

  const addToSelection = (pokemon) => {
    const pokeAlreadySelected =
      selectablePokes.filter((poke) => poke.id === pokemon.id).length > 0;
    if (pokeAlreadySelected) return;
    if (selectablePokes.length < 6)
      setSelectablePokes((prev) => [...prev, pokemon]);
    else setSelectablePokes((prev) => [...prev.slice(1), pokemon]);
  };

  const multiplier = {
    Bug: {
      half: [],
      double: [],
      zero: [],
    },
    Dark: {
      half: [],
      double: [],
      zero: [],
    },
    Dragon: {
      half: [],
      double: [],
      zero: [],
    },
    Electric: {
      half: [],
      double: [],
      zero: [],
    },
    Fairy: {
      half: [],
      double: [],
      zero: [],
    },
    Fighting: {
      half: [],
      double: [],
      zero: [],
    },
    Fire: {
      half: [],
      double: [],
      zero: [],
    },
    Flying: {
      half: [],
      double: [],
      zero: [],
    },
    Ghost: {
      half: [],
      double: [],
      zero: [],
    },
    Grass: {
      half: [],
      double: [],
      zero: [],
    },
    Ground: {
      half: [],
      double: [],
      zero: [],
    },
    Ice: {
      half: [],
      double: [],
      zero: [],
    },
    Normal: {
      half: [],
      double: [],
      zero: [],
    },
    Poison: {
      half: [],
      double: [],
      zero: [],
    },
    Psychic: {
      half: [],
      double: [],
      zero: [],
    },
    Rock: {
      half: [],
      double: [],
      zero: [],
    },
    Steel: {
      half: [],
      double: [],
      zero: [],
    },
    Water: {
      half: [],
      double: [],
      zero: [],
    },
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
        multiplier,
        addToSelection,
      }}
    >
      {children}
    </FightContext.Provider>
  );
}
