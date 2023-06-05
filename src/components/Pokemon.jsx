import { useContext, useEffect, useRef, useState } from "react";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";
import { FightContext } from "../context/FightContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import SelectionDialog from "./SelectionDialog";
import { ThemeContext } from "../context/ThemeContext";

export default function Pokemon() {
  const { allPokemons } = useContext(DataContext);
  const { pokeTypes } = useContext(ThemeContext);
  const {
    addToSelection,
    selectablePokes,
    catchedPokemon,
    setChallengedWild,
    removeFromSelection,
    multiplier,
  } = useContext(FightContext);
  const { id } = useParams();
  const pokemon = [...allPokemons, ...selectablePokes, ...catchedPokemon]?.find(
    (pokemon) => pokemon.id === Number(id)
  );

  const selectedRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectionModalRef = useRef(null);
  const [isInSelection, setIsInSelection] = useState(false);
  const [isCatched, setIsCatched] = useState(false);

  useEffect(() => {
    const pokemonIsInSelection =
      selectablePokes.filter((poke) => poke.id === pokemon.id).length === 1;
    setIsInSelection(pokemonIsInSelection);
    const pokemonIsCatched =
      catchedPokemon.filter((poke) => poke.id === pokemon.id).length === 1;
    setIsCatched(pokemonIsCatched);
  }, [selectablePokes, catchedPokemon, pokemon]);

  return (
    <>
      <div>
        <div className="flex justify-center mb-9">
          <LogoSm />
        </div>
        <div className="relative flex flex-wrap max-w-[1080px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow p-7 mx-8 dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          {/* classes for type */}
          <div className="absolute w-[690px] bottom-0 right-[-15px] flex justify-center gap-3 origin-top-right rotate-90">
            {pokemon.type.map((type) => (
              <div
                className={`w-[130px] h-[30px] rounded-xl ${
                  pokeTypes[type].color
                } ${
                  ["Normal", "Fairy", "Flying"].includes(type)
                    ? "text-elementbBg"
                    : ""
                } flex justify-center items-center`}
              >
                {type}
              </div>
            ))}
          </div>
          <div className="w-full mb-10">
            {/* classes for title */}
            <div className="font-pokefont relative inline text-8xl">
              <span
                className={`absolute bottom-[-10px] right-0 text-5xl ${
                  pokeTypes[pokemon.type[0]].text
                } font-bold text-right`}
              >
                {pokemon.name.japanese}
              </span>
              {pokemon.name.english}
            </div>
          </div>
          {/* classes for stats */}
          <div className="flex w-full flex-col-reverse tablet:flex-row">
            <div className="w-full tablet:w-[40%] h-[550px] flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                  <p className="absolute z-10 font-pokefont px-3 opacity-50">
                    health points
                  </p>
                  <span
                    className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokecreator"
                    style={{ width: `${(pokemon.base.HP / 255) * 100}%` }}
                  ></span>
                </div>
                <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                  <p className="absolute z-10 font-pokefont px-3 opacity-50">
                    attack
                  </p>
                  <span
                    className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokefigt"
                    style={{ width: `${(pokemon.base.Attack / 181) * 100}%` }}
                  ></span>
                </div>
                <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                  <p className="absolute z-10 font-pokefont px-3 opacity-50">
                    defense
                  </p>
                  <span
                    className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokedex"
                    style={{ width: `${(pokemon.base.Defense / 230) * 100}%` }}
                  ></span>
                </div>
                <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                  <p className="absolute z-10 font-pokefont px-3 opacity-50">
                    special attack
                  </p>
                  <span
                    className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokefigt"
                    style={{
                      width: `${(pokemon.base["Sp. Attack"] / 180) * 100}%`,
                    }}
                  ></span>
                </div>
                <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                  <p className="absolute z-10 font-pokefont px-3 opacity-50">
                    special defense
                  </p>
                  <span
                    className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokedex"
                    style={{
                      width: `${(pokemon.base["Sp. Defense"] / 180) * 100}%`,
                    }}
                  ></span>
                </div>
                <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                  <p className="absolute z-10 font-pokefont px-3 opacity-50">
                    speed
                  </p>
                  <span
                    className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokeleader"
                    style={{ width: `${(pokemon.base.Speed / 160) * 100}%` }}
                  ></span>
                </div>
              </div>
              {/* classes for buttons */}
              <div className="flex flex-col gap-3">
                {/* go back button */}
                <div className="flex justify-between gap-4">
                  <NavLink
                    // onClick={() => setQueryObj(IQO)}
                    to="/pokedex"
                    className={`pokemon_select w-full h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ${
                      pokeTypes[pokemon.type[0]].hover_bg
                    } hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].hover_b
                    } ${
                      pokeTypes[pokemon.type[0]].dark_hover_bg
                    } dark:hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].dark_hover_b
                    }`}
                  >
                    go back
                  </NavLink>
                  {/* selected pokemons with nitification */}
                  <div
                    onClick={() => {
                      if (catchedPokemon.length > 0) {
                        setIsModalOpen(true);
                        selectionModalRef.current.show();
                      }
                    }}
                    ref={selectedRef}
                    className="relative flex justify-center items-center dark:text-white text-5xl w-[80px] poke_l:w-[90px] h-[70px] rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow cursor-pointer dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w"
                  >
                    {catchedPokemon.length > 0 ? (
                      <img
                        src={catchedPokemon[catchedPokemon.length - 1].sprite}
                        alt={
                          catchedPokemon[catchedPokemon.length - 1].name.english
                        }
                      />
                    ) : (
                      <img
                        src="../images/openball.png"
                        alt="1st selected pokemon"
                        className="w-[90%]"
                      />
                    )}
                    <span
                      className={`absolute top-[-12px] right-[-12px] flex justify-center items-center ${
                        pokeTypes[pokemon.type[0]].color
                      } w-[25px] p-1 rounded-full text-[16px]`}
                    >
                      {catchedPokemon.length}
                    </span>
                    <span
                      className={`absolute bottom-[-12px] left-[-12px] flex justify-center items-center ${
                        pokeTypes[pokemon.type[0]].color
                      } w-[25px] p-1 rounded-full text-[16px]`}
                    >
                      {selectablePokes.length}
                    </span>
                  </div>
                </div>
                {/* select pokemon button */}
                {isInSelection ? (
                  <button
                    onClick={() => removeFromSelection(pokemon)}
                    className={`h-[70px] flex justify-center items-center font-pokefont text-3xl ${
                      pokeTypes[pokemon.type[0]].color
                    } bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ${
                      pokeTypes[pokemon.type[0]].hover_bg
                    } hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].hover_b
                    } ${
                      pokeTypes[pokemon.type[0]].dark_hover_bg
                    } dark:hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].dark_hover_b
                    }`}
                  >
                    pokemon selected
                  </button>
                ) : isCatched ? (
                  <button
                    onClick={() => {
                      addToSelection(pokemon);
                      if (!selectablePokes.includes(pokemon)) {
                        selectedRef.current.classList.add("animate-ping");

                        setTimeout(() => {
                          selectedRef.current.classList.remove("animate-ping");
                        }, 325);
                      }
                    }}
                    className={`h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ${
                      pokeTypes[pokemon.type[0]].hover_bg
                    } hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].hover_b
                    } ${
                      pokeTypes[pokemon.type[0]].dark_hover_bg
                    } dark:hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].dark_hover_b
                    } cursor-pointer dark:cursor-pointer`}
                  >
                    select pokemon
                  </button>
                ) : (
                  <NavLink
                    onClick={() => {
                      setChallengedWild(pokemon);
                    }}
                    to={"/fight"}
                    className={`h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ${
                      pokeTypes[pokemon.type[0]].hover_bg
                    } hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].hover_b
                    } ${
                      pokeTypes[pokemon.type[0]].dark_hover_bg
                    } dark:hover:bg-opacity-50 ${
                      pokeTypes[pokemon.type[0]].dark_hover_b
                    } cursor-pointer`}
                  >
                    go catch it!
                  </NavLink>
                )}
                {/* go to fight button */}
                <NavLink
                  to="/fight"
                  className="pokemon_fight h-[95px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear cursor-pointer overflow-hidden relative dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w"
                >
                  <span className="transition-all duration-300 ease-linear cursor-pointer">
                    go to fight
                  </span>
                </NavLink>
              </div>
            </div>
            {/* classes for image and backgoround light */}
            <div className="w-full tablet:w-[60%] flex flex-col justify-start items-center relative">
              <div className="mx-10 flex justify-between gap-4">
                <h2 className="font-pokefont text-xl mb-4">weakness</h2>
                <div className="flex justify-start gap-4 flex-wrap">
                  {[
                    ...new Set(
                      pokemon.type.reduce(
                        (weaknesses, type) => [
                          ...weaknesses,
                          ...multiplier[type].half,
                          ...multiplier[type].zero,
                        ],
                        []
                      )
                    ),
                  ].map((type) => {
                    return (
                      <div className="relative flex">
                        <div
                          className={`absolute left-[-5px] top-[4px] w-[20px] h-[20px] rounded-full ${pokeTypes[type].color}`}
                        ></div>
                        <span className="z-10">{type.toLowerCase()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <img
                src={pokemon.sprite}
                alt={pokemon.name.english}
                className="z-10 mt-[-80px]"
              />
              <div
                className={`absolute w-[350px] h-[350px] top-[110px] ${
                  pokeTypes[pokemon.type[0]].color
                } rounded-full blur-2xl`}
              ></div>
            </div>
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
