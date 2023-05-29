import { useRef, useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import DualRange from "./DualRange";

export default function Filter() {
  const {
    setCheckedTypes,
    setMinHP,
    setMaxHP,
    setMinAttack,
    setMaxAttack,
    setMinDefense,
    setMaxDefense,
    setMinSpeed,
    setMaxSpeed,
  } = useContext(DataContext);

  // console.log(queryObj);

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
    Bug: {
      ref: refBug,
      color: "checked:bg-bug",
      hover: "hover:bg-bug",
      hover_dark: "dark:hover:bg-bug",
      after: "checked:after:bg-bug",
    },
    Dark: {
      ref: refDark,
      color: "checked:bg-dark",
      hover: "hover:bg-dark",
      hover_dark: "dark:hover:bg-dark",
      after: "checked:after:bg-dark",
    },
    Dragon: {
      ref: refDragon,
      color: "checked:bg-dragon",
      hover: "hover:bg-dragon",
      hover_dark: "dark:hover:bg-dragon",
      after: "checked:after:bg-dragon",
    },
    Electric: {
      ref: refElectric,
      color: "checked:bg-electric",
      hover: "hover:bg-electric",
      hover_dark: "dark:hover:bg-electric",
      after: "checked:after:bg-electric",
    },
    Fairy: {
      ref: refFairy,
      color: "checked:bg-fairy",
      hover: "hover:bg-fairy",
      hover_dark: "dark:hover:bg-fairy",
      after: "checked:after:bg-fairy",
    },
    Fighting: {
      ref: refFighting,
      color: "checked:bg-fighting",
      hover: "hover:bg-fighting",
      hover_dark: "dark:hover:bg-fighting",
      after: "checked:after:bg-fighting",
    },
    Fire: {
      ref: refFire,
      color: "checked:bg-fire",
      hover: "hover:bg-fire",
      hover_dark: "dark:hover:bg-fire",
      after: "checked:after:bg-fire",
    },
    Flying: {
      ref: refFlying,
      color: "checked:bg-flying",
      hover: "hover:bg-flying",
      hover_dark: "dark:hover:bg-flying",
      after: "checked:after:bg-flying",
    },
    Ghost: {
      ref: refGhost,
      color: "checked:bg-ghost",
      hover: "hover:bg-ghost",
      hover_dark: "dark:hover:bg-ghost",
      after: "checked:after:bg-ghost",
    },
    Grass: {
      ref: refGrass,
      color: "checked:bg-grass",
      hover: "hover:bg-grass",
      hover_dark: "dark:hover:bg-grass",
      after: "checked:after:bg-grass",
    },
    Ground: {
      ref: refGround,
      color: "checked:bg-ground",
      hover: "hover:bg-ground",
      hover_dark: "dark:hover:bg-ground",
      after: "checked:after:bg-ground",
    },
    Ice: {
      ref: refIce,
      color: "checked:bg-ice",
      hover: "hover:bg-ice",
      hover_dark: "dark:hover:bg-ice",
      after: "checked:after:bg-ice",
    },
    Normal: {
      ref: refNormal,
      color: "checked:bg-normal",
      hover: "hover:bg-normal",
      hover_dark: "dark:hover:bg-normal",
      after: "checked:after:bg-normal",
    },
    Poison: {
      ref: refPoison,
      color: "checked:bg-poison",
      hover: "hover:bg-poison",
      hover_dark: "dark:hover:bg-poison",
      after: "checked:after:bg-poison",
    },
    Psychic: {
      ref: refPsychic,
      color: "checked:bg-psyhic",
      hover: "hover:bg-psyhic",
      hover_dark: "dark:hover:bg-psyhic",
      after: "checked:after:bg-psyhic",
    },
    Rock: {
      ref: refRock,
      color: "checked:bg-rock",
      hover: "hover:bg-rock",
      hover_dark: "dark:hover:bg-rock",
      after: "checked:after:bg-rock",
    },
    Steel: {
      ref: refSteel,
      color: "checked:bg-steel",
      hover: "hover:bg-steel",
      hover_dark: "dark:hover:bg-steel",
      after: "checked:after:bg-steel",
    },
    Water: {
      ref: refWater,
      color: "checked:bg-water",
      hover: "hover:bg-water",
      hover_dark: "dark:hover:bg-water",
      after: "checked:after:bg-water",
    },
  };
  const refsArr = Object.keys(pokeTypes).map((type) => pokeTypes[type].ref);

  const handleFormChange = (e) => {
    const checkedPokeTypes = refsArr.filter(
      (checkboxRef) => checkboxRef.current.checked
    );
    console.log("form change");
    // console.log(checkedPokeTypes);
    setCheckedTypes((prev) => {
      const newItem = checkedPokeTypes.filter((item) => !prev.includes(item));
      // console.log("new: ", newItem);
      if (!newItem.length) return [...checkedPokeTypes];
      else if (prev.length === 2) {
        // console.log("last prev: ", prev[0]);
        prev[0].current.checked = false;
        return [prev[1], ...newItem];
      } else if (prev.length === 1) {
        return [...prev, ...newItem];
      } else return [...newItem];
    });
  };

  //functions for checking sccren size and open and close filters
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState({
    screen: window.innerWidth,
  });

  function handelOpen() {
    setOpen(!open);
  }

  let filter = open ? "filter" : null;

  function detectSize() {
    setScreen({
      screen: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    if (screen.screen < 1200) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [screen]);

  return (
    <div
      className={`${filter} mt-0 w-full h-[715px] bg-elementbBg border-2 border-elementbBg bg-opacity-50 rounded-xl my-auto shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w transition-all duration-300 ease-linear overflow-hidden ${
        screen.screen < 1200 ? "cursor-pointer" : null
      }`}
    >
      {screen.screen < 1200 ? (
        <h2 onClick={handelOpen} className="text-5xl p-6 font-pokefont">
          Filters
        </h2>
      ) : (
        <h2 className="text-5xl p-6 font-pokefont">Filters</h2>
      )}
      <form className="font-code text-sm">
        <div className="grid grid-cols-3  gap-y-4  justify-items-center">
          {Object.keys(pokeTypes).map((type, ind) => {
            return (
              <label
                onClick={handleFormChange}
                key={`${type}-${ind}`}
                htmlFor={type}
                className="relative grid h-8 w-32 mx-2 place-content-center selection:bg-transparent cursor-pointer shadow-lg opacity-90 active:shadow-none  active:translate-y-px transition-all duration-200 font-code"
              >
                <input
                  ref={pokeTypes[type].ref}
                  type="checkbox"
                  name="pokemons"
                  id={type}
                  value={type}
                  className={`appearance-none h-8 w-32 bg-pokemonBg dark:bg-elementbBg_w cursor-pointer opacity-80 hover:opacity-30 hover:checked:opacity-90 ${pokeTypes[type].color} ${pokeTypes[type].hover} ${pokeTypes[type].hover_dark} hover:after:blur-sm checked:after:blur-sm after:content-[''] after:inset-0 after:absolute ${pokeTypes[type].after} rounded-lg after:rounded-xl absolute -z-10 transition-all duration-200`}
                />
                {type}
              </label>
            );
          })}
        </div>

        <DualRange
          stat={"HP"}
          range={[1, 255]}
          setExtMin={setMinHP}
          setExtMax={setMaxHP}
        />
        <DualRange
          stat={"attack"}
          range={[5, 181]}
          setExtMin={setMinAttack}
          setExtMax={setMaxAttack}
        />
        <DualRange
          stat={"defense"}
          range={[5, 230]}
          setExtMin={setMinDefense}
          setExtMax={setMaxDefense}
        />
        <DualRange
          stat={"speed"}
          range={[5, 160]}
          setExtMin={setMinSpeed}
          setExtMax={setMaxSpeed}
        />
      </form>
    </div>
  );
}
