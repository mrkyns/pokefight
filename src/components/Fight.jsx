import LogoSm from "./LogoSm";
import Result from "./Result";

export default function Fight() {
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
        <div className="min-w-[1080px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 flex flex-col items-center gap-4 justify-items-center relative mb-[100px] dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          {/* player names */}
          <div className="w-full flex justify-between px-8 pt-5 pb-8">
            <span className="font-pokefont text-4xl">Player</span>
            <span className="font-pokefont text-4xl">Wild pokemon</span>
          </div>
          {/* pokemon image and fight stistic */}
          <div className="w-full flex justify-between px-8 relative">
            <div>
              <div className="fight_pokemon_select relative w-[240px] h-[210px] bg-elementbBg rounded-xl border-2 border-elementbBg dark:bg-elementbBg_w dark:border-elementbBg_w overflow-hidden transition-all duration-300 ease-linear cursor-pointer"></div>
              <div className="w-[240px] flex justify-center gap-2 absolute bottom-[-15px] pointer-events-none">
                <img src="../images/win.png" alt="" className="w-[32px]" />
                <img src="../images/win.png" alt="" className="w-[32px]" />
                <img src="../images/win.png" alt="" className="w-[32px]" />
                <img src="../images/win.png" alt="" className="w-[32px]" />
              </div>
            </div>
            {/* pokemon fight stats */}
            <div className="flex flex-col justify-between">
              {/* hp */}
              <div className="w-[390px] h-[24px] relative flex justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w">
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[35%] h-[24px] right-0 rounded-s-xl bg-pokefigt"></div>
                </div>
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[0] h-[24px] left-0 rounded-e-xl bg-pokefigt"></div>
                </div>
                <span className="absolute font-pokefont">hp</span>
                {/* victor icon */}
                <img
                  src="../images/win.png"
                  alt=""
                  className="absolute w-[28px] left-[-10px]"
                />
              </div>
              {/* attack */}
              <div className="pokemon_fight_stats w-[390px] h-[24px] relative flex justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w">
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[0] h-[24px] right-0 rounded-s-xl bg-pokefigt"></div>
                </div>
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[45%] h-[24px] left-0 rounded-e-xl bg-pokefigt"></div>
                </div>
                <span className="absolute font-pokefont">attack</span>
                {/* victor icon */}
                <img
                  src="../images/win.png"
                  alt=""
                  className="absolute w-[28px] right-[-10px]"
                />
              </div>
              {/* defense */}
              <div className="pokemon_fight_stats w-[390px] h-[24px] relative flex justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w">
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[0] h-[24px] right-0 rounded-s-xl bg-pokefigt"></div>
                </div>
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[65%] h-[24px] left-0 rounded-e-xl bg-pokefigt"></div>
                </div>
                <span className="absolute font-pokefont">defense</span>
                {/* victor icon */}
                <img
                  src="../images/win.png"
                  alt=""
                  className="absolute w-[28px] right-[-10px]"
                />
              </div>
              {/* sp. attack */}
              <div className="pokemon_fight_stats w-[390px] h-[24px] relative flex justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w">
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[12%] h-[24px] right-0 rounded-s-xl bg-pokefigt"></div>
                </div>
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[0] h-[24px] left-0 rounded-e-xl bg-pokefigt"></div>
                </div>
                <span className="absolute font-pokefont">sp. attack</span>
                {/* victor icon */}
                <img
                  src="../images/win.png"
                  alt=""
                  className="absolute w-[28px] left-[-10px]"
                />
              </div>
              {/* sp. defense */}
              <div className="pokemon_fight_stats w-[390px] h-[24px] relative flex justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w">
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[73%] h-[24px] right-0 rounded-s-xl bg-pokefigt"></div>
                </div>
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[0] h-[24px] left-0 rounded-e-xl bg-pokefigt"></div>
                </div>
                <span className="absolute font-pokefont">sp. defense</span>
                {/* victor icon */}
                <img
                  src="../images/win.png"
                  alt=""
                  className="absolute w-[28px] left-[-10px]"
                />
              </div>
              {/* speed */}
              <div className="pokemon_fight_stats w-[390px] h-[24px] relative flex justify-center items-center rounded-xl bg-elementbBg dark:bg-elementbBg_w">
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[37%] h-[24px] right-0 rounded-s-xl bg-pokefigt"></div>
                </div>
                <div className="w-1/2 h-[24px] relative">
                  <div className="absolute w-[0] h-[24px] left-0 rounded-e-xl bg-pokefigt"></div>
                </div>
                <span className="absolute font-pokefont">speed</span>
                {/* victor icon */}
                <img
                  src="../images/win.png"
                  alt=""
                  className="absolute w-[28px] left-[-10px]"
                />
              </div>
            </div>
            <div>
              <div className="w-[240px] h-[210px] bg-elementbBg rounded-xl border-2 border-elementbBg dark:bg-elementbBg_w dark:border-elementbBg_w"></div>
              <div className="w-[240px] flex justify-center gap-2 absolute bottom-[-15px] pointer-events-none">
                <img src="../images/win.png" alt="" className="w-[32px]" />
                <img src="../images/win.png" alt="" className="w-[32px]" />
              </div>
            </div>
          </div>
          {/* button to start fight */}
          <div className="fight_pokemon w-[430px] h-[95px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear cursor-pointer overflow-hidden relative my-14 dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ">
            <span className="transition-all duration-300 ease-linear cursor-pointer">
              start battle
            </span>
          </div>
          <Result />
          {/* buttons to restart and to go to leader board */}
          <div className="flex gap-4 absolute bottom-[-20px]">
            <div className="w-[255px] h-[41px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ">
              reset fight
            </div>
            <div className="w-[255px] h-[41px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt">
              leaderboard
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
