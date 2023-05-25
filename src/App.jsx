import Loader from "./components/Loader";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

function App() {
  const dark = true;

  return (
    <div className="text-white box-border bg-pattern bg-auto bg-repeat bg-black min-h-screen flex flex-col items-center">
      <Navigation />

      <Loader />
      {/* <Logo />
      <h1 className="font-pokefont text-6xl text-white">
        i gota fight them all !!!
      </h1>*/}
    </div>
  );
}

export default App;
