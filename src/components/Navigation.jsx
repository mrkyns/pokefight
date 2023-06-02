import { useEffect, useState, useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import SearchIcon from "./SearchIcon";
import { ThemeContext } from "../context/ThemeContext";
import DarkModeIcon from "./DarkModeIcon";

export default function Navigation() {
  const { pathname } = useLocation();
  const [nav, setNav] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchBtn, setSearchBtn] = useState("");
  const [searchCheck, setSearchCheck] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const { setSingleSearch, setPokemonLoading } = useContext(DataContext);
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
    setPokemonLoading(true);
  };

  // checking for color change on search navigation button
  useEffect(() => {
    if (searchCheck) inputRef.current.focus();
  }, [searchCheck]);

  useEffect(() => {
    if (pathname.includes("pokedex")) {
      setNav(
        "nav_pokedex relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl focus:outline-none dark:focus:outline-none"
      );
    } else if (pathname.includes("fight")) {
      setNav(
        "nav_fight relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl focus:outline-none dark:focus:outline-none"
      );
    } else if (pathname.includes("creators")) {
      setNav(
        "nav_creator relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl focus:outline-none dark:focus:outline-none"
      );
    } else if (pathname.includes("leaderboard")) {
      setNav(
        "nav_leader relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl focus:outline-none dark:focus:outline-none"
      );
    } else {
      setNav(
        "nav_default relative flex justify-center items-center no-underline w-[40px] h-[30px] bg-pokemonBg dark:bg-bgColor rounded-se-xl focus:outline-none dark:focus:outline-none"
      );
    }
  }, [pathname]);

  // checking for color on search input filed
  useEffect(() => {
    if (pathname.includes("pokedex")) {
      setSearchInput(
        "flex justify-center items-center text-3xl w-[650px] h-[60px] p-4 rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-60 shadow-shadow dark:bg-pokedex dark:bg-opacity-60 dark:border-pokedex dark:shadow-shadow_w z-10"
      );
    } else if (pathname.includes("fight")) {
      setSearchInput(
        "flex justify-center items-center text-3xl w-[650px] h-[60px] p-4 rounded-xl bg-pokefigt border-2 border-pokefigt bg-opacity-60 shadow-shadow dark:bg-pokefigt dark:bg-opacity-60 dark:border-pokefigt dark:shadow-shadow_w z-10"
      );
    } else if (pathname.includes("creators")) {
      setSearchInput(
        "flex justify-center items-center text-3xl w-[650px] h-[60px] p-4 rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-60 shadow-shadow dark:bg-pokecreator dark:bg-opacity-60 dark:border-pokecreator dark:shadow-shadow_w z-10"
      );
    } else if (pathname.includes("leaderboard")) {
      setSearchInput(
        "flex justify-center items-center text-3xl w-[650px] h-[60px] p-4 rounded-xl bg-pokeleader border-2 border-pokeleader bg-opacity-60 shadow-shadow dark:bg-pokeleader dark:bg-opacity-60 dark:border-pokeleader dark:shadow-shadow_w z-10"
      );
    } else {
      setSearchInput(
        "flex justify-center items-center text-3xl w-[650px] h-[60px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-80 shadow-shadow dark:bg-bgColor dark:bg-opacity-60 dark:border-white dark:shadow-shadow_w z-10"
      );
    }
  }, [pathname]);

  // checking for color on search button
  useEffect(() => {
    if (pathname.includes("pokedex")) {
      setSearchBtn(
        "flex justify-center items-center w-[60px] h-[60px] p-2 rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-60 shadow-shadow dark:bg-pokedex dark:bg-opacity-60 dark:border-pokedex dark:shadow-shadow_w z-10"
      );
    } else if (pathname.includes("fight")) {
      setSearchBtn(
        "flex justify-center items-center w-[60px] h-[60px] p-2 rounded-xl bg-pokefigt border-2 border-pokefigt bg-opacity-60 shadow-shadow dark:bg-pokefigt dark:bg-opacity-60 dark:border-pokefigt dark:shadow-shadow_w z-10"
      );
    } else if (pathname.includes("creators")) {
      setSearchBtn(
        "flex justify-center items-center w-[60px] h-[60px] p-2 rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-60 shadow-shadow dark:bg-pokecreator dark:bg-opacity-60 dark:border-pokecreator dark:shadow-shadow_w z-10"
      );
    } else if (pathname.includes("leaderboard")) {
      setSearchBtn(
        "flex justify-center items-center w-[60px] h-[60px] p-2 rounded-xl bg-pokeleader border-2 border-pokeleader bg-opacity-60 shadow-shadow dark:bg-pokeleader dark:bg-opacity-60 dark:border-pokeleader dark:shadow-shadow_w z-10"
      );
    } else {
      setSearchBtn(
        "flex justify-center items-center w-[60px] h-[60px] p-2 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-80 shadow-shadow dark:bg-bgColor dark:bg-opacity-60 dark:border-white dark:shadow-shadow_w z-10"
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
        <div className="relative flex gap-1">
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
            className={`absolute flex right-0 top-16 gap-4 ${
              searchCheck ? "block" : "hidden"
            }`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="search"
              id="search"
              autoFocus
              spellCheck="false"
              onChange={handleInput}
              className={searchInput}
              ref={inputRef}
            />
            <button className={searchBtn}>
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
