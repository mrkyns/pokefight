import { useContext, useEffect } from "react";
import LogoSm from "./LogoSm";
import { FightContext } from "../context/FightContext";
import Loader from "./Loader";

export default function Leaderboard() {
  const { fetchTopPlayers, topPlayers, leaderLoading } =
    useContext(FightContext);
  const topThree = {
    0: "gold",
    1: "silver",
    2: "bronze",
  };

  useEffect(() => {
    fetchTopPlayers();
  }, []);

  return (
    <>
      {leaderLoading ? <Loader /> : null}
      {topPlayers.length > 0 && (
        <div>
          <div className="flex justify-center mb-9">
            <LogoSm />
          </div>
          <div className="flex justify-between font-pokefont text-5xl w-[1080px] h-[80px] p-4 rounded-xl bg-pokeleader border-2 border-pokeleader bg-opacity-50 shadow-shadow dark:shadow-shadow_w dark:text-white my-8">
            <span>Leaderboard</span>
            <img
              src="./images/leaderboard.png"
              alt="icon for pokedex"
              className="w-[48px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            {/* card start */}
            {topPlayers.map((player, ind) => {
              return (
                <div
                  className={`${
                    ind < 3 ? topThree[ind] : ""
                  } flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:shadow-shadow_w`}
                >
                  <div className="flex gap-4">
                    <span className="font-pokefont text-2xl">{`#${String(
                      ind + 1
                    ).padStart(3, "0")}`}</span>
                    <span className="text-2xl">{player.name}</span>
                  </div>
                  <div className="flex gap-4">
                    {/* win numbers */}
                    <div className="flex flex-col items-center">
                      <h3 className="opacity-50">wins</h3>
                      <span className="font-pokefont text-2xl">
                        {player.wonGames}
                      </span>
                    </div>
                    {/* loses numbers */}
                    <div className="flex flex-col items-center">
                      <h3 className="opacity-50">loses</h3>
                      <span className="font-pokefont text-2xl">
                        {player.lostGames}
                      </span>
                    </div>
                    {/* fights numbers */}
                    <div className="flex flex-col items-center">
                      <h3 className="opacity-50">points</h3>
                      <span className="font-pokefont text-2xl">
                        {player.points}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* card end */}
          </div>
        </div>
      )}
    </>
  );
}
