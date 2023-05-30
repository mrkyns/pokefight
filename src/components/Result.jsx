export default function Result({ isPlayerWinner, isTie, pokemon }) {
  return (
    <div
      className="mb-16 flex flex-col gap-10 animate-appear"
      style={{ animationDelay: "5s" }}
    >
      {isTie ? (
        <>
          <div className="font-pokefont relative">
            <div className="text-9xl block">draw</div>
            <div className="w-[160px] text-3xl leading-7">
              at least no one lost
            </div>
            <div>
              <img
                src="../images/pokeball.gif"
                alt={pokemon.name.english}
                className="absolute w-[160px] top-[85px] right-10"
              />
            </div>
          </div>
        </>
      ) : isPlayerWinner ? (
        <>
          {" "}
          <div className="font-pokefont relative">
            <div className="text-9xl block">winner</div>
            <div className="w-[100px] text-3xl leading-7">
              winner poke dinner
            </div>
            <div>
              <img
                src={pokemon.sprite}
                alt={pokemon.name.english}
                className="absolute w-[200px] top-16 right-10"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="font-pokefont relative">
            <div className="text-9xl block">defeat</div>
            <div className="w-[100px] text-3xl leading-7">ouch that hurt!</div>
            <div>
              <img
                src={pokemon.sprite}
                alt={pokemon.name.english}
                className="absolute w-[200px] top-16 right-10 opacity-30"
              />
              <img
                src="../images/defeat.png"
                alt="pokemon defeat"
                className="absolute w-[200px] top-16 right-10"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
