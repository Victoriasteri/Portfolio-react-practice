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
      <div className="_container">
        <Animation />

        <div
          className="flex justify-between _container items-center pt-[50px] max-md:flex-col max-md:items-start
        max-md:pt-[25px] max-lg:flex-col max-lg:items-start"
        >
          <div className="max-w-[550px] max-lg:max-w-[440] lg:m-0 max-md:m-auto max-sm:m-auto max-sm:max-w-[300px]">
            <Intro />
            <Stats />
          </div>
          <div className="flex justify-center items-center pb-10 max-md:w-[230px] max-md:m-auto">
            <Services />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
