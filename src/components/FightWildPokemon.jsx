export default function FightWildPokemon() {
  return (
    <div className="w-[240px]">
      {/* image for wild pokemon */}
      <div className="w-[240px] h-[210px] bg-elementbBg rounded-xl border-2 border-elementbBg dark:bg-elementbBg_w dark:border-elementbBg_w">
        <img
          className="w-full h-full object-contain -translate-y-3"
          src="../images/001.png"
          alt="a wild pokemon"
        />
      </div>
      {/* {battleHasStarted && (
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
      <div className="flex justify-between">
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
        </div>

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
      </div>
      {/* weakness for wiled pokemon */}
      <div className="my-8">
        <h2 className="font-pokefont text-xl mb-4">weakness</h2>
        <div className="flex justify-start gap-4 flex-wrap">
          {/* start of weakness type */}
          <div className="relative flex">
            <div className="absolute left-[-5px] top-[4px] w-[20px] h-[20px] rounded-full bg-green-600"></div>
            <span className="z-10">grass</span>
          </div>
          {/* start of weakness type */}
          <div className="relative flex">
            <div className="absolute left-[-5px] top-[4px] w-[20px] h-[20px] rounded-full bg-violet-700"></div>
            <span className="z-10">poison</span>
          </div>
          {/* start of weakness type */}
          <div className="relative flex">
            <div className="absolute left-[-5px] top-[4px] w-[20px] h-[20px] rounded-full bg-red-700"></div>
            <span className="z-10">fighting</span>
          </div>
          {/* start of weakness type */}
          <div className="relative flex">
            <div className="absolute left-[-5px] top-[4px] w-[20px] h-[20px] rounded-full bg-blue-700"></div>
            <span className="z-10">water</span>
          </div>
        </div>
      </div>

      {/* catch em button */}
      <div className="relative flex w-full  h-[60px]">
        <div className="w-[90%] font-pokefont text-2xl bg-elementbBg bg-opacity-50 border-2 border-elementbBg shadow-shadow flex justify-start px-3 items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          Catch it!
        </div>
        <img
          src="../images/catchball.gif"
          alt="catch em poke ball"
          className="w-[80px] absolute right-0 top-[-10px]"
        />
      </div>
    </div>
  );
}
