import { useRef, useState } from "react";

export default function Filter() {
  const [checkedTypes, setCheckedTypes] = useState([]);

  const refBug = useRef(null);
  const refDark = useRef(null);
  const refDragon = useRef(null);
  const refElectric = useRef(null);
  const refFairy = useRef(null);
  const refFighting = useRef(null);
  const refFire = useRef(null);
  const refFlying = useRef(null);
  const refGhost = useRef(null);
  const refGrass = useRef(null);
  const refGround = useRef(null);
  const refIce = useRef(null);
  const refNormal = useRef(null);
  const refPoison = useRef(null);
  const refPsychic = useRef(null);
  const refRock = useRef(null);
  const refSteel = useRef(null);
  const refWater = useRef(null);

  const pokeTypes = {
    Bug: { ref: refBug },
    Dark: { ref: refDark },
    Dragon: { ref: refDragon },
    Electric: { ref: refElectric },
    Fairy: { ref: refFairy },
    Fighting: { ref: refFighting },
    Fire: { ref: refFire },
    Flying: { ref: refFlying },
    Ghost: { ref: refGhost },
    Grass: { ref: refGrass },
    Ground: { ref: refGround },
    Ice: { ref: refIce },
    Normal: { ref: refNormal },
    Poison: { ref: refPoison },
    Psychic: { ref: refPsychic },
    Rock: { ref: refRock },
    Steel: { ref: refSteel },
    Water: { ref: refWater },
  };
  const refsArr = Object.keys(pokeTypes).map((type) => pokeTypes[type].ref);

  // console.log(refsArr);

  const handleFormChange = (e) => {
    // e.preventDefault();
    const checkedPokeTypes = refsArr.filter(
      (checkboxRef) => checkboxRef.current.checked
    );
    console.log(checkedPokeTypes);
  };

  return (
    <div className="h-[715px] max-w-lg bg-[#2B2B2B] opacity-80 rounded-md shadow-xl my-auto ml-5">
      <h2 className="text-5xl p-6">Filters</h2>
      <form action="#" method="get" onChange={handleFormChange}>
        <div className="grid grid-cols-3  gap-y-4  justify-items-center">
          {Object.keys(pokeTypes).map((type, ind) => {
            return (
              <label
                key={`${type}-${ind}`}
                htmlFor={type}
                className="relative grid h-8 w-36 place-content-center selection:bg-transparent cursor-pointer shadow-lg active:shadow-none  active:translate-y-px transition-all duration-200"
              >
                <input
                  ref={pokeTypes[type].ref}
                  type="checkbox"
                  name="pokemons"
                  id={type}
                  value={type}
                  className="appearance-none h-8 w-36 bg-stone-700 hover:bg-[#3d771172] checked:bg-[#3E7711] hover:checked:bg-[#438313] rounded-lg absolute -z-10 transition-all duration-200"
                />
                {type}
              </label>
            );
          })}
        </div>
      </form>
    </div>
  );
}
