import Lottie from "lottie-react";
import AnimationData from "../assets/data.json";

function Animation() {
  return (
    <div className="_container flex justify-center max-lg:justify-end">
      <div
        className="w-[350px] h-[350px] absolute top-[150px] max-md:top-[110px]
      md:max-md:w-[100px] lg:max-md:h-[100px]"
      >
        <Lottie animationData={AnimationData} />
      </div>
    </div>
  );
}

export default Animation;
