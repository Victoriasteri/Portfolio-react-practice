import Lottie from "lottie-react";
import bannerAnimation from "../assets/banner.json";

function BannerAnimation() {
  return (
    <div className="w-[200px]">
      <Lottie animationData={bannerAnimation} />
    </div>
  );
}

export default BannerAnimation;
