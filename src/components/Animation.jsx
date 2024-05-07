import Lottie from "lottie-react";
import AnimationData from "../assets/data.json";

function Animation() {
  return (
    <div className="_container flex justify-center max-lg:justify-end">
      <div
        className="xl:w-[300px] absolute sm:top-[410px] sm:w-[200px] sm:left-[36%]
      md:w-[280px] md:left-[62%] md:top-[220px] lg:left-[43%] lg:top-[150px]
      max-sm:top-[420px] max-sm:w-[150px] max-sm:left-[30%]"
      >
        <Lottie animationData={AnimationData} />
      </div>
    </div>
  );
}

export default Animation;
