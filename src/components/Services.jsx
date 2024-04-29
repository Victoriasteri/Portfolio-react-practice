import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";

function Services() {
  return (
    <section className="_container flex justify-end flex-1 relative bottom-[45%]">
      <div className="flex flex-col">
        <div className="flex items-start">
          <img src={Icon1} />
          <div className="pl-[20px]">
            <h3 className="lime font-bold tracking-wider">PROTOTYPING</h3>
            <p className="w-[257px] text-sm">
              I offer you prototyping services that could bring your product
              concepts to life.
            </p>
          </div>
        </div>

        <div className="flex items-start pt-10">
          <img src={Icon2} />
          <div className="pl-[20px]">
            <h3 className="lime font-bold tracking-wider">INDUSTRIAL DESIGN</h3>
            <p className="w-[257px] text-sm">
              I develop the physical appearance and functionality of products,
              from electronics to furniture.
            </p>
          </div>
        </div>

        <div className="flex items-start pt-10">
          <img src={Icon3} />
          <div className="pl-[20px]">
            <h3 className="lime font-bold tracking-wider">DESIGN CONSULTING</h3>
            <p className="w-[257px] text-sm">
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
