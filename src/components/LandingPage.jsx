import Logo from "./Logo";
import { FightContext } from "../context/FightContext";
import { useContext } from "react";

export default function LandingPage() {
  const {
    playerNameSelected,
    handlePlayerNameInput,
    handlePlayerNameSubmit,
    playerName,
  } = useContext(FightContext);
  return (
    <>
      <h1 className="font-pokefont text-5xl absolute top-72 animate-welcomme">
        A Wild Pokemon Appears !!!
      </h1>
      <div className="my-16 flex flex-col items-center gap-14 animate-landingPage opacity-0">
        <Logo className="w-16" />
        <h1 className="font-pokefont text-7xl ">
          {playerNameSelected ? `${playerName} is gonna` : "I'm gonna"} fight
          them all !!!
        </h1>
      </div>
      {!playerNameSelected && (
        <form
          onSubmit={handlePlayerNameSubmit}
          className="flex flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-appear"
          style={{ animationDelay: "1.5s" }}
        >
          <input
            type="text"
            name="search"
            id="search"
            autoFocus="true"
            spellCheck="false"
            onChange={handlePlayerNameInput}
            value={playerName}
            className=" px-3 font-pokefont text-2xl w-[390px] h-[60px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt focus:bg-pokefigt focus:bg-opacity-50 focus:border-pokefigt dark:focus:bg-pokefigt dark:focus:bg-opacity-50 dark:focus:border-pokefigt dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:shadow-shadow_w dark:hover:bg-pokefigt dark:hover:bg-opacity-50 dark:hover:border-pokefigt focus:outline-none"
          />
          <button className="[390px] h-[40px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:shadow-shadow_w dark:hover:bg-pokefigt dark:hover:bg-opacity-50 dark:hover:border-pokefigt">
            Enter your name!
          </button>
        </form>
      )}
    </>
  );
}
