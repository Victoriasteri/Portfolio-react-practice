import arrow from "../assets/arrow.svg";
function Intro() {
  return (
    <section>
      <div>
        <h1 className="text-[43px] krona-one-regular leading-relaxed lime">
          Maya Golden<br></br>Graphic Designer
        </h1>
        <p className="w-[420px] pt-[50px] max-xl:pt-[30px] md:pt-[15px]">
          With a seasoned eye for design, I like to transform ideas into elegant
          products that speak out their functionalities.
        </p>

        <div className="flex justify-start pt-[60px] h-[100px] max-xl:pt-[30px]">
          <div>
            <button
              className="py-3 px-8 bg-[#f6ff8c] uppercase text-black
          font-bold mr-4 hover:bg-[#e9dd5a]"
            >
              Chat with me
            </button>
          </div>

          <div>
            <button
              className="uppercase py-3 px-8 font-bold flex items-center intro__btn
            hover:border"
            >
              <img src={arrow} width="20" height="20" />
              <span className="pl-5">Start a project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
