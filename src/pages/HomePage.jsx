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
      <Animation />
      <div className="_container">
        <div className="flex justify-between _container items-center">
          <div className="w-[550px]">
            <Intro />
            <Stats />
          </div>
          <div>
            <Services />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
