import { useContext } from "react";
import Filter from "./Filter";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";

export default function Pokedex() {
  const { allPokemons } = useContext(DataContext);

  // console.log(allPokemons);

  return (
    <div className="grid items-center">
      <div className="flex justify-center mb-9">
        <LogoSm />
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex justify-between font-pokefont text-5xl w-[500px] h-[80px] p-4 rounded-xl bg-pokedex border-2 border-pokedex bg-opacity-50 shadow-shadow">
            <span>Pokedex</span>
            <img
              src="./images/pokedex.png"
              alt="icon for pokedex"
              className="w-[48px]"
            />
          </div>
          <Filter />
        </div>
        {/* pokemons */}
        <div className="min-w-[1080px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow font-code p-6 grid grid-cols-4  gap-8  justify-items-center">
          <div className="pokemon w-[230px] h-[250px] bg-pokemonBg relative rounded-xl cursor-pointer transition-all duration-300 ease-linear">
            <span className="absolute m-2 font-pokefont text-xl z-10">
              #0001
            </span>
            <img
              src="./images/001.png"
              alt="image of pokemon name"
              className="z-10 absolute top-[-5px]"
            />
            <h2 className=" absolute bottom-0 w-full h-[30px] flex justify-center items-center  bg-elementbBg rounded-xl z-20 transition-all duration-300 ease-linear">
              bulbasaur
            </h2>
            <div className="flex z-0  overflow-hidden rounded-xl">
              <p className="w-1/2 h-[245px] flex justify-center items-end pb-4 bg-grass translate-y-[260px] transition-all duration-300 ease-linear">
                grass
              </p>
              <p className="w-1/2 h-[245px] flex justify-center items-end pb-4 bg-poison translate-y-[260px] transition-all duration-300 ease-linear">
                poison
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
