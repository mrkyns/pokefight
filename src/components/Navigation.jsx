import { NavLink } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="mask"></div>
      <div className="navigation bg-menu bg-no-repeat bg-[center_top] mt-[-40px] min-w-[1600px] h-[90px] flex flex-wrap items-end justify-between px-12">
        <div className="flex gap-1">
          <NavLink
            to="/pokedex"
            className="pokedex relative flex justify-center items-center no-underline w-[210px] h-[30px] bg-pokemonBg rounded-ss-xl"
          >
            <span>pokedex</span>
          </NavLink>
          <NavLink
            to="/fight"
            className="fight relative flex justify-center items-center no-underline w-[210px] h-[30px] bg-pokemonBg rounded-se-xl"
          >
            <span>fight</span>
          </NavLink>
        </div>
        <div className="flex gap-1">
          <NavLink
            to="/creators"
            className="creator relative flex justify-center items-center no-underline w-[165px] h-[30px] bg-pokemonBg rounded-ss-xl"
          >
            <span>creators</span>
          </NavLink>
          <NavLink
            to="/leaderboard"
            className="leader relative flex justify-center items-center no-underline w-[165px] h-[30px] bg-pokemonBg"
          >
            <span>leaderboard</span>
          </NavLink>
          <span className="relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg">
            D
          </span>
          <span className="relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg rounded-se-xl">
            S
          </span>
        </div>
      </div>
    </>
  );
}
