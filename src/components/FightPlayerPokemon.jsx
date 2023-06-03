import { useContext } from "react";
import { FightContext } from "../context/FightContext";

export default function FightPlayerPokemon({
  pokemon,
  playerVictoriesMap,
  battleHasStarted,
  isPlayer,
}) {
  const { pickEffect } = useContext(FightContext);
  const effectMap = isPlayer
    ? playerVictoriesMap
    : playerVictoriesMap.map((round) => {
        if (round === 0) return 1;
        if (round === 1) return 0;
        else return 2;
      });

  return (
    <>
      {/* <div className="w-[240px]"> */}
      {/* image for wild pokemon */}
      <div className="relative w-[240px] h-[210px] bg-elementbBg rounded-xl border-2 border-elementbBg dark:bg-elementbBg_w dark:border-elementbBg_w overflow-visible">
        <div
          className={`w-full h-full -translate-y-3 ${
            isPlayer ? "scale-x-[-1]" : ""
          }`}
        >
          {battleHasStarted &&
            effectMap.map((round, ind) =>
              ind < 5 ? (
                <img
                  src={pokemon.sprite}
                  alt={pokemon.name.english}
                  className={`absolute top-2 left-3  w-full h-full object-contain opacity-0 ${
                    round === 1 ? "animate-hit" : "animate-visible"
                  }`}
                  style={{ animationDelay: `${ind * 750}ms` }}
                />
              ) : (
                <img
                  src={pokemon.sprite}
                  alt={pokemon.name.english}
                  className={`absolute top-2 left-3  w-full h-full object-contain opacity-0 ${
                    round === 1 ? "animate-lastHit" : "animate-appearInstantly"
                  } `}
                  style={{ animationDelay: `${ind * 750}ms` }}
                />
              )
            )}
        </div>
        {/* comic effects */}
        {battleHasStarted &&
          effectMap.map((round, ind) => (round === 0 ? pickEffect(ind) : null))}
      </div>

      {/* {battleHasStarted && (
      {/* {battleHasSta/pow.png
      {/* {battleHasSta/wham.png
      {/* {battleHasSta/zap.png
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
      )} */}

      {/* stast for random wild pokemon */}
      {/* <div className="flex justify-between">
        <div className="fight_stat_hp w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear">
          <h4 className="text-sm opacity-50">hp</h4>
          <span className="font-pokefont text-xl">60</span>
        </div>
        <div className="fight_stat_att w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear">
          <h4 className="text-sm opacity-50">at</h4>
          <span className="font-pokefont text-xl">62</span>
        </div>
        <div className="fight_stat_def w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear">
          <h4 className="text-sm opacity-50">df</h4>
          <span className="font-pokefont text-xl">63</span>
        </div>
        <div className="fight_stat_att w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear">
          <h4 className="text-sm opacity-50">sa</h4>
          <span className="font-pokefont text-xl">80</span>
        </div>
        <div className="fight_stat_def w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear">
          <h4 className="text-sm opacity-50">sd</h4>
          <span className="font-pokefont text-xl">80</span>
        </div>
        <div className="fight_stat_spp w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear">
          <h4 className="text-sm opacity-50">sp</h4>
          <span className="font-pokefont text-xl">60</span>
        </div> */}

      {/* {battleHasStarted &&
          ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"].map(
            (stat, ind) => (
              <div
                className={`${statAbbr[stat].grad} w-[35px] h-[60px] flex flex-col items-center justify-center rounded-xl mt-4 animate-appear`}
                style={{
                  animationDelay: `${ind * 750}ms`,
                }}
              >
                <h4 className="text-sm opacity-50">{statAbbr[stat].abb}</h4>
                <span className="font-pokefont text-xl">
                  {randomWildPokemon.base[stat]}
                </span>
              </div>
            )
          )} */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
