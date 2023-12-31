import React, { useEffect, useState } from "react";
import arrow from "../../assets/navbar/arrow-down.svg";
import Logo from "../../assets/navbar/Logo-nav.svg";
import face from "../../assets/navbar/face.svg";
import searchIcon from "../../assets/navbar/search.svg";
import hamburger from "../../assets/navbar/menu.svg";
import "./navbar.css";
import Sidebar from "./sidebar/Sidebar";
import Hamburger from "hamburger-react";

const Navbar = () => {
  // adding state for search icon: on click renders searchComponent
  const [searchOpen, setSearchOpen] = useState(false);
  // state for sidebar menu for small breakpoints like phone
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <div className="lg:hidden">
        <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} />
      </div>

      <div className="fade-in lg:mt-8">
        {/* parent */}
        <div className="flex py-3 mb-3 navbar md:relative w-full justify-around gap-5 sm:gap-32 md:gap-60 lg:gap-16 xl:gap-36 transition-all items-center">
          {/* firat part of nav includes: menu & logo */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center search-div sidebar_taggle lg:hidden">
              {/* button to open sidebar */}
              <button
                className="sidebar-btn"
                onClick={() => setSidebar((prev) => !prev)}
                type="button"
              >
                <div className="bg-hamburger"></div>
              </button>
            </div>

            <div>
              <a href="/">
                <img width={88} className="lg:w-44 lg:mr-20" src={Logo} />
              </a>
            </div>
          </div>
          {/* first part ends here */}
          {/* this component have links and is hidden until screen is large */}
          <div className="hidden lg:flex gap-8 xl:gap-11 2xl:gap-14 transition-all">
            <div>
              <a className="link-hover" href="#">
                صفحه اصلی
              </a>
            </div>
            {/* this one needs dropdown(below) */}
            <div className="flex items-center gap-2  dropdown relative">
              <a className="transition-all hover:text-cyan-600" href="#">
                دوره‌ها
              </a>
              <img className="arrow  mt-1" src={arrow} />
              <div className="dropdown-menu absolute top-6 rounded-lg overflow-hidden">
                <a href="#">یک</a>
                <a href="#">دو</a>
                <a href="#">سه</a>
                <a href="#">چهار</a>
              </div>
            </div>
            <div>
              <a className="link-hover" href="#">
                مدرسین
              </a>
            </div>
            <div>
              <a className="link-hover" href="#">
                درباره‌ما
              </a>
            </div>
            <div>
              <a className="link-hover" href="#">
                پشتیبانی
              </a>
            </div>
          </div>

          {/* last part in nav which contains search and register/login */}
          <div className="flex items-center justify-center gap-4">
            <div className=" button-div  flex items-center justify-center ">
              {/* button to show search bar */}
              {searchOpen && (
                <div className="absolute p-4 rounded-lg ml-14 fade-in ">
                  <input
                    type="text"
                    placeholder="جست و جو..."
                    className="searchBar absolute w-22 h-10 lg:w-52 lg:ml-10 lg:top-0 left-0 px-2 py-1 rounded-md top-0"
                  />
                  {/* Additional search UI elements */}
                </div>
              )}
              <button onClick={() => setSearchOpen((prev) => !prev)}>
                <img
                  width={18}
                  src={searchIcon}
                  className=" pointer-events-none fade-in"
                  alt="Search Icon"
                />
              </button>
            </div>

            <div className="bg-gradient flex items-center justify-center rounded-xl">
              <button
                type="button"
                className="flex justify-center items-center px-3 py-3 md:px-5 md:py-3 gap-2"
              >
                <img
                  width={18}
                  src={face}
                  className=" pointer-events-none"
                  alt="Face Icon"
                />
                <p className="hidden md:block"> حساب کاربری</p>
              </button>
            </div>
          </div>
          {/* last part ends here */}
        </div>
        {/* Search component */}
      </div>
    </>
  );
};

export default Navbar;
