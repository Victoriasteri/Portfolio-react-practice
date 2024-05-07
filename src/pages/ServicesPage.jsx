import UxAnimation from "../components/UxAnimation.jsx";
import Header from "../components/Header";
import BannerAnimation from "../components/BannerAnimation.jsx";
import LogoAnimation from "../components/LogoAnimation.jsx";
import SocialAnimation from "../components/SocialAnimation.jsx";

function ServicesPage() {
  return (
    <div className="bg-[#222222] min-h-lvh">
      <Header />

      <h1 className="text-center text-[43px] krona-one-regular leading-relaxed lime pt-10">
        My Services
      </h1>

      <div
        className="flex flex-col justify-center items-center _container pt-5
      sm:flex-row sm:flex-wrap sm:justify-between md:justify-evenly lg:justify-between pb-10"
      >
        <div className="flex flex-col items-center">
          <UxAnimation />
          <h3 className="font-bold text-[25px]">UX Design</h3>
        </div>

        <div className="flex flex-col items-center">
          <BannerAnimation />
          <h3 className="font-bold text-[25px]">Banner Design</h3>
        </div>

        <div className="flex flex-col items-center">
          <LogoAnimation />
          <h3 className="font-bold text-[25px]">Logo Design</h3>
        </div>

        <div className="flex flex-col items-center">
          <SocialAnimation />
          <h3 className="font-bold text-[25px]">Illustration</h3>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
