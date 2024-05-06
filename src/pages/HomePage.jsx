import "../style/index.css";
import "../style/index.scss";
import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import Stats from "../components/Stats.jsx";
import Animation from "../components/Animation.jsx";
import Services from "../components/Services.jsx";
function HomePage() {
  return (
    <main className="bg-[#222222] main min-h-lvh">
      <Header />
      <div className="flex flex-col items-center">
        <Animation />
        <div className="_container">
          <div
            className="flex justify-between _container items-center pt-[50px] max-md:flex-col max-md:items-start
        max-md:pt-[25px] max-lg:flex-col max-lg:items-start"
          >
            <div className="w-[550px] max-lg:w-[440]">
              <Intro />
              <Stats />
            </div>
            <div>
              <Services />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
