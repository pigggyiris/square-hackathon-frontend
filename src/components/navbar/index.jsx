import React from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { RiMoonFill } from "react-icons/ri";
import avatar from "assets/img/avatars/avatar4.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 flex w-full flex-row flex-wrap items-center justify-between bg-fall-150 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div></div>
      <div className="relative mt-[3px] flex h-[61px] flex-grow items-center justify-between gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-fall-800 dark:shadow-none md:flex-grow-0 md:gap-1 xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-fall-50 bg-opacity-75 text-fall-700 dark:bg-fall-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-fiord-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-fall-50 bg-opacity-75 text-sm font-medium text-fall-700 outline-none placeholder:!text-fiord-400 dark:bg-fall-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span className="flex text-xl text-fiord-600 dark:text-white xl:hidden">
          <FiAlignJustify className="h-5 w-5" />
        </span>

        {/* Icons without functionality */}
        <IoMdNotificationsOutline className="h-4 w-4 text-fall-800 dark:text-white" />
        <IoMdInformationCircleOutline className="h-4 w-4 text-fall-800 dark:text-white" />
        <RiMoonFill className="h-4 w-4 text-fall-800 dark:text-white" />
        <img className="h-10 w-10 rounded-full" src={avatar} alt="Elon Musk" />
      </div>
    </nav>
  );
};

export default Navbar;
