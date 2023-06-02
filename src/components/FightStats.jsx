export default function FightStats({
  player,
  wild,
  winCountPlayer,
  winCountWild,
  statAbbr,
  wildMultipliers,
  playerMultipliers,
}) {
  return (
    <div className="flex flex-col justify-between">
      {["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"].map(
        (stat, ind) => {
          const playerPoints =
            playerMultipliers.length === 0
              ? player.base[stat]
              : playerMultipliers.reduce(
                  (acc, val) => acc * val,
                  player.base[stat]
                );
          const wildPoints =
            wildMultipliers.length === 0
              ? wild.base[stat]
              : wildMultipliers.reduce(
                  (acc, val) => acc * val,
                  wild.base[stat]
                );

          if (playerPoints > wildPoints) winCountPlayer.current += 1;
          if (playerPoints < wildPoints) winCountWild.current += 1;

          const statDiff =
            playerPoints > wildPoints
              ? `${Math.round(
                  ((playerPoints - wildPoints) / playerPoints) * 100
                )}%`
              : `${Math.round(
                  ((wildPoints - playerPoints) / wildPoints) * 100
                )}%`;
          return (
            <div
              key={stat + ind}
              className="w-[390px] h-[24px] relative flex animate-appear justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w opacity-0"
              style={{
                animationDelay: `${ind * 750}ms`,
              }}
            >
              <div className="w-1/2 h-[24px] relative">
                <div
                  className={`absolute h-[24px] right-0 rounded-s-xl bg-transparent `}
                  style={{
                    width: `${playerPoints > wildPoints ? statDiff : "0"}`,
                  }}
                >
                  <div
                    className={`absolute h-full right-0 rounded-s-xl ${statAbbr[stat].color} animate-grow`}
                    style={{ animationDelay: `${ind * 750}ms` }}
                  ></div>
                </div>
              </div>
              <div className="w-1/2 h-[24px] relative">
                <div
                  className={`absolute  h-[24px] left-0 rounded-e-xl bg-transparent`}
                  style={{
                    width: `${playerPoints < wildPoints ? statDiff : "0"}`,
                    animationDelay: `${ind * 750}ms`,
                  }}
                >
                  <div
                    className={`absolute h-full left-0 rounded-e-xl ${statAbbr[stat].color} animate-grow`}
                    style={{ animationDelay: `${ind * 750}ms` }}
                  ></div>
                </div>
              </div>
              <span className="absolute font-pokefont">
                {stat.toLowerCase()}
              </span>
              {/* victor icon player*/}
              <img
                src="../images/win.png"
                alt=""
                className={`absolute w-[28px] ${
                  playerPoints === wildPoints
                    ? "left-[180px]"
                    : playerPoints > wildPoints
                    ? "left-[-10px]"
                    : "right-[-10px]"
                } `}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
