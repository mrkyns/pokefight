import { useState } from "react";

export default function DualRange({
  stat,
  range,
  setExtMin,
  setExtMax,
  startMin,
  startMax,
}) {
  const [dynamicMax, setDynamicMax] = useState(startMax);
  const [dynamicMin, setDynamicMin] = useState(startMin);

  return (
    <div className="w-4/5 relative mx-auto my-10 flex justify-between">
      <div className="absolute left-0 -top-6">{stat}</div>
      <div className="mt-3">min: {dynamicMin}</div>
      <input
        className="absolute left-0 top-0 h-2 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-runnable-track]:h-[1px] [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:bg-stone-300 bg-transparent [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pokedex  [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-runnable-track]:rounded [&::-webkit-slider-thumb]:translate-y-[-40%]  pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer"
        style={{
          width: `${((dynamicMax - range[0]) / (range[1] - range[0])) * 100}%`,
        }}
        type="range"
        name="pokemons"
        id={stat + "-min"}
        min={range[0]}
        max={dynamicMax}
        value={dynamicMin}
        onChange={({ target }) => {
          if (target.value < dynamicMax) setDynamicMin(+target.value);
        }}
        onMouseUp={() => setExtMin(dynamicMin)}
      />
      <input
        className="absolute right-0 top-0 h-2 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-runnable-track]:h-[1px] [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:bg-stone-300 bg-transparent [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pokedex [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-runnable-track]:rounded [&::-webkit-slider-thumb]:translate-y-[-40%] pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer"
        style={{
          width: `${
            100 - ((dynamicMin - range[0]) / (range[1] - range[0])) * 100
          }%`,
        }}
        type="range"
        name="pokemons"
        id={stat + "-max"}
        min={dynamicMin}
        max={range[1]}
        value={dynamicMax}
        onMouseUp={() => setExtMax(dynamicMax)}
        onChange={({ target }) => {
          if (!target.value < dynamicMin) setDynamicMax(+target.value);
        }}
      />
      <div
        className="absolute top-[2px] h-1  bg-pokedex blur-[2px]"
        style={{
          left: `${((dynamicMin - range[0]) / (range[1] - range[0])) * 100}%`,
          right: `${((range[1] - dynamicMax) / (range[1] - range[0])) * 100}%`,
        }}
      ></div>
      <div className="mt-3">max: {dynamicMax}</div>
    </div>
  );
}
