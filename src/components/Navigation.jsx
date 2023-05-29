import { useEffect, useState, useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import SearchIcon from "./SearchIcon";
import { ThemeContext } from "../context/ThemeContext";
import DarkModeIcon from "./DarkModeIcon";

export default function Navigation() {
  const { pathname } = useLocation();
  const [nav, setNav] = useState("");
  const [searchCheck, setSearchCheck] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const { setSingleSearch } = useContext(DataContext);
  const { toggleDarkMode } = useContext(ThemeContext);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSingleSearch(input);
    setInput("");
    inputRef.current.value = "";
    setSearchCheck(false);
  };

  useEffect(() => {
    if (searchCheck) inputRef.current.focus();
  }, [searchCheck]);

  useEffect(() => {
    if (pathname.includes("pokedex")) {
      setNav(
        "nav_pokedex relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl"
      );
    } else if (pathname.includes("fight")) {
      setNav(
        "nav_fight relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl"
      );
    } else if (pathname.includes("creators")) {
      setNav(
        "nav_creator relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl"
      );
    } else if (pathname.includes("leaderboard")) {
      setNav(
        "nav_leader relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl"
      );
    } else {
      setNav(
        "nav_default relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl"
      );
    }
  }, [pathname]);

  return (
    <>
      <div className="mask"></div>
      <div className="navigation font-code min-w-full poke_l:min-w-[1130px] poke_xl:min-w-[1600px] bg-elementbBg dark:bg-white poke_l:bg-transparent dark:poke_l:bg-transparent poke_l:bg-menu_sm dark:poke_l:bg-menu_dark_sm poke_xl:bg-menu dark:poke_xl:bg-menu_dark bg-no-repeat bg-[center_top] mt-[-40px] h-[90px] flex flex-wrap items-end justify-between px-12">
        <div className="flex gap-1">
          <NavLink
            to="/pokedex"
            className="pokedex relative flex justify-center items-center no-underline w-[210px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-ss-xl"
          >
            <span>pokedex</span>
          </NavLink>
          <NavLink
            to="/fight"
            className="fight relative flex justify-center items-center no-underline w-[210px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl"
          >
            <span>fight</span>
          </NavLink>
        </div>
        <div className="flex gap-1">
          <NavLink
            to="/creators"
            className="creator relative flex justify-center items-center no-underline w-[165px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-ss-xl"
          >
            <span>creators</span>
          </NavLink>
          <NavLink
            to="/leaderboard"
            className="leader relative flex justify-center items-center no-underline w-[165px] h-[30px] bg-pokemonBg dark:bg-bgColor "
          >
            <span>leaderboard</span>
          </NavLink>
          <span
            onClick={toggleDarkMode}
            className="nav_default relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor "
          >
            <DarkModeIcon />
          </span>
          <button
            onClick={() => setSearchCheck((prev) => !prev)}
            htmlFor="search-check"
            className={nav}
          >
            <SearchIcon />
          </button>
          <form
            className={`absolute flex right-80 top-20 ${
              searchCheck ? "block" : "hidden"
            }`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="search"
              id="search"
              autoFocus="true"
              spellCheck="false"
              onChange={handleInput}
              className="text-elementbBg"
              ref={inputRef}
            />
            <button className="bg-neutral-100 text-elementbBg">sub</button>
          </form>
        </div>
      </div>
    </>
  );
}
