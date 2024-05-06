import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <section className="header w-full h-[70px] bg-[#383737]">
      <nav className="header__nav nav">
        <div className="absolute top-8 right-12 transform -translate-x-1/2 -translate-y-1/2 md:hidden">
          <AiOutlineMenu
            className={`w-[25px] h-[25px] cursor-pointer flex
            ${isOpen ? "hidden" : "flex"}`}
            onClick={toggleMenu}
          />
          <IoClose
            className={`w-[25px] h-[25px] cursor-pointer
          ${isOpen ? "flex" : "hidden"}`}
            onClick={toggleMenu}
          />
        </div>

        <div
          className="_container flex items-center justify-between pt-[13px]
        max-md:flex-col max-md:pt-[20px]"
        >
          <a href="/">
            <span
              className="nav__name block krona-one-regular hover:text-[#f6ff8c]
            hover:scale-105 transition ease-in-out max-md:text-[20px]"
            >
              Maya Golden
            </span>
          </a>

          <ul
            className={`nav__list flex justify-center items-center 
          max-md:flex-col max-md:justify-center max-md:pt-5
           max-md:bg-[#383737] max-md:w-lvw max-md:z-20 
          ${isOpen ? "max-md:flex" : "max-md:hidden"}`}
          >
            <li
              className="nav__item pr-7 hover:text-[#f6ff8c] hover:scale-105
            transition ease-in-out max-md:pr-0"
            >
              <Link to="/about ">About</Link>
            </li>
            <li
              className="nav__item pr-7 hover:text-[#f6ff8c] hover:scale-105
            transition ease-in-out max-md:pr-0 max-md:pt-8"
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className="nav__item hover:text-[#f6ff8c] hover:scale-105
            transition ease-in-out max-md:pt-8 max-md:pb-8"
            >
              <Link to="/works">Works</Link>
            </li>
          </ul>
          <div
            className={`max-md:bg-[#383737] max-md:w-lvw md:flex items-center justify-center
          max-md:pb-10 max-md:z-20
          ${isOpen ? "flex" : "hidden"}`}
          >
            <button
              className="nav__btn lato-regular px-5 py-2 border border-white 
          hover:border-[#f6ff8c] tracking-wider hover:scale-105 transition ease-in-out"
            >
              mgolden@gmai.com
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
