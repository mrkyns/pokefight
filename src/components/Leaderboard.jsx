import LogoSm from "./LogoSm";

export default function () {
  return (
    <div>
      <div className="flex justify-center mb-9">
        <LogoSm />
      </div>
      <div className="flex justify-between font-pokefont text-5xl w-[1080px] h-[80px] p-4 rounded-xl bg-pokeleader border-2 border-pokeleader bg-opacity-50 shadow-shadow dark:shadow-shadow_w dark:text-white my-8">
        <span>Leaderboard</span>
        <img
          src="./images/leaderboard.png"
          alt="icon for pokedex"
          className="w-[48px]"
        />
      </div>
      <div className="flex flex-col gap-4">
        {/* card start */}
        <div className="gold flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#001</span>
            <span className="text-2xl">Reagan</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="silver flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#002</span>
            <span className="text-2xl">Lilian</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="bronze flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#003</span>
            <span className="text-2xl">Ali</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#004</span>
            <span className="text-2xl">Rana</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#005</span>
            <span className="text-2xl">Stephan</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#006</span>
            <span className="text-2xl">Miroslav</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#007</span>
            <span className="text-2xl">Yosra</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#008</span>
            <span className="text-2xl">Stefan</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#009</span>
            <span className="text-2xl">Daniel</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between items-center w-[1080px] h-[80px] px-4 rounded-xl bg-elementbBg border-2 border-elementbBg bg-opacity-50 shadow-shadow dark:bg-bgColor dark:bg-opacity-50 dark:border-white dark:shadow-shadow_w">
          <div className="flex gap-4">
            <span className="font-pokefont text-2xl">#0010</span>
            <span className="text-2xl">P. T.</span>
          </div>
          <div className="flex gap-4">
            {/* win numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">wins</h3>
              <span className="font-pokefont text-2xl">53</span>
            </div>
            {/* loses numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">loses</h3>
              <span className="font-pokefont text-2xl">22</span>
            </div>
            {/* fights numbers */}
            <div className="flex flex-col items-center">
              <h3 className="opacity-50">fights</h3>
              <span className="font-pokefont text-2xl">75</span>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
}
