import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import Fight from "./components/Fight";
import Creators from "./components/Creators";
import Creator from "./components/Creator";
import Leaderboard from "./components/Leaderboard";
import FightPlayerPokemon from "./components/FightPlayerPokemon";
import FightWildPokemon from "./components/FightWildPokemon";

function App() {
  const dark = true;

  return (
    <div className="text-white dark:text-black font-code box-border bg-pattern bg-auto bg-repeat bg-black dark:bg-bgColor min-h-screen flex flex-col items-center">
      <Navigation />

      {/* <Logo />
      <h1 className="font-pokefont text-6xl text-white">
        i gota fight them all !!!
      </h1>
      */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
        <Route path="/fight" element={<Fight />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/creators/:name" element={<Creator />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/player" element={<FightPlayerPokemon />} />
        <Route path="/wild" element={<FightWildPokemon />} />
      </Routes>
      <span className="block my-10 opacity-20">
        PokeFight | Group 05 | WBS Cooding School 2023
      </span>
    </div>
  );
}

export default App;
