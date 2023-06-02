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
        <div
          className="absolute top-80 opacity-0 translate-y-[-500px] animate-appear w-[550px] h-[200px] py-6 bg-black bg-opacity-80 backdrop-blur-sm border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl dark:bg-bgColor dark:bg-opacity-80 dark:border-white dark:shadow-shadow_w animate-input_name"
          style={{ animationDelay: "1.5s" }}
        >
          <form
            onSubmit={handlePlayerNameSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="search"
              id="search"
              autoFocus
              spellCheck="false"
              onChange={handlePlayerNameInput}
              value={playerName}
              placeholder="Enter your name!"
              className="px-3 font-pokefont text-2xl w-[480px] h-[60px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt focus:bg-pokefigt focus:bg-opacity-50 focus:border-pokefigt dark:focus:bg-pokefigt dark:focus:bg-opacity-50 dark:focus:border-pokefigt dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:shadow-shadow_w dark:hover:bg-pokefigt dark:hover:bg-opacity-50 dark:hover:border-pokefigt focus:outline-none"
            />
            <button className="[480px] h-[40px] bg-elementbBg bg-opacity-90 border-2 border-elementbBg shadow-shadow flex justify-center items-center rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:bg-pokefigt hover:bg-opacity-50 hover:border-pokefigt dark:bg-bgColor dark:bg-opacity-90 dark:border-white dark:shadow-shadow_w dark:hover:bg-pokefigt dark:hover:bg-opacity-50 dark:hover:border-pokefigt">
              Confirm
            </button>
          </form>
        </div>
      )}
    </>
  );
}
