import React from "react";
import LineChart from "components/charts/LineChart";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

export const PricingStrategyTable = () => {
  

  return (
    <Card extra="!p-[20px] text-left h-96">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Pricing Strategy
        </h4>
      </div>
      

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
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
