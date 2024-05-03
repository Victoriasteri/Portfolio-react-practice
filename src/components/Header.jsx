import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header w-full h-[70px] bg-[#383737]">
      <nav className="header__nav nav">
        <div className="_container flex items-center justify-between pt-[13px]">
          <a href="/">
            <span
              className="nav__name block krona-one-regular hover:text-[#f6ff8c]
            hover:scale-105"
            >
              Maya Golden
            </span>
          </a>

          <ul className="nav__list flex justify-center items-center">
            <li className="nav__item pr-7 hover:text-[#f6ff8c] hover:scale-105">
              <Link to="/about">
                <a className="nav__link pb-2">About</a>
              </Link>
            </li>
            <li className="nav__item pr-7 hover:text-[#f6ff8c] hover:scale-105">
              <Link to="/services">
                <a href="services" className="nav__link pb-2">
                  Services
                </a>
              </Link>
            </li>
            <li className="nav__item hover:text-[#f6ff8c] hover:scale-105">
              <Link to="/works">
                <a href="works" className="nav__link pb-2">
                  Works
                </a>
              </Link>
            </li>
          </ul>

          <button
            className="nav__btn lato-regular px-5 py-2 border border-white 
          hover:border-[#f6ff8c] tracking-wider hover:scale-105"
          >
            mgolden@gmai.com
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Header;
