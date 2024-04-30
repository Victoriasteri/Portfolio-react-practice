function Header() {
  return (
    <section className="header w-full h-[70px] bg-[#383737]">
      <nav className="header__nav nav">
        <div className="_container flex items-center justify-between pt-[13px]">
          <span className="nav__name block krona-one-regular">Maya Golden</span>

          <ul className="nav__list flex justify-center items-center">
            <li className="nav__item pr-7 hover:text-[#f6ff8c] hover:text-[18px]">
              <a href="#" className="nav__link pb-2">
                About
              </a>
            </li>
            <li className="nav__item pr-7 hover:text-[#f6ff8c] hover:text-[18px]">
              <a href="#" className="nav__link pb-2">
                Services
              </a>
            </li>
            <li className="nav__item hover:text-[#f6ff8c] hover:text-[18px]">
              <a href="#" className="nav__link pb-2">
                Works
              </a>
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
