import { useState, useEffect, createContext } from "react";

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

  // Fetch by filter
  useEffect(() => {
    console.log("Query changed!: ", queryObj);
  }, [queryObj]);

  // // console.log(allPokemons);
  // // console.log(creators);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
