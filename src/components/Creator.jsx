import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import LogoSm from "./LogoSm";
import { NavLink, useParams } from "react-router-dom";

export default function () {
  const { creators } = useContext(DataContext);
  const { name } = useParams();
  // const pokemon = allPokemons?.find((pokemon) => pokemon.id === Number(id));
  const [creator] = creators.filter(
    ({ ["name"]: value }) => value && value.toLowerCase().includes(name)
  );

  console.log(creators);

  return (
    <div className="grid items-center justify-center w-full">
      <div className="flex justify-center mb-9 mt-9 poke_l:mt-0 ">
        <LogoSm />
      </div>
      <div className="flex justify-center flex-col poke_l:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex justify-center items-center font-pokefont dark:text-white text-5xl poke_l:w-[650px] h-[80px] p-4 rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
            <span>{creator.name}</span>
          </div>
          {/* date of birth */}
          <span className="flex justify-center items-center font-pokefont text-4xl poke_l:w-[650px] h-[80px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
            {creator.date}
          </span>
          {/* bio of creator */}
          <span className="flex justify-center items-center poke_l:w-[650px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
            {creator.bio}
          </span>
          {/* email of creator */}
          <span className="flex justify-center items-center font-pokefont text-4xl poke_l:w-[650px] h-[80px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
            {creator.email}
          </span>
          {/* hobbies of cretor */}
          <div className="flex justify-between flex-wrap gap-4">
            {creator.hobbies.map((hobbies) => (
              <span className="flex justify-center items-center w-[48%] dark:text-white h-[40px] rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
                {hobbies}
              </span>
            ))}
          </div>
        </div>
        {/* image of creator */}
        <div className="relative">
          <div className="w-[560px] h-[630px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow overflow-hidden z-10">
            <img
              src={creator.image}
              alt={`image of ${creator.name}`}
              className="w-full h-full object-cover absolute rounded-xl z-10"
            />
          </div>
          <div className="flex justify-between absolute w-[629px] origin-top-right rotate-90 right-[-60px] ">
            {/* links to other creators */}
            {creators.map((link) => (
              <NavLink
                to={`/creators/${link.name.split(" ").shift().toLowerCase()}`}
                className={`flex justify-center font-pokefont text-3xl pt-3 w-[32%] h-[110px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white bg-opacity-50 rounded-xl border-2 border-elementbBg overflow-hidden hover:bg-pokecreator hover:bg-opacity-50 hover:border-pokecreator hover:translate-y-[-10px] dark:hover:bg-pokecreator dark:hover:bg-opacity-50 dark:hover:border-pokecreator dark:hover:translate-y-[-10px] transition-all duration-300 ease-linear ${
                  link.name === creator.name ? `hidden` : null
                }`}
              >
                {link.name.split(" ").shift()}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
