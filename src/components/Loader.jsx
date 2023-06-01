import spinner from "../images/loader.gif";

export default function Loader() {
  return (
    <div className="absolute z-50 bg-black bg-opacity-80 w-full h-full overflow-hidden flex justify-center items-center flex-col gap-4 backdrop-blur-sm">
      <img
        src={spinner}
        alt="Data is loading"
        className="max-w-[600px] mx-16"
      />
      <h1 className="font-pokefont text-6xl text-white py-10 animate-bounce">
        data is loading !!!
      </h1>
    </div>
  );
}
