import Header from "../components/Header";
import { works } from "../constants/index.js";

function WorksPage() {
  return (
    <div>
      <Header />
      <div className="bg-[#222222] min-h-[850px]">
        <div className="_container">
          <h1 className="text-center text-[43px] krona-one-regular leading-relaxed lime pt-10">
            My Works
          </h1>

          <div className="flex flex-col justify-center items-center pb-10 md:flex-row md:flex-wrap md:justify-evenly">
            {works.map((work) => (
              <img
                key={work.img}
                src={work.img}
                width={300}
                className="transition ease-in-out pt-10 hover:scale-105 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
