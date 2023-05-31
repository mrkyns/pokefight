import { useContext, useRef, useState } from "react";
import Filter from "./Filter";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";
import { FightContext } from "../context/FightContext";
import { NavLink } from "react-router-dom";

export default function Pokedex() {
  const { allPokemons, pokemonSerial, pokeAmount, page, setPage } =
    useContext(DataContext);
  const { selectablePokes, removeFromSelection } = useContext(FightContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectionModalRef = useRef(null);

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
    <>
      <div className="grid items-center justify-center w-full">
        <div className="flex justify-center mb-9 mt-9 poke_l:mt-0 ">
          <LogoSm />
        </div>
        <div className="flex justify-center flex-col poke_l:flex-row gap-4">
          <div className="flex flex-col gap-4">
            {/* title */}
            <div className="flex poke gap-4">
              <div className="flex justify-between font-pokefont dark:text-white text-5xl w-full h-[80px] p-4 rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
                <span>Pokedex</span>
                <img
                  src="./images/pokedex.png"
                  alt="icon for pokedex"
                  className="w-[48px]"
                />
              </div>
              {/* selected pokemons with nitification */}
              <div
                onClick={() => {
                  setIsModalOpen(true);
                  selectionModalRef.current.show();
                }}
                className="flex justify-center items-center relative dark:text-white text-5xl w-[90px] poke_l:w-[100px] h-[80px] rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-50 shadow-shadow dark:shadow-shadow_w cursor-pointer"
              >
                {selectablePokes.length > 0 ? (
                  <img
                    src={selectablePokes[selectablePokes.length - 1].sprite}
                    alt={
                      selectablePokes[selectablePokes.length - 1].name.english
                    }
                  />
                ) : (
                  <img
                    src="../images/openball.png"
                    alt="1st selected pokemon"
                    className="w-[90%]"
                  />
                )}

                <span className="absolute top-[-12px] right-[-12px] flex justify-center items-center bg-elementbBg w-[25px] p-1 rounded-full text-[16px]">
                  {selectablePokes.length}
                </span>
              </div>
            </div>
            <Filter />
          </div>
          {/* pokemons */}
          <div className="relative max-w-[1080px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 grid poke_xl:grid-cols-4 poke_l:grid-cols-2 poke_data:grid-cols-3 tablet_s:grid-cols-3 pokedex_1:grid-cols-2 gap-4  justify-items-center mt-4 poke_l:mt-0">
            {/* Load more button */}

            <div className="absolute top-[-15px] right-0 flex justify-center gap-4">
              {prevCanBeLoaded && (
                <button
                  onClick={handleLoadPrev}
                  className={`w-[150px] h-[30px] rounded-xl flex justify-center items-center bg-elementbBg  border-2 border-elementbBg transition-all duration-300 ease-linear cursor-pointer hover:bg-pokedex  hover:border-elementbBg dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:hover:bg-pokedex  dark:hover:border-white dark:hover:text-white`}
                >
                  previous page
                </button>
              )}
              {moreCanBeLoaded && (
                <button
                  onClick={handleLoadMore}
                  className={`w-[150px] h-[30px] rounded-xl flex justify-center items-center bg-elementbBg  border-2 border-elementbBg transition-all duration-300 ease-linear cursor-pointer hover:bg-pokedex  hover:border-elementbBg dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:hover:bg-pokedex  dark:hover:border-white dark:hover:text-white`}
                >
                  next page
                </button>
              )}
            </div>

            {/* List of Pokemons */}
            {allPokemons.length > 0 &&
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
      {/* Dialog Backdrop */}
      {isModalOpen && (
        <div
          onClick={() => {
            setIsModalOpen(false);
            selectionModalRef.current.close();
          }}
          className="absolute top-0 left-0 h-full w-full bg-pokedex opacity-40 blur-3xl saturate-50 z-10"
        ></div>
      )}
      {/* Selection Dialog */}
      <dialog
        className="bg-pokedex rounded-xl top-64 absolute z-50 "
        ref={selectionModalRef}
      >
        <div className="grid grid-cols-3 gap-4">
          {selectablePokes.length > 0 &&
            selectablePokes.map((pokemon) => (
              <div
                to={`/pokedex/${pokemon.id}`}
                onClick={() => {
                  setIsModalOpen(false);
                  selectionModalRef.current.close();
                }}
                key={pokemon.name.french}
                className="pokemon w-[230px] h-[250px] bg-pokemonBg dark:bg-elementbBg_w relative rounded-xl cursor-pointer transition-all duration-300 ease-linear"
              >
                <button
                  className="absolute -top-1 -right-1 bg-white py-1 px-2 z-50 rounded-3xl"
                  onClick={() => removeFromSelection(pokemon)}
                >
                  remove
                </button>
                <NavLink
                  to={`/pokedex/${pokemon.id}`}
                  onClick={() => {
                    setIsModalOpen(false);
                    selectionModalRef.current.close();
                  }}
                >
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
                </NavLink>
              </div>
            ))}
        </div>
      </dialog>
    </>
  );
}
