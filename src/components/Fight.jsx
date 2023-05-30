import LogoSm from "./LogoSm";
import Result from "./Result";
import { FightContext } from "../context/FightContext";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useRef, useState } from "react";
import FightStats from "./FightStats";

export default function Fight() {
  const {
    selectedPokemon,
    setSelectedPokemon,
    randomWildPokemon,
    fetchWildPokemon,
    selectablePokes,
    // setSelectablePokes,
  } = useContext(FightContext);
  const { pokemonSerial } = useContext(DataContext);

  const selectionModalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const winCountPlayer = useRef(0);
  const winCountWild = useRef(0);
  const [battleHasStarted, setBattleHasStarted] = useState(false);
  const [victoriesPlayer, setVictoriesPlayer] = useState([]);

  const reset = async () => {
    await fetchWildPokemon();
    setBattleHasStarted(false);
    winCountPlayer.current = 0;
    winCountWild.current = 0;
    setIsModalOpen(false);
    selectionModalRef.current.close();
    // if (Object.keys(selectedPokemon).length > 0)
  };

  useEffect(() => {
    if (Object.keys(selectedPokemon).length > 0)
      setVictoriesPlayer(
        [
          "HP",
          "Attack",
          "Defense",
          "Sp. Attack",
          "Sp. Defense",
          "Speed",
        ].filter(
          (type) => selectedPokemon?.base[type] > randomWildPokemon?.base[type]
        )
      );
  }, [selectedPokemon]);

  useEffect(() => {
    reset();
  }, []);

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

  const openSelection = () => {
    setIsModalOpen(true);
    selectionModalRef.current.show();
  };

  const startBattle = () => {
    setVictoriesPlayer(
      ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"].filter(
        (type) => selectedPokemon?.base[type] > randomWildPokemon?.base[type]
      )
    );
    setBattleHasStarted(true);
  };

  return (
    <>
      <div className="flex justify-center mb-9">
        <LogoSm />
      </div>
      <div className="flex flex-col gap-4">
        {/* title */}
        <div className="flex justify-between font-pokefont text-5xl w-[1080px] h-[80px] p-4 rounded-xl bg-pokefigt border-2 border-pokefigt bg-opacity-50 shadow-shadow dark:shadow-shadow_w dark:text-white">
          <span>Fight</span>
          <img
            src="./images/fight.png"
            alt="icon for pokedex"
            className="w-[48px]"
          />
        </div>
        {/* content */}
        <div className="min-w-[1080px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 flex flex-col items-center gap-4 justify-items-center relative mb-[20px] dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          {/* player names */}
          <div className="w-full flex justify-between px-8 pt-5 pb-8">
            <span className="font-pokefont text-4xl">Player</span>
            <span className="font-pokefont text-4xl">
              A wild{" "}
              {Object.keys(randomWildPokemon).length > 0
                ? randomWildPokemon.name.english
                : "pokemon"}
              !
            </span>
          </div>
          {/* pokemon image and fight stistic */}
          <div className="w-full flex justify-between px-8 relative">
            <div>
              <div
                onClick={openSelection}
                className="fight_pokemon_select flex justify-center items-center w-[240px] h-[210px] rounded-xl border-2 border-elementbBg dark:border-elementbBg_w overflow-hidden transition-all duration-300 ease-linear cursor-pointer z-[5]"
              >
                <div className="flex justify-center items-center w-[240px] h-[210px] z-10 bg-elementbBg dark:bg-elementbBg_w border-2 border-elementbBg dark:border-elementbBg_w">
                  {Object.keys(selectedPokemon).length > 0 && (
                    <img
                      className="w-full h-full object-contain -translate-y-3"
                      src={
                        Object.keys(selectedPokemon).length > 0 &&
                        selectedPokemon.sprite
                      }
                      alt={`a wild ${
                        Object.keys(selectedPokemon).length > 0 &&
                        selectedPokemon.name.english
                      }!`}
                    />
                  )}
                </div>
              </div>
              {battleHasStarted && (
                <div className="w-[240px] flex justify-center gap-2 absolute bottom-[-15px] pointer-events-none z-10">
                  {victoriesPlayer.map((time, ind) => {
                    return (
                      <img
                        key={time + ind}
                        src="../images/win.png"
                        alt=""
                        className="w-[32px] animate-appear"
                        style={{ animationDelay: "4.5s" }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            {/* pokemon fight stats */}
            {Object.keys(selectedPokemon).length > 0 &&
              Object.keys(randomWildPokemon).length > 0 &&
              battleHasStarted && (
                <FightStats
                  player={selectedPokemon}
                  wild={randomWildPokemon}
                  winCountPlayer={winCountPlayer}
                  winCountWild={winCountWild}
                />
              )}
            {/* Wild Pokemon */}
            <div>
              <div className="w-[240px] h-[210px] bg-elementbBg rounded-xl border-2 border-elementbBg dark:bg-elementbBg_w dark:border-elementbBg_w">
                {Object.keys(randomWildPokemon).length > 0 && (
                  <img
                    className="w-full h-full object-contain -translate-y-3"
                    src={
                      Object.keys(randomWildPokemon).length > 0 &&
                      randomWildPokemon.sprite
                    }
                    alt={`a wild ${
                      Object.keys(randomWildPokemon).length > 0 &&
                      randomWildPokemon.name.english
                    }!`}
                  />
                )}
              </div>
              {battleHasStarted && (
                <div className="w-[240px] flex justify-center gap-2 absolute bottom-[-15px] pointer-events-none">
                  {[
                    "HP",
                    "Attack",
                    "Defense",
                    "Sp. Attack",
                    "Sp. Defense",
                    "Speed",
                  ]
                    .filter(
                      (type) =>
                        selectedPokemon.base[type] <
                        randomWildPokemon.base[type]
                    )
                    .map((time, ind) => (
                      <img
                        key={time + ind}
                        src="../images/win.png"
                        alt=""
                        className="w-[32px] animate-appear"
                        style={{ animationDelay: "4.5s" }}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
          {/* button to start fight */}
          {!battleHasStarted && (
            <div
              onClick={startBattle}
              className="fight_pokemon w-[430px] h-[95px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear cursor-pointer overflow-hidden relative my-14 dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w "
            >
              <span className="transition-all duration-300 ease-linear cursor-pointer">
                start battle
              </span>
            </div>
          )}
          {battleHasStarted && (
            <Result
              isPlayerWinner={victoriesPlayer.length > 3}
              pokemon={selectedPokemon}
            />
          )}
          {/* buttons to restart and to go to leader board */}
          <div className="flex gap-4 absolute bottom-[-20px]">
            <div
              onClick={reset}
              className="w-[255px] h-[41px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w "
            >
              reset fight
            </div>
            <div className="w-[255px] h-[41px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:shadow-shadow_w dark:hover:bg-pokefigt dark:hover:bg-opacity-50 dark:hover:border-pokefigt">
              leaderboard
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
            className="absolute top-0 left-0 h-full w-full bg-fighting opacity-30  z-10"
          ></div>
        )}
        {/* Selection Dialog */}
        <dialog
          className="bg-fighting rounded-xl [&::backdrop]:bg-gray-400 [&::backdrop]:bg-opacity-50 [&::backdrop]:w-screen [&::backdrop]:h-screen [&::backdrop]:z-30 absolute z-50"
          ref={selectionModalRef}
        >
          <div className="flex gap-4">
            {selectablePokes.length > 0 &&
              selectablePokes.map((pokemon) => (
                <div
                  key={pokemon.name.french}
                  onClick={() => {
                    setSelectedPokemon(pokemon);
                    setIsModalOpen(false);
                    selectionModalRef.current.close();
                  }}
                  className="pokemon w-[230px] h-[250px] bg-pokemonBg dark:bg-elementbBg_w relative rounded-xl cursor-pointer transition-all duration-300 ease-linear"
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
                </div>
              ))}
          </div>
        </dialog>
      </div>
    </>
  );
}
