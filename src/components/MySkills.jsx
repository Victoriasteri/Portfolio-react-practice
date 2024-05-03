import closeBtn from "../assets/close-button-svgrepo-com.svg";
import { programs } from "../constants/index.js";

function MySkills({ closeModal }) {
  return (
    <div className="">
      <div
        className="w-screen h-screen absolute bg-[#222222] z-10 top-0 opacity-90"
        onClick={() => closeModal(false)}
      ></div>

      <div className="w-[500px] h-[500px] bg-white modal z-20 flex items-start justify-center">
        <div className="w-[450px]">
          <div className="flex justify-end pt-6">
            <button
              className="hover:scale-105"
              onClick={() => closeModal(false)}
            >
              <img src={closeBtn} width={20} />
            </button>
          </div>
          <h1 className="text-[#222222] font-bold text-[25px] leading-relaxed flex-grow text-center">
            My Skills
          </h1>

          <div className="flex justify-between flex-wrap w-[350px] m-auto pt-8">
            {programs.map((program) => (
              <div
                key={program.img}
                className="flex flex-col items-center pt-6"
              >
                <img src={program.img} width={90} />
                <span className="text-black">{program.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;