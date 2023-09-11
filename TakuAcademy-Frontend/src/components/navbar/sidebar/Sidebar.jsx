import React, { useEffect, useState } from "react";
import arrow from "../../../assets/navbar/arrow-down.svg";
import "./sidebar.css";
import close from "../../../assets/navbar/close.svg";
const Sidebar = ({ sidebar, closeSidebar }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    // sidebar parent checks for sidebar state
    <div
      id="sidebar"
      className={
        sidebar
          ? "primary-navigation sidebar-open"
          : "primary-navigation sidebar-close"
      }
    >
      <button onClick={closeSidebar}>
        <img src={close} alt="" />
      </button>
      <div>
        <a className="link-hover" href="#">
          صفحه اصلی
        </a>
      </div>

      {/* this one needs dropdown(below) */}
      <div className="flex items-center gap-2  dropsown-sidebar relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowLinks((prev) => !prev)}
        >
          <a className="transition-all hover:text-cyan-600" href="#">
            دوره‌ها
          </a>
          <img
            className={showLinks ? "arrow mt-1 rotate-180" : "arrow mt-1 "}
            src={arrow}
          />
        </button>
      </div>
      {/* this dropdown link similar to the
       navbar but this on is onClick that one onHover*/}
      {showLinks && (
        <div className={"dropdown-menu-sidebar "}>
          <a href="#">یک</a>
          <a href="#">دو</a>
          <a href="#">سه</a>
          <a href="#">چهار</a>
        </div>
      )}

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
  );
};

export default Sidebar;
