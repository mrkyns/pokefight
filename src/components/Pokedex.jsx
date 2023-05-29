import { useContext, useEffect } from "react";
import Filter from "./Filter";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";

export default function Pokedex() {
  const { allPokemons, pokemonSerial, pokeAmount, page, setPage } =
    useContext(DataContext);
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

  const moreCanBeLoaded = (page + 1) * 12 < pokeAmount;
  const prevCanBeLoaded = (page + 1) * 12 > 12;

  const handleLoadMore = () => {
    if (moreCanBeLoaded) setPage((prev) => prev + 1);
  };

  const handleLoadPrev = () => {
    if (prevCanBeLoaded) setPage((prev) => prev - 1);
  }; // console.log("thise is my pokemons", allPokemons);

  return (
    <div className="grid items-center justify-center w-full">
      <div className="flex justify-center mb-9 mt-9 poke_l:mt-0 ">
        <LogoSm />
      </div>
      <div className="flex justify-center flex-col poke_l:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex justify-between font-pokefont dark:text-white text-5xl poke_l:w-[500px] h-[80px] p-4 rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
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
        <div className="max-w-[1080px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 grid poke_xl:grid-cols-4 poke_l:grid-cols-2 poke_data:grid-cols-3 tablet_s:grid-cols-3 pokedex_1:grid-cols-2 gap-4  justify-items-center">
          {/* Load more button */}
          {moreCanBeLoaded && (
            <div className="absolute top-1/2 right-[-15px] flex justify-center origin-top-right rotate-90">
              <button
                onClick={handleLoadMore}
                className={`w-[130px] h-[30px] rounded-xl bg-pokedex flex justify-center items-center`}
              >
                load more
              </button>
            </div>
          )}
          {prevCanBeLoaded && (
            <div className="absolute top-1/2 -left-32 flex justify-center origin-top-right rotate-90">
              <button
                onClick={handleLoadPrev}
                className={`w-[130px] h-[30px] rounded-xl bg-pokedex flex justify-center items-center`}
              >
                previous
              </button>
            </div>
          )}
          {/* List of Pokemons */}
          {Object.keys(allPokemons).length > 0 &&
            allPokemons?.map(
              (pokemon, ind) =>
                ind < 12 && (
                  <NavLink to={`/pokedex/${pokemon.id}`} key={pokemon.id}>
                    {/* pokemon card start */}
                    <div className="pokemon w-[230px] h-[250px] bg-pokemonBg dark:bg-elementbBg_w relative rounded-xl cursor-pointer transition-all duration-300 ease-linear">
                      <span className="absolute m-2 font-pokefont text-xl z-10">
                        {pokemonSerial(pokemon.id)}
                      </span>
                      <img
                        src={pokemon.sprite}
                        alt={pokemon.name.english}
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
                )
            )}
        </div>
      </div>
    </div>
  );
}
