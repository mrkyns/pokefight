export default function () {
  return (
    <div className="max-w-[1080px] font-pokefont relative mb-12 mx-12">
      <div className="text-9xl block z-10">sorry</div>
      <div className="w-[200px] text-3xl leading-7">
        there is no pokemon you searced for
      </div>
      <div>
        <img
          src="../images/openball.png"
          alt="pokemon image"
          className="absolute w-[180px] top-[80px] right-4"
        />
      </div>
    </div>
  );
}
