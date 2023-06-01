import { createContext, useState, useContext } from "react";
import { DataContext } from "./DataContext";

export const FightContext = createContext();

export default function FightContextProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [selectablePokes, setSelectablePokes] = useState([]);
  const [randomWildPokemon, setRandomWildPokemon] = useState({});
  const [playerName, setPlayerName] = useState("");
  const [playerNameSelected, setPlayerNameSelected] = useState(false);

  const [topPlayers, setTopPlayers] = useState([]);
  const { allPokemons, setAllPokemons } = useContext(DataContext);

  // loading variables for seting loader
  const [leaderLoading, setLeaderLoading] = useState(true);

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

  const removeFromSelection = (pokemon) => {
    const isNotInAllPokemons =
      allPokemons.filter((poke) => poke.id === pokemon.id).length !== 1;
    if (isNotInAllPokemons) setAllPokemons((prev) => [...prev, pokemon]);

    setSelectablePokes((prev) => prev.filter((poke) => poke.id !== pokemon.id));
  };

  const handlePlayerNameInput = (e) => {
    setPlayerName(e.target.value);
  };
  const handlePlayerNameSubmit = (e) => {
    e.preventDefault();
    setPlayerName(e.target.children[0].value);
    setPlayerNameSelected(true);
  };

  const fetchTopPlayers = async () => {
    try {
      const res = await fetch("https://pokefight-api.onrender.com/players/");
      const data = await res.json();
      if (!data.data.length) return;
      setTopPlayers(data.data);
      setLeaderLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const multiplier = {
    Bug: {
      half: ["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"],
      double: ["Grass", "Psychic", "Dark"],
      zero: [],
    },
    Dark: {
      half: ["Fighting", "Dark", "Fairy"],
      double: ["Ghost", "Psychic"],
      zero: [],
    },
    Dragon: {
      half: ["Steel"],
      double: ["Dragon"],
      zero: ["Fairy"],
    },
    Electric: {
      half: ["Grass", "Electric", "Dragon"],
      double: ["Flying", "Water"],
      zero: ["Ground"],
    },
    Fairy: {
      half: ["Poison", "Steel", "Fire"],
      double: ["Fighting", "Dragon", "Dark"],
      zero: [],
    },
    Fighting: {
      half: ["Flying", "Poison", "Bug", "Psychic", "Fairy"],
      double: ["Normal", "Rock", "Steel", "Ice", "Dark"],
      zero: ["Ghost"],
    },
    Fire: {
      half: ["Rock", "Fire", "Water", "Dragon"],
      double: ["Bug", "Steel", "Grass", "Ice"],
      zero: [],
    },
    Flying: {
      half: ["Rock", "Steel", "Electric"],
      double: ["Fighting", "Bug", "Grass"],
      zero: [],
    },
    Ghost: {
      half: ["Dark"],
      double: ["Ghost", "Psychic"],
      zero: ["Normal"],
    },
    Grass: {
      half: ["Flying", "Poison", "Bug", "Steel", "Fire", "Grass", "Dragon"],
      double: ["Ground", "Rock", "Water"],
      zero: [],
    },
    Ground: {
      half: ["Bug", "Grass"],
      double: ["Poison", "Rock", "Steel", "Fire", "Electric"],
      zero: ["Flying"],
    },
    Ice: {
      half: ["Steel", "Fire", "Water", "Ice"],
      double: ["Flying", "Ground", "Grass", "Dragon"],
      zero: [],
    },
    Normal: {
      half: ["Rock", "Steel"],
      double: [],
      zero: ["Ghost"],
    },
    Poison: {
      half: ["Poison", "Ground", "Rock", "Ghost"],
      double: ["Grass", "Fairy"],
      zero: ["Steel"],
    },
    Psychic: {
      half: ["Steel", "Psychic"],
      double: ["Fighting", "Poison"],
      zero: ["Dark"],
    },
    Rock: {
      half: ["Fighting", "Ground", "Steel"],
      double: ["Flying", "Bug", "Fire", "Ice"],
      zero: [],
    },
    Steel: {
      half: ["Steel", "Fire", "Water", "Electric"],
      double: ["Rock", "Ice", "Fairy"],
      zero: [],
    },
    Water: {
      half: ["Water", "Grass", "Dragon"],
      double: ["Ground", "Rock", "Fire"],
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
        removeFromSelection,
        playerName,
        setPlayerName,
        playerNameSelected,
        setPlayerNameSelected,
        handlePlayerNameInput,
        handlePlayerNameSubmit,
        fetchTopPlayers,
        topPlayers,
        leaderLoading,
      }}
    >
      {children}
    </FightContext.Provider>
  );
}
