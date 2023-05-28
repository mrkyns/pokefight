import { useContext, useEffect, useState } from "react";
import LogoSm from "./LogoSm";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function Pokemon() {
  const { allPokemons } = useContext(DataContext);
  const { id } = useParams();
  const pokemon = allPokemons?.find((pokemon) => pokemon.id === Number(id));
  console.log(pokemon);
  const pokeTypes = {
    Bug: {
      color: "bg-bug",
      text: "text-bug",
    },
    Dark: {
      color: "bg-dark",
      text: "text-dark",
    },
    Dragon: {
      color: "bg-dragon",
      text: "text-dragon",
    },
    Electric: {
      color: "bg-electric",
      text: "text-electic",
    },
    Fairy: {
      color: "bg-fairy",
      text: "text-fairy",
    },
    Fighting: {
      color: "bg-fighting",
      text: "text-fighting",
    },
    Fire: {
      color: "bg-fire",
      text: "text-fire",
    },
    Flying: {
      color: "bg-flying",
      text: "text-flying",
    },
    Ghost: {
      color: "bg-ghost",
      text: "text-ghost",
    },
    Grass: {
      color: "bg-grass",
      text: "text-grass",
    },
    Ground: {
      color: "bg-ground",
      text: "text-ground",
    },
    Ice: {
      color: "bg-ice",
      text: "text-ice",
    },
    Normal: {
      color: "bg-normal",
      text: "text-normal",
    },
    Poison: {
      color: "bg-poison",
      text: "text-poison",
    },
    Psychic: {
      color: "bg-psyhic",
      text: "text-psyhic",
    },
    Rock: {
      color: "bg-rock",
      text: "text-rock",
    },
    Steel: {
      color: "bg-steel",
      text: "text-steel",
    },
    Water: {
      color: "bg-water",
      text: "text-water",
    },
  };

  return (
    <div>
      <div className="flex justify-center mb-9">
        <LogoSm />
      </div>
      <div className="relative flex flex-wrap w-[1080px] bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow p-7">
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
        <div className="w-[40%] h-[550px] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="h-[25px] relative rounded-xl bg-elementbBg overflow-hidden">
              <p className="absolute z-10 font-pokefont px-3 opacity-50">
                health points
              </p>
              <span
                className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokecreator"
                style={{ width: `${(pokemon.base.HP / 255) * 100}%` }}
              ></span>
            </div>
            <div className="h-[25px] relative rounded-xl bg-elementbBg overflow-hidden">
              <p className="absolute z-10 font-pokefont px-3 opacity-50">
                attack
              </p>
              <span
                className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokefigt"
                style={{ width: `${(pokemon.base.Attack / 181) * 100}%` }}
              ></span>
            </div>
            <div className="h-[25px] relative rounded-xl bg-elementbBg overflow-hidden">
              <p className="absolute z-10 font-pokefont px-3 opacity-50">
                defense
              </p>
              <span
                className="absolute h-full rounded-xl flex items-center px-3 font-pokefont bg-pokedex"
                style={{ width: `${(pokemon.base.Defense / 230) * 100}%` }}
              ></span>
            </div>
            <div className="h-[25px] relative rounded-xl bg-elementbBg overflow-hidden">
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
            <div className="h-[25px] relative rounded-xl bg-elementbBg overflow-hidden">
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
            <div className="h-[25px] relative rounded-xl bg-elementbBg overflow-hidden">
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
            <NavLink
              to="/pokedex"
              className="h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear hover:bg-grass hover:bg-opacity-50 hover:border-grass cursor-pointer"
            >
              go back
            </NavLink>
            {/* select pokemon button */}
            <div className="h-[70px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear hover:bg-grass hover:bg-opacity-50 hover:border-grass cursor-pointer">
              choose pokemon
            </div>
            {/* go to fight button */}
            <div className="pokemon_fight h-[95px] flex justify-center items-center font-pokefont text-3xl bg-elementbBg bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow transition-all duration-300 ease-linear cursor-pointer overflow-hidden relative">
              <span className="transition-all duration-300 ease-linear cursor-pointer">
                go to fight
              </span>
            </div>
          </div>
        </div>
        {/* classes for image and backgoround light */}
        <div className="w-[60%] flex justify-center items-center relative">
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
  );
}
