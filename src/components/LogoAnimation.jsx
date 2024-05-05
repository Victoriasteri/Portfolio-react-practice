import Lottie from "lottie-react";
import logoAnimation from "../assets/logo.json";
function LogoAnimation() {
  return (
    <div className="w-[200px]">
      <Lottie animationData={logoAnimation} />
    </div>
  );
}

export default LogoAnimation;
