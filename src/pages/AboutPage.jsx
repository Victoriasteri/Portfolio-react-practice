import Header from "../components/Header";
import MySkills from "../components/MySkills";
import { useState } from "react";
import photo from "../assets/photo.jpg";
function AboutPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-[#222222] main min-h-[750px]">
      <Header />
      <div className="_container pt-10">
        <h1 className="text-[43px] krona-one-regular leading-relaxed lime text-center">
          About me
        </h1>

        <div className="flex items-start justify-between pt-10">
          <div className="text-[17px] max-w-[700px]">
            <p>
              I'm Maya Golden,
              <span className="lime"> a passionate Graphic Designer </span>with
              a love for all things colorful, imaginative, and daring. Ever
              since I was a child, I've been captivated by the magic of art and
              design. From doodling in my sketchbook to experimenting with
              paints and digital tools, creativity has always been my compass.
            </p>

            <p className="pt-5">
              After studying Graphic Design at the renowned Art Institute, I
              embarked on a journey to bring my wildest dreams to life. Each
              project I undertake is a chance to infuse my unique vision into
              the world. Whether it's{" "}
              <span className="lime">
                crafting sleek logos, designing captivating websites, or
                conceptualizing innovative branding campaigns,
              </span>{" "}
              I pour my heart and soul into every pixel.
            </p>

            <p className="pt-5">
              So, welcome to my world of design—a place where every project is
              an adventure, every pixel tells a story, and every creation is a
              masterpiece in the making. Join me on this journey.
            </p>
          </div>
          <div className="border border-[#f6ff8c] p-5 max-w-[490px]">
            <img src={photo} alt="My Photo" width={400} />
          </div>
        </div>
      </div>
      <div className="_container pt-20">
        <button
          className="block m-auto bg-[#f6ff8c] px-[100px] py-4 font-bold text-[25px] text-black
          hover:bg-[#fff04d] hover:scale-105 active:bg-[#e9dd5a]"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          See My Skills
        </button>
      </div>
      {openModal && <MySkills closeModal={setOpenModal} />}
    </div>
  );
}

export default AboutPage;
