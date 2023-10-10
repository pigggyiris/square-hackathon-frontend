import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LineChart from "components/charts/LineChart";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Revenue = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Time Period");

  return (
    <Card extra="!p-[20px] text-left h-96">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Revenue
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

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            $37.5K
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Total growth</p>
            <div className="flex flex-row items-center justify-center">
              {/* Your growth icon and percentage here */}
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
};

export default Revenue;
