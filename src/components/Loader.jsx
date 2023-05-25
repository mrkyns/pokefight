import spinner from "../images/loader.gif";

export default function Loader() {
  const active = false;

  return (
    <div className={active ? "flex flex-col items-center" : "hidden"}>
      <img src={spinner} alt="Data is loading" />
      <h1 className="font-pokefont text-6xl text-white py-10 animate-bounce">
        data is loading !!!
      </h1>
    </div>
  );
}
