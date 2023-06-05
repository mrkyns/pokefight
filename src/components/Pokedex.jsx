import { useContext, useRef, useState } from "react";
import Filter from "./Filter";
import LogoSm from "./LogoSm";
import Loader from "./Loader";
import { DataContext } from "../context/DataContext";
import { FightContext } from "../context/FightContext";
import { NavLink } from "react-router-dom";
import NoSearchResult from "./NoSearchResult";
import SelectionDialog from "./SelectionDialog";
import { ThemeContext } from "../context/ThemeContext";

export default function Pokedex() {
  const {
    allPokemons,
    allPokemonsLoading,
    pokemonSerial,
    pokeAmount,
    page,
    setPage,
  } = useContext(DataContext);
  const { selectablePokes, catchedPokemon } = useContext(FightContext);
  const { pokeTypes } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectionModalRef = useRef(null);

  const moreCanBeLoaded = (page + 1) * 12 < pokeAmount;
  const prevCanBeLoaded = (page + 1) * 12 > 12;

  const handleLoadMore = () => {
    if (moreCanBeLoaded) setPage((prev) => prev + 1);
  };

  const handleLoadPrev = () => {
    if (prevCanBeLoaded) setPage((prev) => prev - 1);
  };

  return (
    <>
      {allPokemonsLoading ? <Loader /> : null}
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
                  if (catchedPokemon.length > 0) {
                    setIsModalOpen(true);
                    selectionModalRef.current.show();
                  }
                }}
                className="flex justify-center items-center relative dark:text-white text-5xl w-[90px] poke_l:w-[100px] h-[80px] rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-50 shadow-shadow dark:shadow-shadow_w cursor-pointer"
              >
                {catchedPokemon.length > 0 ? (
                  <img
                    src={
                      catchedPokemon[
                        Math.floor(Math.random() * catchedPokemon.length)
                      ].sprite
                    }
                    alt={
                      catchedPokemon[
                        Math.floor(Math.random() * catchedPokemon.length)
                      ].name.english
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
                  {catchedPokemon.length}
                </span>
                <span
                  className={`absolute bottom-[-12px] left-[-12px] flex justify-center items-center bg-elementbBg w-[25px] p-1 rounded-full text-[16px]`}
                >
                  {selectablePokes.length}
                </span>
              </div>
            </div>
            <Filter />
          </div>
          {/* pokemons */}
          <div
            className={`relative max-w-[1080px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 ${
              allPokemons.length > 0
                ? "grid poke_xl:grid-cols-4 poke_l:grid-cols-2 poke_data:grid-cols-3 tablet_s:grid-cols-3 pokedex_1:grid-cols-2 gap-4  justify-items-center mt-4 poke_l:mt-0"
                : "flex justify-center items-center"
            }`}
          >
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
            {allPokemons.length > 0 ? (
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
              )
            ) : (
              <NoSearchResult />
            )}
          </div>
        </div>
      </div>
      {/* Dialog Backdrop */}
      {catchedPokemon.length > 0 && (
        <SelectionDialog
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          selectionModalRef={selectionModalRef}
          pokeTypes={pokeTypes}
        />
      )}
    </>
  );
}
