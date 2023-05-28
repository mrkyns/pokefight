import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [allPokemons, setAllPokemons] = useState({});
  const [creators, setCreators] = useState({});

  const [checkedTypes, setCheckedTypes] = useState([]);
  const [minHP, setMinHP] = useState(1);
  const [maxHP, setMaxHP] = useState(255);
  const [minAttack, setMinAttack] = useState(5);
  const [maxAttack, setMaxAttack] = useState(181);
  const [minDefense, setMinDefense] = useState(5);
  const [maxDefense, setMaxDefense] = useState(230);
  const [minSpeed, setMinSpeed] = useState(5);
  const [maxSpeed, setMaxSpeed] = useState(160);
  const [page, setPage] = useState(0);

  const [queryObj, setQueryObj] = useState({
    type: [],
    minHP,
    maxHP,
    minAttack,
    maxAttack,
    minDefense,
    maxDefense,
    minSpeed,
    maxSpeed,
    page,
  });

  useEffect(() => {
    const pokeTypes = checkedTypes.map((ref) => ref.current.value);
    setQueryObj({
      type: pokeTypes,
      minHP,
      maxHP,
      minAttack,
      maxAttack,
      minDefense,
      maxDefense,
      minSpeed,
      maxSpeed,
    });
  }, [
    checkedTypes,
    minHP,
    maxHP,
    minAttack,
    maxAttack,
    minDefense,
    maxDefense,
    minSpeed,
    maxSpeed,
  ]);

  useEffect(() => {
    const fetchEmAll = async () => {
      console.log("fetching all");
      const res = await fetch("https://pokefight-api.onrender.com/pokemons/");
      const data = await res.json();

      setAllPokemons(data.data);
    };
    // fetchEmAll();
  }, []);

  useEffect(() => {
    const fetchCreators = async () => {
      const res = await fetch("https://pokefight-api.onrender.com/creators/");
      const data = await res.json();

      setCreators(data.data);
    };
    // fetchCreators();
  }, []);

  // Fetch by filter
  useEffect(() => {
    console.log("Query changed!: ", queryObj);

    const fetchByFilters = async (queryObj) => {
      try {
        const res = await fetch(
          "https://pokefight-api.onrender.com/pokemons/filtered/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(queryObj),
          }
        );
        const data = await res.json();
        console.log(data);
        setAllPokemons(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchByFilters(queryObj);
  }, [queryObj]);

  console.log(allPokemons);
  // // console.log(creators);

  //function to create serial nummer for pokemon pokemonSerial(pokemon.id)
  const pokemonSerial = (id) => {
    if (id?.length === 3) {
      return `#0${id}`;
    } else if (id?.length === 2) {
      return `#00${id}`;
    } else {
      return `#000${id}`;
    }
  };

  return (
    <DataContext.Provider
      value={{
        allPokemons,
        creators,
        checkedTypes,
        setCheckedTypes,
        minHP,
        setMinHP,
        maxHP,
        setMaxHP,
        minAttack,
        setMinAttack,
        maxAttack,
        setMaxAttack,
        minDefense,
        setMinDefense,
        maxDefense,
        setMaxDefense,
        minSpeed,
        setMinSpeed,
        maxSpeed,
        setMaxSpeed,
        queryObj,
        setQueryObj,
        page,
        setPage,
        pokemonSerial,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
