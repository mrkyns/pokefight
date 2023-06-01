import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const navigate = useNavigate();

  // initial query object
  const IQO = {
    type: [],
    minHP: 1,
    maxHP: 255,
    minAttack: 5,
    maxAttack: 181,
    minDefense: 5,
    maxDefense: 230,
    minSpeed: 5,
    maxSpeed: 160,
    page: 0,
  };

  const [allPokemons, setAllPokemons] = useState([]);

  const [creators, setCreators] = useState({});

  const [checkedTypes, setCheckedTypes] = useState(IQO.type);
  const [minHP, setMinHP] = useState(IQO.minHP);
  const [maxHP, setMaxHP] = useState(IQO.maxHP);
  const [minAttack, setMinAttack] = useState(IQO.minAttack);
  const [maxAttack, setMaxAttack] = useState(IQO.maxAttack);
  const [minDefense, setMinDefense] = useState(IQO.minDefense);
  const [maxDefense, setMaxDefense] = useState(IQO.maxDefense);
  const [minSpeed, setMinSpeed] = useState(IQO.minSpeed);
  const [maxSpeed, setMaxSpeed] = useState(IQO.maxSpeed);
  const [page, setPage] = useState(IQO.page);
  const [pokeAmount, setPokeAmount] = useState(0);

  const [singleSearch, setSingleSearch] = useState("");

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
    setQueryObj((prev) => {
      const pokeTypes =
        checkedTypes.length > 0 && checkedTypes !== undefined
          ? checkedTypes.map((ref) => {
              if (ref.current?.value !== undefined) return ref.current?.value;
              else return;
            })
          : [...prev.type];
      const insertTypes = pokeTypes.filter((item) => item !== undefined);
      return {
        type: insertTypes.slice(0, 2),
        minHP,
        maxHP,
        minAttack,
        maxAttack,
        minDefense,
        maxDefense,
        minSpeed,
        maxSpeed,
        page,
      };
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
    page,
  ]);
  console.log(queryObj);

  // useEffect(() => {
  //   const fetchEmAll = async () => {
  //     console.log("fetching all");
  //     const res = await fetch("https://pokefight-api.onrender.com/pokemons/");
  //     const data = await res.json();

  //     setAllPokemons(data.data);
  //   };
  //   // fetchEmAll();
  // }, []);

  useEffect(() => {
    const fetchCreators = async () => {
      const res = await fetch("https://pokefight-api.onrender.com/creators/");
      const data = await res.json();

      setCreators(data.data);
    };
    fetchCreators();
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
        console.log("amount: ", data.amount);
        setAllPokemons(data.data);
        setPokeAmount(data.amount);
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

  // single search

  useEffect(() => {
    if (!Object.keys(allPokemons).length) return;
    const fetchOne = async (singleSearch) => {
      const trimmedQuery = singleSearch.trim();
      const res = await fetch(
        `https://pokefight-api.onrender.com/pokemons/${trimmedQuery}`
      );
      const data = await res.json();
      // console.log("data.data: ", data.data);
      if (!data.data.length) return;
      setAllPokemons((prev) => [...prev, data.data[0]]);
      setPokeAmount((prev) => prev++);
      navigate(`/pokedex/${data.data[0].id}`);
    };
    fetchOne(singleSearch);
  }, [singleSearch]);

  // Fetch random Wild Pokemon

  // console.log(singleSearch);

  return (
    <DataContext.Provider
      value={{
        IQO,
        allPokemons,
        setAllPokemons,
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
        singleSearch,
        setSingleSearch,
        pokeAmount,
        setPokeAmount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
