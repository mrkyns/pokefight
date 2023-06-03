export default function Result({ isPlayerWinner, isTie, pokemon, points }) {
  return (
    <div
      className="mb-16 flex flex-col gap-10 animate-appear"
      style={{ animationDelay: "5s" }}
    >
      {isTie ? (
        <>
          <div className="font-pokefont relative">
            <div className="text-[110px] block">draw</div>
            <div className="w-[160px] text-3xl leading-7 mt-[-30px]">
              at least no one lost
            </div>
            <div>{points} points</div>
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
            <div className="text-[110px] block">winner</div>
            <div className="w-[100px] text-3xl leading-7 mt-[-30px]">
              winner poke dinner
            </div>
            <div>{points} points</div>
            <div>
              <img
                src={pokemon.sprite}
                alt={pokemon.name.english}
                className="absolute w-[200px] top-14 right-4"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="font-pokefont relative">
            <div className="text-[110px] block">defeat</div>
            <div className="w-[100px] text-3xl leading-7 mt-[-30px]">
              ouch that hurt!
            </div>
            <div>{points} points</div>
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
