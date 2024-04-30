import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";

function Services() {
  return (
    <section className="flex max-lg:justify-center">
      <div className="flex flex-col max-lg:flex-row max-lg:items-baseline max-lg:justify-between">
        <div className="flex items-start">
          <img src={Icon1} />
          <div className="pl-[20px] max-lg:pl-[10px]">
            <h3 className="lime font-bold tracking-wider">PROTOTYPING</h3>
            <p className="w-[257px] text-sm max-lg:text-xs max-lg:w-[180px]">
              I offer you prototyping services that could bring your product
              concepts to life.
            </p>
          </div>
        </div>

        <div className="flex items-start pt-10 max-lg:pl-[25px]">
          <img src={Icon2} />
          <div className="pl-[20px] max-lg:pl-[10px]">
            <h3 className="lime font-bold tracking-wider">INDUSTRIAL DESIGN</h3>
            <p className="w-[257px] text-sm max-lg:text-xs max-lg:w-[180px]">
              I develop the physical appearance and functionality of products,
              from electronics to furniture.
            </p>
          </div>
        </div>

        <div className="flex items-start pt-10 max-lg:pl-[25px]">
          <img src={Icon3} />
          <div className="pl-[20px] max-lg:pl-[10px]">
            <h3 className="lime font-bold tracking-wider">DESIGN CONSULTING</h3>
            <p className="w-[257px] text-sm max-lg:text-xs max-lg:w-[180px]">
              I provide an expert guidance on design strategy, market trends,
              and product positioning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
