import Lottie from "lottie-react";
import uxAnimation from "../assets/ux.json";

function UxAnimation() {
  return (
    <div className="w-[200px]">
      <Lottie animationData={uxAnimation} />
    </div>
  );
}

export default UxAnimation;
