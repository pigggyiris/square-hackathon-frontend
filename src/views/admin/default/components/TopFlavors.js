import React, { useState, Fragment } from "react";
import Card from "components/card";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import flavorDefault from "assets/img/dashboards/flavorDefault.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopFlavors = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Time Period");
  const renderRating = (totalStars, activeStars) => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < activeStars) {
        stars.push(<AiFillStar className="text-fall-600" />);
      } else {
        stars.push(<AiOutlineStar className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-left h-96">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Top 5 Flavor
        </h2>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {selectedTimePeriod}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition as={Fragment}>
            <Menu.Items className="ring-black absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {["Daily", "Monthly", "Quarterly", "Yearly"].map(
                  (timePeriod) => (
                    <Menu.Item key={timePeriod}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setSelectedTimePeriod(timePeriod)}
                        >
                          {timePeriod}
                        </a>
                      )}
                    </Menu.Item>
                  )
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="mt-5 space-y-3 px-6">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={flavorDefault}
              alt="Flavor"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-center">
              {" "}
              <span className="font-medium text-navy-700 dark:text-white">
                Mocha
              </span>
              <div className="mt-1 flex"> {renderRating(5, 4)}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopFlavors;
