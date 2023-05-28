import { useContext, useEffect } from "react";
import Filter from "./Filter";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";

export default function Pokedex() {
  const { allPokemons, pokemonSerial } = useContext(DataContext);
  const pokeTypes = {
    Bug: {
      color: "bg-bug",
    },
    Dark: {
      color: "bg-dark",
    },
    Dragon: {
      color: "bg-dragon",
    },
    Electric: {
      color: "bg-electric",
    },
    Fairy: {
      color: "bg-fairy",
    },
    Fighting: {
      color: "bg-fighting",
    },
    Fire: {
      color: "bg-fire",
    },
    Flying: {
      color: "bg-flying",
    },
    Ghost: {
      color: "bg-ghost",
    },
    Grass: {
      color: "bg-grass",
    },
    Ground: {
      color: "bg-ground",
    },
    Ice: {
      color: "bg-ice",
    },
    Normal: {
      color: "bg-normal",
    },
    Poison: {
      color: "bg-poison",
    },
    Psychic: {
      color: "bg-psyhic",
    },
    Rock: {
      color: "bg-rock",
    },
    Steel: {
      color: "bg-steel",
    },
    Water: {
      color: "bg-water",
    },
  };

  // console.log("thise is my pokemons", allPokemons);

  return (
    <div className="grid items-center">
      <div className="flex justify-center mb-9">
        <LogoSm />
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex justify-between font-pokefont dark:text-white text-5xl w-[500px] h-[80px] p-4 rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
            <span>Pokedex</span>
            <img
              src="./images/pokedex.png"
              alt="icon for pokedex"
              className="w-[48px]"
            />
          </div>
          <Filter />
        </div>
        {/* pokemons */}
        <div className="min-w-[1080px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 grid grid-cols-4  gap-8  justify-items-center">
          {Object.keys(allPokemons).length > 0 &&
            allPokemons?.map((pokemon) => (
              <NavLink to={`/pokedex/${pokemon.id}`} key={pokemon.id}>
                {/* pokemon card start */}
                <div className="pokemon w-[230px] h-[250px] bg-pokemonBg dark:bg-elementbBg_w relative rounded-xl cursor-pointer transition-all duration-300 ease-linear">
                  <span className="absolute m-2 font-pokefont text-xl z-10">
                    {pokemonSerial(pokemon.id)}
                  </span>
                  <img
                    src={pokemon.sprite}
                    alt="image of pokemon name"
                    className="z-10 absolute top-[-15px]"
                  />
                  <h2 className="absolute bottom-0 w-full h-[30px] flex justify-center items-center  bg-elementbBg dark:bg-white rounded-xl z-20 transition-all duration-300 ease-linear">
                    {pokemon.name.english}
                  </h2>
                  {/* function for type checking */}
                  <div className="flex z-0  overflow-hidden rounded-xl">
                    {pokemon.type.length === 1 ? (
                      <p
                        className={`w-full h-[245px] flex justify-center items-end pb-4 ${
                          pokeTypes[pokemon.type[0]].color
                        } translate-y-[260px] transition-all duration-300 ease-linear`}
                      >
                        {pokemon.type[0]}
                      </p>
                    ) : (
                      pokemon.type.map((type, ind) => (
                        <p
                          key={type + ind}
                          className={`w-1/2 h-[245px] flex justify-center items-end pb-4 ${pokeTypes[type].color} translate-y-[260px] transition-all duration-300 ease-linear`}
                        >
                          {type}
                        </p>
                      ))
                    )}
                  </div>
                  {/* <div className="flex z-0  overflow-hidden rounded-xl">
                    <p className="w-1/2 h-[245px] flex justify-center items-end pb-4 bg-grass translate-y-[260px] transition-all duration-300 ease-linear">
                      grass
                    </p>
                  </div> */}
                </div>
                {/* pokemon car end */}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
}
