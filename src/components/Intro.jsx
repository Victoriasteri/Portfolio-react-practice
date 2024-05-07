import arrow from "../assets/arrow.svg";
function Intro() {
  return (
    <section>
      <div className="max-md:flex max-md:flex-col max-md:items-center">
        <h1
          className="text-[43px] krona-one-regular leading-relaxed lime
        max-md:text-center max-sm:text-[25px]"
        >
          Maya Golden<br></br>Graphic Designer
        </h1>
        <p
          className="w-[420px] pt-[50px] max-xl:pt-[30px] md:pt-[15px] 
        max-sm:pt-3 max-md:text-center max-sm:w-[300px]"
        >
          With a seasoned eye for design, I like to transform ideas into elegant
          products that speak out their functionalities.
        </p>

        <div
          className="flex justify-start pt-[60px] h-[100px] max-xl:pt-[30px]
        max-sm:flex-col max-sm:items-center"
        >
          <div>
            <button
              className="py-3 px-8 bg-[#f6ff8c] uppercase text-black
          font-bold mr-4 max-sm:mr-0 max-sm:mb-5 hover:bg-[#e9dd5a]"
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
