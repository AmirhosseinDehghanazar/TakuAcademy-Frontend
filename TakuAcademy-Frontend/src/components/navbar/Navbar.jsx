import React, { useState } from "react";
import arrow from "../../assets/navbar/arrow-down.png";
import Logo from "../../assets/navbar/Logo-nav.png";
import face from "../../assets/navbar/face.png";
import searchIcon from "../../assets/navbar/search.png";
import hamburger from "../../assets/navbar/menu.png";
import "./navbar.css";

const Navbar = () => {
  // adding state for search icon: on click renders seachComponent
  const [search, setSearch] = useState(false);
  // state for sidebar menu for small breakpoints like phone
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="my-5">
      {/* parent */}
      <div className="flex justify-around gap-5 sm:gap-32 md:gap-60 lg:gap-16 transition-all items-center navbar">
        {/* firat part of nav includes: menue & logo */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center search-div sidebar_taggle lg:hidden">
            {/* button to open sidebar */}
            <button onClick={() => setSidebar(true)} type="button">
              <img
                width={18}
                src={hamburger}
                className=" pointer-events-none"
              />
            </button>
          </div>

          <div>
            <a href="/">
              <img width={88} className="lg:w-44" src={Logo} />
            </a>
          </div>
        </div>
        {/* firstpart ends here */}

        {/* this component have links and is hidden until screen is large */}
        <div className="hidden lg:flex gap-8 xl:gap-11 transition-all">
          <div>
            <a href="#">صفحه اصلی</a>
          </div>
          {/* this one needs dropdown(below) */}
          <div className="flex items-center gap-2 dropdown relative">
            <a href="#">دوره‌ها</a>
            <img className="arrow" src={arrow} />
            <div className="dropdown-menu absolute top-6 rounded-lg overflow-hidden">
              <a href="#">یک</a>
              <a href="#">دو</a>
              <a href="#">سه</a>
              <a href="#">چهار</a>
            </div>
          </div>
          <div>
            <a href="#">مدرسین</a>
          </div>
          <div>
            <a href="#">درباره‌ما</a>
          </div>
          <div>
            <a href="#">پشتیبانی</a>
          </div>
        </div>

        {/* last part in nav which contains search and regiter/login */}
        <div className="flex items-center justify-center gap-4">
          <div className=" button-div  flex items-center justify-center ">
            {/* button to show searchBar */}
            <button onClick={() => setSearch((prev) => !prev)}>
              <img
                width={18}
                src={searchIcon}
                className=" pointer-events-none"
              />
            </button>
          </div>

          <div className="bg-gradient flex items-center justify-center rounded-xl">
            <button
              type="button"
              className="flex justify-center items-center px-3 py-3 md:px-5 md:py-3 gap-2"
            >
              <img width={18} src={face} className=" pointer-events-none" />
              <p className="hidden md:block"> حساب کاربری</p>
            </button>
          </div>
        </div>
        {/* last part ends here */}
      </div>
    </div>
  );
};

export default Navbar;
