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

  // loading variables for seting loader
  const [allPokemonsLoading, setAllPokemonsLoading] = useState(true);
  const [creatorsLoading, setCreatorsLoading] = useState(true);
  const [pokemonLoading, setPokemonLoading] = useState(false);

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
          : [];
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

  useEffect(() => {
    const fetchCreators = async () => {
      const res = await fetch("https://pokefight-api.onrender.com/creators/");
      const data = await res.json();

      setCreators(data.data);
      setCreatorsLoading(false);
    };
    fetchCreators();
  }, []);

  // Fetch by filter
  useEffect(() => {
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
        setAllPokemons(data.data);
        setPokeAmount(data.amount);
        setAllPokemonsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchByFilters(queryObj);
  }, [queryObj]);

  //function to create serial number for pokemon pokemonSerial(pokemon.id)
  const pokemonSerial = (id) => {
    if (String(id)?.length === 3) {
      return `#0${id}`;
    } else if (String(id)?.length === 2) {
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
      if (!data.data.length) return;
      setAllPokemons((prev) => [...prev, data.data[0]]);
      setPokeAmount((prev) => prev++);
      setPokemonLoading(false);
      navigate(`/pokedex/${data.data[0].id}`);
    };
    fetchOne(singleSearch);
  }, [singleSearch]);

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
        allPokemonsLoading,
        creatorsLoading,
        pokemonLoading,
        setPokemonLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
