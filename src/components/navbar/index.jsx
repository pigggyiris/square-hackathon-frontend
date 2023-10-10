import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";

const Navbar = (props) => {
  const { brandText } = props;

  return (
    <nav className="sticky top-0 z-40 flex w-full flex-row flex-wrap items-center justify-between bg-fall-100 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-fall-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-fall-700 hover:text-fall-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-fall-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-fall-900 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-fall-900 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-fall-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
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
