import React, { useState, Fragment, useEffect } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LineChart from "components/charts/LineChart";
import Card from "components/card";
import { lineChartOptionsTotalSpent } from "variables/charts";

import axios from "axios";
import { BASE_URL } from "../../../../config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Revenue = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Daily");
  const [dailyQuantity, setDailyQuantity] = useState([]);
  const [hourlyQuantity, setHourlyQuantity] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/v1/salesInfo/sales_report_monthly/10`)
      .then((response) => {
        const dailyQuantities = response.data.salesReportbyDay.map(
          (dayData) => dayData.totalQuantity
        );
        const todayData = response.data.salesReportbyDay[6];
        const hourlyQuantities = todayData
          ? todayData.salesReportbyHour.map(
              (hourData) => hourData.totalQuantity
            )
          : [];

        setDailyQuantity(dailyQuantities);
        setHourlyQuantity(hourlyQuantities);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const displayedQuantity = dailyQuantity.slice(0, 15);
  const dataForChart =
    selectedTimePeriod === "Daily" ? hourlyQuantity : displayedQuantity;

  return (
    <Card extra="!p-[20px] text-left h-96">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Sales Trend Chart
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-fall-800 ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {["Daily", "Monthly"].map((timePeriod) => (
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
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          {dataForChart.length > 0 && (
            <LineChart
              options={lineChartOptionsTotalSpent(selectedTimePeriod)}
              series={[
                {
                  name: "Quantity",
                  data: dataForChart,
                  color: "#446076",
                },
              ]}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default Revenue;
