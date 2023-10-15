import React from "react";
import { useState, useEffect } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md"; // 导入箭头图标

import LineChart from "components/charts/LineChart";
import Card from "components/card";
import {
  lineChartDataTotalSpentStrategy,
  lineChartOptionsTotalSpentStrategy,
} from "variables/charts";
import axios from "axios";

import { BASE_URL } from "../../../../config";
import Loading from "./Loading";

export const PricingStrategyTable = () => {
  const [lineChartData, setLineChartData] = useState(
    lineChartDataTotalSpentStrategy
  );
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/v1/salesInfo/pricing_strategy`).then((response) => {
      const { marketPrice, percentage: fetchedPercentage } = response.data;

      const updatedData = [...lineChartData];
      updatedData[1].data[5] = marketPrice;

      setLineChartData(updatedData);
      setPercentage(fetchedPercentage);
      setLoading(false);
    });
  }, []);

  return (
    <Card extra="!p-[20px] text-left h-96">
      <div className="mb-4 flex-col justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Pricing Strategy
        </h4>
      </div>
      <div className="flex-col items-center gap-4 text-softgreen-600">
        <span>Market Price: $</span>
        <span className="font-medium">{lineChartData[1]?.data[5]}</span>
        <div className="flex flex-row items-center gap-2">
          {percentage < 0 ? (
            <MdArrowDropDown className="text-softgreen-500" />
          ) : (
            <MdArrowDropUp className="text-bone-600" />
          )}
          <span
            className={`font-medium ${
              percentage < 0 ? "text-softgreen-500" : "text-bone-600"
            }`}
          >
            {percentage}%
          </span>
        </div>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          {loading ? (
            <Loading />
          ) : (
            <LineChart
              options={lineChartOptionsTotalSpentStrategy}
              series={lineChartData}
            />
          )}
        </div>
      </div>
    </Card>
  );
};
