import { Route, Routes } from "react-router";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import Fight from "./components/Fight";

function App() {
  const dark = true;

  return (
    <div className="text-white font-code box-border bg-pattern bg-auto bg-repeat bg-black min-h-screen flex flex-col items-center">
      <Navigation />

      <Loader />
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
      </Routes>
    </div>
  );
}

export default App;
