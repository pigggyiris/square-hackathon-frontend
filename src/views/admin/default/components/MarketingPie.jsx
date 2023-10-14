import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

import axios from "axios";
import { BASE_URL } from "config";

const MarketingPie = () => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketingResponse = await axios.get(
          `${BASE_URL}/v1/salesInfo/marketing_percentage_suggestion`
        );

        // Wrap the response data in square brackets if it's not an array
        let jsonData = marketingResponse.data;
        if (!Array.isArray(jsonData)) {
          jsonData = `[${jsonData}]`;
        }

        // Parse the response into a JSON object
        const parsedData = JSON.parse(jsonData);
        console.log("parsedData:", parsedData);

        setPieData(parsedData);
      } catch (error) {
        console.error("Error fetching marketing percentage data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("pie chart Data:", pieData);
  }, [pieData]);

  const labels = pieData.map((item) => item.marketingMethod);
  console.log("labels", labels);

  const data = pieData.map((item) => item.percentage);
  console.log("data", data);
  const parsedPercentageData = data.map((data) => {
    return parseFloat(data);
  });
  console.log("parsed percentage data:", parsedPercentageData);

  const chartData = {
    series: parsedPercentageData,
    labels: labels,
  };

  const colors = ["#6a90a6", "#c69271", "#b4c556", "#dbd3ad", "#fcd34d","#927964"];

  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: labels,
    colors: colors,
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
    legend: {
      show: false, 
    },
  };

  console.log("Series:", chartData.series);

  // Create a copy of pieChartOptions and set the labels
  const updatedPieChartOptions = { ...pieChartOptions };
  updatedPieChartOptions.labels = labels;

  return (
    <Card extra="rounded-[20px] p-3 h-[350px]">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Best Marketing Ratio
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Daily</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <ReactApexChart
          options={chartOptions}
          series={chartData.series}
          type="pie"
        />
      </div>
    </Card>
  );
};

export default MarketingPie;
