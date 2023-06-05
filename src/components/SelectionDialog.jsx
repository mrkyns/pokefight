import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { FightContext } from "../context/FightContext";

export default function SelectionDialog({
  isModalOpen,
  setIsModalOpen,
  selectionModalRef,
  pokeTypes,
}) {
  const {
    catchedPokemon,
    removeFromSelection,
    selectablePokes,
    addToSelection,
  } = useContext(FightContext);
  const { pokemonSerial } = useContext(DataContext);

  const [page, setPage] = useState(0);
  const [shownArr, setShownArr] = useState(
    catchedPokemon.slice(0 + page * 6, 6 + page * 6)
  );

  useEffect(() => {
    setShownArr(catchedPokemon.slice(0 + page * 6, 6 + page * 6));
  }, [page]);

  const handleSelectionOrRemoveBtn = (pokemon) => {
    const isAlreadySelected =
      selectablePokes.filter((poke) => poke.id === pokemon.id).length > 0;
    if (isAlreadySelected) removeFromSelection(pokemon);
    else addToSelection(pokemon);
  };

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * catchedPokemon.length);
    if (
      !selectablePokes.find(
        (poke) => poke.id === catchedPokemon[randomIndex].id
      )
    )
      addToSelection(catchedPokemon[randomIndex]);
  };

  return (
    <>
      {isModalOpen && (
        <div
          onClick={() => {
            setIsModalOpen(false);
            selectionModalRef.current.close();
          }}
          className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 backdrop-blur-sm saturate-50 z-10"
        ></div>
      )}
      {/* Selection Dialog */}
      <dialog
        className="bg-pokedex bg-opacity-50 border-2 border-pokedex shadow-shadow_w rounded-xl top-64 absolute z-50 overflow-visible"
        ref={selectionModalRef}
      >
        <div className="relative">
          <div className="absolute top-[-70px] right-[-20px] flex gap-4">
            {catchedPokemon[0].id !== shownArr[0].id && (
              <button
                className="w-[110px] h-[40px] rounded-xl flex justify-center items-center bg-elementbBg bg-opacity-50 text-white dark:text-black border-2 border-elementbBg transition-all duration-300 ease-linear cursor-pointer hover:bg-pokedex hover:bg-opacity-50  hover:border-pokedex dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:hover:bg-pokedex dark:hover:bg-opacity-50  dark:hover:border-pokedex dark:hover:text-white"
                onClick={() => setPage((prev) => prev - 1)}
              >
                prev
              </button>
            )}
            {catchedPokemon[catchedPokemon.length - 1].id !==
              shownArr[shownArr.length - 1].id && (
              <button
                className="w-[110px] h-[40px] rounded-xl flex justify-center items-center bg-elementbBg bg-opacity-50 text-white dark:text-black border-2 border-elementbBg transition-all duration-300 ease-linear cursor-pointer hover:bg-pokedex hover:bg-opacity-50  hover:border-pokedex dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:hover:bg-pokedex dark:hover:bg-opacity-50  dark:hover:border-pokedex dark:hover:text-white"
                onClick={() => setPage((prev) => prev + 1)}
              >
                next
              </button>
            )}
          </div>
          <div className="max-w-[760px] flex flex-wrap justify-center items-center gap-4">
            {catchedPokemon.length > 0 ? (
              shownArr.map((pokemon) => (
                <div
                  // to={`/pokedex/${pokemon.id}`}
                  // onClick={() => {
                  //   setIsModalOpen(false);
                  //   selectionModalRef.current.close();
                  // }}
                  key={pokemon.name.french}
                  className="pokemon w-[230px] h-[250px] bg-pokemonBg dark:bg-elementbBg_w relative rounded-xl cursor-pointer transition-all duration-300 ease-linear"
                >
                  <button
                    className={`absolute -top-1 -right-1  py-1 px-2 z-50 rounded-3xl ${
                      selectablePokes.filter((poke) => poke.id === pokemon.id)
                        .length > 0
                        ? "hover:bg-pokefigt bg-white"
                        : "hover:bg-green-400 bg-green-500"
                    } hover:text-white transition-all duration-300 ease-linear`}
                    onClick={() => handleSelectionOrRemoveBtn(pokemon)}
                  >
                    {selectablePokes.filter((poke) => poke.id === pokemon.id)
                      .length > 0
                      ? "remove"
                      : "select"}
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
              ))
            ) : (
              <img
                src="../images/openball.png"
                alt="no selected pokemon"
                className="w-[230px]"
              />
            )}
          </div>
          <button
            className="absolute bottom-[-70px] left-[-20px] px-4 h-[40px] rounded-xl flex justify-center items-center bg-elementbBg bg-opacity-50 text-white dark:text-black border-2 border-elementbBg transition-all duration-300 ease-linear cursor-pointer hover:bg-pokedex hover:bg-opacity-50  hover:border-pokedex dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:hover:bg-pokedex dark:hover:bg-opacity-50  dark:hover:border-pokedex dark:hover:text-white"
            onClick={addRandom}
          >
            add random Pokemon
          </button>
        </div>
      </dialog>
    </>
  );
}
