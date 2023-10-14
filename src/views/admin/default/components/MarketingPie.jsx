import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "components/card";
import axios from "axios";
import { BASE_URL } from "config";
import Loading from "./Loading";

const MarketingPie = () => {
  const [pieData, setPieData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

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
        setLoading(false); // Set loading to false when data is received
      } catch (error) {
        console.error("Error fetching marketing percentage data:", error);
        setLoading(false); // Set loading to false on error
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("pie chart Data:", pieData);
  }, [pieData]);

  const labels = pieData.map((item) => item.marketingMethod);
  console.log("labels", labels);

  const data = pieData.map((item) => parseFloat(item.percentage));
  console.log("data", data);

  const chartData = {
    series: data,
    labels: labels,
  };

  const colors = [
    "#6a90a6",
    "#c69271",
    "#b4c556",
    "#dbd3ad",
    "#fcd34d",
    "#927964",
  ];

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

  return (
    <Card extra="rounded-[20px] p-3 h-[350px]">
      <h4 className="text-lg font-bold text-navy-700 dark:text-white">
        Best Marketing Ratio
      </h4>

      {loading ? (
        <div className="mt-20">
          <Loading />{" "}
        </div>
      ) : (
        <div className="mb-auto mt-3 flex h-[220px] w-full items-center justify-center">
          <ReactApexChart
            options={chartOptions}
            series={chartData.series}
            type="pie"
          />
        </div>
      )}
    </Card>
  );
};

export default MarketingPie;
