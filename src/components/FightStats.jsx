export default function FightStats({
  player,
  wild,
  winCountPlayer,
  winCountWild,
  statAbbr,
}) {
  console.log("start");
  return (
    <div className="flex flex-col justify-between">
      {["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"].map(
        (stat, ind) => {
          const winner = player.base[stat] > wild.base[stat] ? player : wild;
          player.base[stat] > wild.base[stat]
            ? winCountPlayer.current++
            : winCountWild.current++;
          const statDiff = `${Math.round(
            (Math.abs(player.base[stat] - wild.base[stat]) /
              winner.base[stat]) *
              100
          )}%`;
          console.log(
            stat,
            " ",
            player.base[stat],
            wild.base[stat],
            statDiff,
            winCountPlayer,
            winCountWild
          );
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
                    width: `${
                      player.base[stat] > wild.base[stat] ? statDiff : "0"
                    }`,
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
                    width: `${
                      player.base[stat] < wild.base[stat] ? statDiff : "0"
                    }`,
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
                  player.base[stat] > wild.base[stat]
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
