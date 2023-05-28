export default function Result() {
  return (
    <div className="mb-16 flex flex-col gap-10">
      <div className="font-pokefont relative">
        <div className="text-9xl block">winner</div>
        <div className="w-[100px] text-3xl leading-7">winner poke diner</div>
        <div>
          <img
            src="../images/001.png"
            alt="pokemon image"
            className="absolute w-[200px] top-16 right-10"
          />
        </div>
      </div>
      <div className="font-pokefont relative">
        <div className="text-9xl block">defeat</div>
        <div className="w-[100px] text-3xl leading-7">ouch that hurt!</div>
        <div>
          <img
            src="../images/001.png"
            alt="pokemon image"
            className="absolute w-[200px] top-16 right-10 opacity-30"
          />
          <img
            src="../images/defeat.png"
            alt="pokemon image"
            className="absolute w-[200px] top-16 right-10"
          />
        </div>
      </div>
    </div>
  );
}
