import Lottie from "lottie-react";
import socialAnimation from "../assets/social.json";
function SocialAnimation() {
  return (
    <div className="w-[200px]">
      <Lottie animationData={socialAnimation} />
    </div>
  );
}

export default SocialAnimation;
