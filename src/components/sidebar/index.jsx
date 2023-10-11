import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import Links from "./components/Links";
import logoImage from "assets/img/layout/logoImage.png";
import routes from "routes.js";

const Sidebar = ({ open, onClose, collapsed, setCollapsed }) => {
  
  const sidebarWidth = collapsed ? "6rem" : "14rem";
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{ width: sidebarWidth }}
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-fall-100 pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <button onClick={toggleCollapse} className="absolute top-2 right-0.5">
        {collapsed ? (
          <ChevronRightIcon className="h-5 w-5 text-gray-700" />
        ) : (
          <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
        )}
      </button>

      <div className={`mx-[20px] mt-[5px] flex flex-col items-center`}>
        <img src={logoImage} alt="Small Logo" className="mb-1 w-14" />

        <div className="h-2 min-w-[min-content] whitespace-nowrap font-poppins text-[16px] font-bold uppercase text-fall-900 dark:text-white">
          Bean <span className="font-medium text-softgreen-900">Box</span>
        </div>
      </div>

      <div className="mt-[25px] mb-7 h-px bg-fall-100 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} collapsed={collapsed} />{" "}
      </ul>
    </div>
  );
};

export default Sidebar;
