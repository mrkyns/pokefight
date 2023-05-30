import { useContext } from "react";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";
import { FightContext } from "../context/FightContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function Pokemon() {
  const { allPokemons } = useContext(DataContext);
  const { setSelectablePokes } = useContext(FightContext);
  const { id } = useParams();
  const pokemon = allPokemons?.find((pokemon) => pokemon.id === Number(id));
  console.log(pokemon);

  const pokeTypes = {
    Bug: {
      color: "bg-bug",
      text: "text-bug",
      hover_bg: "hover:bg-bug",
      hover_b: "hover:border-bug",
      dark_hover_bg: "dark:hover:bg-bug",
      dark_hover_b: "dark:hover:border-bug",
    },
    Dark: {
      color: "bg-dark",
      text: "text-dark",
      hover_bg: "hover:bg-dark",
      hover_b: "hover:border-dark",
      dark_hover_bg: "dark:hover:bg-dark",
      dark_hover_b: "dark:hover:border-dark",
    },
    Dragon: {
      color: "bg-dragon",
      text: "text-dragon",
      hover_bg: "hover:bg-dragon",
      hover_b: "hover:border-dragon",
      dark_hover_bg: "dark:hover:bg-dragon",
      dark_hover_b: "dark:hover:border-dragon",
    },
    Electric: {
      color: "bg-electric",
      text: "text-electric",
      hover_bg: "hover:bg-electric",
      hover_b: "hover:border-electric",
      dark_hover_bg: "dark:hover:bg-electric",
      dark_hover_b: "dark:hover:border-electric",
    },
    Fairy: {
      color: "bg-fairy",
      text: "text-fairy",
      hover_bg: "hover:bg-fairy",
      hover_b: "hover:border-fairy",
      dark_hover_bg: "dark:hover:bg-fairy",
      dark_hover_b: "dark:hover:border-fairy",
    },
    Fighting: {
      color: "bg-fighting",
      text: "text-fighting",
      hover_bg: "hover:bg-fighting",
      hover_b: "hover:border-fighting",
      dark_hover_bg: "dark:hover:bg-fighting",
      dark_hover_b: "dark:hover:border-fighting",
    },
    Fire: {
      color: "bg-fire",
      text: "text-fire",
      hover_bg: "hover:bg-fire",
      hover_b: "hover:border-fire",
      dark_hover_bg: "dark:hover:bg-fire",
      dark_hover_b: "dark:hover:border-fire",
    },
    Flying: {
      color: "bg-flying",
      text: "text-flying",
      hover_bg: "hover:bg-flying",
      hover_b: "hover:border-flying",
      dark_hover_bg: "dark:hover:bg-flying",
      dark_hover_b: "dark:hover:border-flying",
    },
    Ghost: {
      color: "bg-ghost",
      text: "text-ghost",
      hover_bg: "hover:bg-ghost",
      hover_b: "hover:border-ghost",
      dark_hover_bg: "dark:hover:bg-ghost",
      dark_hover_b: "dark:hover:border-ghost",
    },
    Grass: {
      color: "bg-grass",
      text: "text-grass",
      hover_bg: "hover:bg-grass",
      hover_b: "hover:border-grass",
      dark_hover_bg: "dark:hover:bg-grass",
      dark_hover_b: "dark:hover:border-grass",
    },
    Ground: {
      color: "bg-ground",
      text: "text-ground",
      hover_bg: "hover:bg-ground",
      hover_b: "hover:border-ground",
      dark_hover_bg: "dark:hover:bg-ground",
      dark_hover_b: "dark:hover:border-ground",
    },
    Ice: {
      color: "bg-ice",
      text: "text-ice",
      hover_bg: "hover:bg-ice",
      hover_b: "hover:border-ice",
      dark_hover_bg: "dark:hover:bg-ice",
      dark_hover_b: "dark:hover:border-ice",
    },
    Normal: {
      color: "bg-normal",
      text: "text-normal",
      hover_bg: "hover:bg-normal",
      hover_b: "hover:border-normal",
      dark_hover_bg: "dark:hover:bg-normal",
      dark_hover_b: "dark:hover:border-normal",
    },
    Poison: {
      color: "bg-poison",
      text: "text-poison",
      hover_bg: "hover:bg-poison",
      hover_b: "hover:border-poison",
      dark_hover_bg: "dark:hover:bg-poison",
      dark_hover_b: "dark:hover:border-poison",
    },
    Psychic: {
      color: "bg-psyhic",
      text: "text-psyhic",
      hover_bg: "hover:bg-psyhic",
      hover_b: "hover:border-psyhic",
      dark_hover_bg: "dark:hover:bg-psyhic",
      dark_hover_b: "dark:hover:border-psyhic",
    },
    Rock: {
      color: "bg-rock",
      text: "text-rock",
      hover_bg: "hover:bg-rock",
      hover_b: "hover:border-rock",
      dark_hover_bg: "dark:hover:bg-rock",
      dark_hover_b: "dark:hover:border-rock",
    },
    Steel: {
      color: "bg-steel",
      text: "text-steel",
      hover_bg: "hover:bg-steel",
      hover_b: "hover:border-steel",
      dark_hover_bg: "dark:hover:bg-steel",
      dark_hover_b: "dark:hover:border-steel",
    },
    Water: {
      color: "bg-water",
      text: "text-water",
      hover_bg: "hover:bg-water",
      hover_b: "hover:border-water",
      dark_hover_bg: "dark:hover:bg-water",
      dark_hover_b: "dark:hover:border-water",
    },
  };

  return (
    <div>
      <div className="flex justify-center mb-9">
        <LogoSm />
      </div>
      <div className="relative flex flex-wrap max-w-[1080px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow p-7 mx-8 dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
        {/* classes for type */}
        <div className="absolute w-[690px] bottom-0 right-[-15px] flex justify-center gap-3 origin-top-right rotate-90">
          {pokemon.type.map((type) => (
            <div
              className={`w-[130px] h-[30px] rounded-xl ${pokeTypes[type].color} flex justify-center items-center`}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="w-full mb-10">
          {/* classes for title */}
          <div className="font-pokefont relative inline text-8xl">
            <span
              className={`absolute bottom-[-10px] right-0 text-5xl ${
                pokeTypes[pokemon.type[0]].text
              } font-bold text-right`}
            >
              {pokemon.name.japanese}
            </span>
            {pokemon.name.english}
          </div>
        </div>
        {/* classes for stats */}
        <div className="flex w-full flex-col-reverse tablet:flex-row">
          <div className="w-full tablet:w-[40%] h-[550px] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                <p className="absolute z-10 font-pokefont px-3 opacity-50">
                  health points
                </p>
                <span
                  className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokecreator"
                  style={{ width: `${(pokemon.base.HP / 255) * 100}%` }}
                ></span>
              </div>
              <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                <p className="absolute z-10 font-pokefont px-3 opacity-50">
                  attack
                </p>
                <span
                  className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokefigt"
                  style={{ width: `${(pokemon.base.Attack / 181) * 100}%` }}
                ></span>
              </div>
              <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                <p className="absolute z-10 font-pokefont px-3 opacity-50">
                  defense
                </p>
                <span
                  className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokedex"
                  style={{ width: `${(pokemon.base.Defense / 230) * 100}%` }}
                ></span>
              </div>
              <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                <p className="absolute z-10 font-pokefont px-3 opacity-50">
                  special attack
                </p>
                <span
                  className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokefigt"
                  style={{
                    width: `${(pokemon.base["Sp. Attack"] / 180) * 100}%`,
                  }}
                ></span>
              </div>
              <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                <p className="absolute z-10 font-pokefont px-3 opacity-50">
                  special defense
                </p>
                <span
                  className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokedex"
                  style={{
                    width: `${(pokemon.base["Sp. Defense"] / 180) * 100}%`,
                  }}
                ></span>
              </div>
              <div className="h-[25px] relative rounded-xl bg-elementbBg dark:bg-elementbBg_w overflow-hidden">
                <p className="absolute z-10 font-pokefont px-3 opacity-50">
                  speed
                </p>
                <span
                  className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokeleader"
                  style={{ width: `${(pokemon.base.Speed / 160) * 100}%` }}
                ></span>
              </div>
            </div>
            {/* classes for buttons */}
            <div className="flex flex-col gap-3">
              {/* go back button */}
              <div className="flex justify-between gap-4">
                <NavLink
                  // onClick={() => setQueryObj(IQO)}
                  to="/pokedex"
                  className={`pokemon_select w-full h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ${
                    pokeTypes[pokemon.type[0]].hover_bg
                  } hover:bg-opacity-50 ${pokeTypes[pokemon.type[0]].hover_b} ${
                    pokeTypes[pokemon.type[0]].dark_hover_bg
                  } dark:hover:bg-opacity-50 ${
                    pokeTypes[pokemon.type[0]].dark_hover_b
                  }`}
                >
                  go back
                </NavLink>
                {/* selected pokemons with nitification */}
                <div className="relative dark:text-white text-5xl w-[80px] poke_l:w-[90px] h-[70px] rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
                  <img src="../images/001.png" alt="1st selected pokemon" />
                  <span
                    className={`absolute top-[-12px] right-[-12px] flex justify-center items-center ${
                      pokeTypes[pokemon.type[0]].color
                    } w-[25px] p-1 rounded-full text-[16px]`}
                  >
                    6
                  </span>
                </div>
              </div>
              {/* select pokemon button */}
              <button
                onClick={() => setSelectablePokes((prev) => [...prev, pokemon])}
                className={`h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w ${
                  pokeTypes[pokemon.type[0]].hover_bg
                } hover:bg-opacity-50 ${pokeTypes[pokemon.type[0]].hover_b} ${
                  pokeTypes[pokemon.type[0]].dark_hover_bg
                } dark:hover:bg-opacity-50 ${
                  pokeTypes[pokemon.type[0]].dark_hover_b
                } cursor-pointer dark:cursor-pointer`}
              >
                select pokemon
              </button>
              {/* go to fight button */}
              <NavLink
                to="/fight"
                className="pokemon_fight h-[95px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear cursor-pointer overflow-hidden relative dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w"
              >
                <span className="transition-all duration-300 ease-linear cursor-pointer">
                  go to fight
                </span>
              </NavLink>
            </div>
          </div>
          {/* classes for image and backgoround light */}
          <div className="w-full tablet:w-[60%] flex justify-center items-center relative">
            <img
              src={pokemon.sprite}
              alt={pokemon.name.english}
              className="z-10"
            />
            <div
              className={`absolute w-[350px] h-[350px] ${
                pokeTypes[pokemon.type[0]].color
              } rounded-full blur-2xl`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
