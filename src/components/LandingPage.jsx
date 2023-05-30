import Logo from "./Logo";

export default function LandingPage() {
  return (
    <>
      <h1 className="font-pokefont text-5xl absolute top-72 animate-welcomme">
        A Wild Pokemon Appears !!!
      </h1>
      <div className="my-16 flex flex-col items-center gap-14 animate-landingPage opacity-0">
        <Logo className="w-16" />
        <h1 className="font-pokefont text-7xl ">i gota fight them all !!!</h1>
      </div>
    </>
  );
}
