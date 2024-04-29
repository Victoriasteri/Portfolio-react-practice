import "./style/index.css";
import "./style/index.scss";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Stats from "./components/Stats.jsx";
import Animation from "./components/Animation.jsx";
import Services from "./components/Services.jsx";
function App() {
  return (
    <main className="bg-[#222222] h-lvh main">
      <Header />
      <Intro />
      <Stats />
      <Animation />
      <Services />
    </main>
  );
}

export default App;
