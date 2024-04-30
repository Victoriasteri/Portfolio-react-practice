import Lottie from "lottie-react";
import AnimationData from "../assets/data.json";

function Animation() {
  return (
    <div className="_container flex justify-center">
      <div
        className="w-[350px] h-[350px] absolute top-[150px] max-xl:h-[270px] max-xl:w-[270px]
      max-xl:pl-[40px]"
      >
        <Lottie animationData={AnimationData} />
      </div>
    </div>
  );
}

export default Animation;
