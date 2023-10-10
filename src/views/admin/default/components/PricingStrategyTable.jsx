import React, { useState, Fragment } from "react";
import SearchBar from "./SearchBar";
import LineChart from "components/charts/LineChart";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

export const PricingStrategyTable = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // Implement the real search logic in the future, need API
    console.log("Searching for:", searchValue);
  };

  return (
    <Card extra="!p-[20px] text-left h-96">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Pricing Strategy
        </h4>
      </div>
      <SearchBar
        value={searchValue}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />

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
