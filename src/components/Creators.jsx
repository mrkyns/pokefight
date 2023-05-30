import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import LogoSm from "./LogoSm";
import { NavLink } from "react-router-dom";
import LogoCreator from "./LogoCreator";
import NoSearchResult from "./NoSearchResult";

export default function () {
  const { creators } = useContext(DataContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="mt-[60px] flex justify-center gap-[700px]">
        {/* left column */}
        <div className="flex justify-between flex-col h-[370px]">
          {/* creator link start */}
          <NavLink to={"/creator"} className="creator_left relative w-[360px]">
            <span className="absolute font-pokefont text-5xl py-3 px-4 top-[350px] left-2 rounded-xl origin-top-left w-[350px] h-[100px] rotate-[-90deg] border-2 border-pokecreator bg-pokecreator bg-opacity-50 transition-all duration-300 ease-linear">
              Name
            </span>
            <div className="absolute w-[360px] h-[350px] bg-elementbBg rounded-xl border-2 border-elementbBg shadow-shadow dark:bg-bgColor dark:border-white dark:shadow-shadow_w transition-all duration-300 ease-linear"></div>
          </NavLink>
          {/* creator link end */}
          {/* creator link start */}
          <NavLink className="creator_left relative w-[360px]">
            <span className="absolute font-pokefont text-5xl py-3 px-4 top-[350px] left-2 rounded-xl origin-top-left w-[350px] h-[100px] rotate-[-90deg] border-2 border-pokecreator bg-pokecreator bg-opacity-50 transition-all duration-300 ease-linear">
              Name
            </span>
            <div className="absolute w-[360px] h-[350px] bg-elementbBg rounded-xl border-2 border-elementbBg shadow-shadow dark:bg-bgColor dark:border-white dark:shadow-shadow_w transition-all duration-300 ease-linear"></div>
          </NavLink>
          {/* creator link end */}
        </div>
        {/* right column */}
        <div className="flex justify-between flex-col h-[370px]">
          {/* creator link start */}
          <NavLink className="creator_right relative w-[360px]">
            <span className="absolute font-pokefont text-5xl py-3 px-4 top-[350px] right-2 rounded-xl origin-top-right w-[350px] h-[100px] rotate-[90deg] border-2 border-pokecreator bg-pokecreator bg-opacity-50 transition-all duration-300 ease-linear">
              Name
            </span>
            <div className="absolute w-[360px] h-[350px] bg-elementbBg rounded-xl border-2 border-elementbBg shadow-shadow dark:bg-bgColor dark:border-white dark:shadow-shadow_w transition-all duration-300 ease-linear"></div>
          </NavLink>
          {/* creator link end */}
          {/* creator link start */}
          <NavLink className="creator_right relative w-[360px]">
            <span className="absolute font-pokefont text-5xl py-3 px-4 top-[350px] right-2 rounded-xl origin-top-right w-[350px] h-[100px] rotate-[90deg] border-2 border-pokecreator bg-pokecreator bg-opacity-50 transition-all duration-300 ease-linear">
              Name
            </span>
            <div className="absolute w-[360px] h-[350px] bg-elementbBg rounded-xl border-2 border-elementbBg shadow-shadow dark:bg-bgColor dark:border-white dark:shadow-shadow_w transition-all duration-300 ease-linear"></div>
          </NavLink>
          {/* creator link end */}
        </div>
      </div>
      {/* creators page info box */}
      <div className="relative h-[640px] mt-[-380px] flex flex-col justify-center items-center">
        <LogoCreator />
        <h1 className="mt-10 font-pokefont text-4xl">creators of PokeFight</h1>
      </div>
      {/* links for tech stack */}
      <div className="flex flex-wrap justify-center gap-3">
        {/* title */}
        <span className="flex w-full justify-center font-pokefont text-xl">
          Tech Stack
        </span>
        {/* react link start */}
        <a
          href="https://react.dev/"
          target="_blank"
          className="react flex relative justify-center items-center  w-[140px] h-[50px] bg-elementbBg rounded-xl shadow-shadow dark:bg-bgColor dark:shadow-shadow_w transition-all duration-300 ease-linear overflow-hidden"
        >
          <span className=" transition-all duration-300 ease-linear">
            react
          </span>
          {darkMode ? (
            <img
              src="../images/react_w.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          ) : (
            <img
              src="../images/react_b.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          )}
        </a>
        {/* react link end */}
        {/* node.js link start */}
        <a
          href="https://nodejs.org/en"
          target="_blank"
          className="node flex relative justify-center items-center  w-[140px] h-[50px] bg-elementbBg rounded-xl shadow-shadow dark:bg-bgColor dark:shadow-shadow_w transition-all duration-300 ease-linear overflow-hidden"
        >
          <span className=" transition-all duration-300 ease-linear">
            node.js
          </span>
          {darkMode ? (
            <img
              src="../images/node_w.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          ) : (
            <img
              src="../images/node_b.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          )}
        </a>
        {/* node.js link end */}
        {/* mongo link start */}
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          className="mongo flex relative justify-center items-center  w-[140px] h-[50px] bg-elementbBg rounded-xl shadow-shadow dark:bg-bgColor dark:shadow-shadow_w transition-all duration-300 ease-linear overflow-hidden"
        >
          <span className=" transition-all duration-300 ease-linear">
            mongodb
          </span>
          {darkMode ? (
            <img
              src="../images/mongo_w.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          ) : (
            <img
              src="../images/mongo_b.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          )}
        </a>
        {/* node.js link end */}
        {/* tailwind link start */}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="tailwind flex relative justify-center items-center  w-[140px] h-[50px] bg-elementbBg rounded-xl shadow-shadow dark:bg-bgColor dark:shadow-shadow_w transition-all duration-300 ease-linear overflow-hidden"
        >
          <span className=" transition-all duration-300 ease-linear">
            tailwind
          </span>
          {darkMode ? (
            <img
              src="../images/tailwind_w.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          ) : (
            <img
              src="../images/tailwind_b.png"
              alt="react icon"
              className="absolute right-[-50px] transition-all duration-300 ease-linear"
            />
          )}
        </a>
        {/* node.js link end */}
      </div>
    </>
  );
}
