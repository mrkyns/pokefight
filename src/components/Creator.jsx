import LogoSm from "./LogoSm";

export default function () {
  return (
    <div className="grid items-center justify-center w-full">
      <div className="flex justify-center mb-9 mt-9 poke_l:mt-0 ">
        <LogoSm />
      </div>
      <div className="flex justify-center flex-col poke_l:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex justify-center items-center font-pokefont dark:text-white text-5xl poke_l:w-[650px] h-[80px] p-4 rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
            <span>Miroslav Ljubicic</span>
          </div>
          {/* date of birth */}
          <span className="flex justify-center items-center font-pokefont dark:text-white text-4xl poke_l:w-[650px] h-[80px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
            25 oct 1981
          </span>
          {/* bio of creator */}
          <span className="flex justify-center items-center dark:text-white poke_l:w-[650px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
            after completing studies for management in information systems, he
            started working in a printing house as a graphic designer, where he
            also completed certification for graphic design. After several years
            of experience, he studied web design and in the following years
            exclusively deals with HTML, CSS and JavaScript improvement. After
            several years of experience in this field, decides for Full Stack
            boot camp within the WBS codding school. Where he is working on this
            as one of the group projects.
          </span>
          {/* email of creator */}
          <span className="flex justify-center items-center font-pokefont dark:text-white text-4xl poke_l:w-[650px] h-[80px] p-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
            mrky@pokefight.com
          </span>
          {/* hobbies of cretor */}
          <div className="flex justify-between flex-wrap gap-4">
            <span className="flex justify-center items-center w-[49%] dark:text-white h-[40px] rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
              computer moding
            </span>
            <span className="flex justify-center items-center w-[48%] dark:text-white h-[40px] rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
              gaming
            </span>
            <span className="flex justify-center items-center w-[48%] dark:text-white h-[40px] rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
              cars
            </span>
            <span className="flex justify-center items-center w-[48%] dark:text-white h-[40px] rounded-xl bg-pokecreator border-2 border-pokecreator bg-opacity-50 shadow-shadow dark:shadow-shadow_w">
              design
            </span>
          </div>
        </div>
        {/* image of creator */}
        <div className="w-[560px] max-h-[630px] bg-elementbBg dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w bg-opacity-50 rounded-xl border-2 border-elementbBg shadow-shadow"></div>
      </div>
    </div>
  );
}
