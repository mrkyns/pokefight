import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function () {
  const { pathname } = useLocation();
  const [nav, setNav] = useState("");
  const navObject = useLocation();

  useEffect(() => {
    if (pathname.includes("pokedex")) {
      setNav(
        "nav_pokedex relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg rounded-se-xl"
      );
    } else if (pathname.includes("fight")) {
      setNav(
        "nav_fight relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg rounded-se-xl"
      );
    } else if (pathname.includes("creators")) {
      setNav(
        "nav_creator relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg rounded-se-xl"
      );
    } else if (pathname.includes("leaderboard")) {
      setNav(
        "nav_leader relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg rounded-se-xl"
      );
    } else {
      setNav(
        "nav_default relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg rounded-se-xl"
      );
    }
  }, [pathname]);

  return (
    <>
      <div className="mask"></div>
      <div className="navigation font-code bg-menu bg-no-repeat bg-[center_top] mt-[-40px] min-w-[1600px] h-[90px] flex flex-wrap items-end justify-between px-12">
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
          <span className="nav_default relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg">
            D
          </span>
          <span className={nav}>S</span>
        </div>
      </div>
    </>
  );
}
