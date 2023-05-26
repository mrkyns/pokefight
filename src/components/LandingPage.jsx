import Logo from "./Logo";

export default function LandingPage() {
  return (
    <div className="my-16 flex flex-col items-center gap-14 animate-landingPage repeat-3">
      <Logo className="w-16" />
      <h1 className="font-pokefont text-7xl text-white">
        i gota fight them all !!!
      </h1>
    </div>
  );
}
