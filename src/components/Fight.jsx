import LogoSm from "./LogoSm";
import Result from "./Result";
import { FightContext } from "../context/FightContext";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import FightStats from "./FightStats";

export default function Fight() {
  const {
    selectedPokemon,
    setSelectedPokemon,
    randomWildPokemon,
    fetchWildPokemon,
    selectablePokes,
    multiplier,
    playerName,
    playerNameSelected,
    handlePlayerNameInput,
    handlePlayerNameSubmit,
    fetchTopPlayers,
  } = useContext(FightContext);

  const winCountPlayer = useRef(0);
  const winCountWild = useRef(0);
  const [battleHasStarted, setBattleHasStarted] = useState(false);
  const [victoriesPlayer, setVictoriesPlayer] = useState([]);
  const [victoriesWild, setVictoriesWild] = useState([]);
  const [playerMultipliers, setPlayerMultipliers] = useState([]);
  const [wildMultipliers, setWildMultipliers] = useState([]);
  const [appliedPoints, setAppliedPoints] = useState(0);

  const reset = async () => {
    await fetchWildPokemon();
    setBattleHasStarted(false);
    setSelectedPokemon({});
    setAppliedPoints(0);
    winCountPlayer.current = 0;
    winCountWild.current = 0;
  };

  useEffect(() => {
    if (Object.keys(selectedPokemon).length > 0)
      setPlayerMultipliers(
        randomWildPokemon.type.flatMap((wildType) =>
          selectedPokemon.type.map((playerType) => {
            if (multiplier[playerType].half.includes(wildType)) return 0.75;
            if (multiplier[playerType].double.includes(wildType)) return 1.5;
            if (multiplier[playerType].zero.includes(wildType)) return 0.125;
            return 1;
          })
        )
      );
    if (
      Object.keys(randomWildPokemon).length > 0 &&
      Object.keys(selectedPokemon).length > 0
    )
      setWildMultipliers(
        selectedPokemon.type.flatMap((playerType) =>
          randomWildPokemon.type.map((wildType) => {
            if (multiplier[wildType].half.includes(playerType)) return 0.75;
            if (multiplier[wildType].double.includes(playerType)) return 1.5;
            if (multiplier[wildType].zero.includes(playerType)) return 0.125;
            return 1;
          })
        )
      );
  }, [selectedPokemon, randomWildPokemon, multiplier]);

  useEffect(() => {
    reset();
  }, []);

  const startBattle = () => {
    const playerPoints = [
      "HP",
      "Attack",
      "Defense",
      "Sp. Attack",
      "Sp. Defense",
      "Speed",
    ].map((stat, ind) => {
      return playerMultipliers.length === 0
        ? selectedPokemon.base[stat]
        : playerMultipliers.reduce(
            (acc, val) => acc * val,
            selectedPokemon.base[stat]
          );
    });

    const wildPoints = [
      "HP",
      "Attack",
      "Defense",
      "Sp. Attack",
      "Sp. Defense",
      "Speed",
    ].map((stat, ind) => {
      return wildMultipliers.length === 0
        ? randomWildPokemon.base[stat]
        : wildMultipliers.reduce(
            (acc, val) => acc * val,
            randomWildPokemon.base[stat]
          );
    });
    // console.log("Battle start: ", playerPoints, wildPoints);

    const points = [
      "HP",
      "Attack",
      "Defense",
      "Sp. Attack",
      "Sp. Defense",
      "Speed",
    ]
      .map((stat, ind) => {
        if (
          playerPoints[ind] > wildPoints[ind] &&
          selectedPokemon.base[stat] < randomWildPokemon.base[stat]
        )
          return 3;
        if (playerPoints[ind] > wildPoints[ind]) return 1;
        else return 0;
      })
      .reduce((acc, val) => acc + val, 0);

    const victoriesPLayerCalc = playerPoints.filter(
      (point, ind) => point > wildPoints[ind]
    );
    const victoriesWildCalc = wildPoints.filter(
      (point, ind) => point > playerPoints[ind]
    );

    console.log("victories");

    setAppliedPoints(points);
    setVictoriesPlayer(victoriesPLayerCalc);
    setVictoriesWild(victoriesWildCalc);

    setBattleHasStarted(true);
  };

  useEffect(() => {
    if (!battleHasStarted) return;

    const updatePlayerScores = async () => {
      const gameIsWon = victoriesPlayer.length > victoriesWild.length ? 1 : 0;
      const gameIsLost = victoriesPlayer.length < victoriesWild.length ? 1 : 0;
      console.log("POINTS: ", appliedPoints);
      try {
        const res = await fetch("https://pokefight-api.onrender.com/players/", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: playerName,
            wonGames: gameIsWon,
            lostGames: gameIsLost,
            points: appliedPoints,
          }),
        });
        const data = await res.json();
        console.log("update: ", data.data);
        fetchTopPlayers();
      } catch (error) {
        console.log(error.message);
      }
    };
    updatePlayerScores();
  }, [battleHasStarted]);

  const statAbbr = {
    HP: { abb: "hp", grad: "fight_stat_hp", color: "bg-[rgb(103,_168,_20)]" },
    Attack: {
      abb: "at",
      grad: "fight_stat_att",
      color: "bg-[rgb(230,_27,_27)]",
    },
    Defense: {
      abb: "df",
      grad: "fight_stat_def",
      color: "bg-[rgb(25,_68,_133)]",
    },
    "Sp. Attack": {
      abb: "sa",
      grad: "fight_stat_att",
      color: "bg-[rgb(230,_27,_27)]",
    },
    "Sp. Defense": {
      abb: "sd",
      grad: "fight_stat_def",
      color: "bg-[rgb(25,_68,_133)]",
    },
    Speed: {
      abb: "sp",
      grad: "fight_stat_spp",
      color: "bg-[rgb(200,_152,_27)]",
    },
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
        <div className="min-w-[1080px] min-h-[650px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 flex flex-col items-center gap-4 justify-items-center relative mb-[20px] dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          {/* selected pokemons */}
          <div className="absolute left-[-45px] top-[17px] flex flex-col gap-6 z-30">
            {/* pokemon selected card start */}
            {selectablePokes.length > 0 &&
              selectablePokes.map((poke, ind) => (
                <div
                  key={poke.name.english + ind}
                  onClick={() => {
                    setSelectedPokemon(poke);
                    setBattleHasStarted(false);
                  }}
                  className="fight_select-poke overflow-hidden flex flex-col justify-center gap-[2px]"
                >
                  <div className="absolute w-[85px] h-[100px] flex justify-center items-center bg-elementbBg dark:bg-elementbBg_w rounded-xl z-10">
                    <img
                      src={poke.sprite}
                      alt={poke.name.english}
                      className="w-[90%]"
                    />
                  </div>
                  <span className="ml-[83px] bg-pokefigt bg-opacity-50 rounded-e-xl px-3 border-2 border-pokefigt font-pokefont text-xl translate-x-[-250px] transition-all duration-300 ease-linear">
                    {poke.name.english}
                  </span>
                  <p className="ml-[83px] bg-pokemonBg dark:bg-white rounded-e-xl px-3 text-l translate-x-[-250px]  transition-all duration-300 ease-linear">
                    H:{poke.base.HP}, A:{poke.base.Attack}, D:
                    {poke.base.Defense},
                    <br />
                    SA:{poke.base["Sp. Attack"]}, SD:{poke.base["Sp. Defense"]},
                    S:{poke.base.Speed}
                  </p>
                </div>
              ))}
          </div>
          {/* player names */}
          <div className="w-full flex justify-between px-8 pt-5 pb-8">
            <span className="font-pokefont text-4xl">
              {playerNameSelected ? `${playerName}` : "Player"}
              {Object.keys(selectedPokemon).length > 0
                ? ["s", "x"].includes(playerName.at(-1))
                  ? `' ${selectedPokemon.name.english}`
                  : `'s ${selectedPokemon.name.english}`
                : ""}
            </span>
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
              <div className="flex justify-center items-center w-[240px] h-[210px] rounded-xl border-2 border-elementbBg dark:border-elementbBg_w overflow-hidden transition-all duration-300 ease-linear cursor-pointer z-[5]">
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
              {/* stast for selected player pokemon */}
              <div className="flex justify-between">
                {battleHasStarted &&
                  [
                    "HP",
                    "Attack",
                    "Defense",
                    "Sp. Attack",
                    "Sp. Defense",
                    "Speed",
                  ].map((stat, ind) => (
                    <div
                      className={`${statAbbr[stat].grad} w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear`}
                      style={{
                        animationDelay: `${ind * 750}ms`,
                      }}
                    >
                      <h4 className="text-sm opacity-50">
                        {statAbbr[stat].abb}
                      </h4>
                      <span className="font-pokefont text-xl">
                        {selectedPokemon.base[stat]}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            {!battleHasStarted && !playerNameSelected && (
              <form onSubmit={handlePlayerNameSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoFocus="true"
                  spellCheck="false"
                  onChange={handlePlayerNameInput}
                  value={playerName}
                  className="text-elementbBg"
                />
                <button>Go!</button>
              </form>
            )}

            {/* pokemon fight stats */}
            {Object.keys(selectedPokemon).length > 0 &&
              Object.keys(randomWildPokemon).length > 0 &&
              battleHasStarted && (
                <FightStats
                  player={selectedPokemon}
                  wild={randomWildPokemon}
                  winCountPlayer={winCountPlayer}
                  winCountWild={winCountWild}
                  statAbbr={statAbbr}
                  wildMultipliers={wildMultipliers}
                  playerMultipliers={playerMultipliers}
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
                <div className="w-[240px] flex justify-center gap-2 absolute bottom-[-15px] pointer-events-none z-10">
                  {victoriesWild.map((time, ind) => {
                    return (
                      <img
                        key={time + ind + "wild"}
                        src="../images/win.png"
                        alt=""
                        className="w-[32px] animate-appear"
                        style={{ animationDelay: "4.5s" }}
                      />
                    );
                  })}
                </div>
              )}

              {/* stast for random wild pokemon */}
              <div className="flex justify-between">
                {battleHasStarted &&
                  [
                    "HP",
                    "Attack",
                    "Defense",
                    "Sp. Attack",
                    "Sp. Defense",
                    "Speed",
                  ].map((stat, ind) => (
                    <div
                      className={`${statAbbr[stat].grad} w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear`}
                      style={{
                        animationDelay: `${ind * 750}ms`,
                      }}
                    >
                      <h4 className="text-sm opacity-50">
                        {statAbbr[stat].abb}
                      </h4>
                      <span className="font-pokefont text-xl">
                        {randomWildPokemon.base[stat]}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* button to start fight */}
          {!battleHasStarted &&
            Object.keys(selectedPokemon).length > 0 &&
            Object.keys(randomWildPokemon).length > 0 && (
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
              isTie={victoriesPlayer.length === victoriesWild.length}
              pokemon={selectedPokemon}
            />
          )}
          {/* buttons to restart and to go to leader board */}
          <div className="flex gap-4 absolute bottom-[-20px]">
            <div
              onClick={reset}
              className="w-[255px] h-[41px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w "
            >
              next fight
            </div>
            <NavLink
              to={"/leaderboard"}
              className="w-[255px] h-[41px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:shadow-shadow_w dark:hover:bg-pokefigt dark:hover:bg-opacity-50 dark:hover:border-pokefigt"
            >
              leaderboard
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
