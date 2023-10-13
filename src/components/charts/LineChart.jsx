import Chart from "react-apexcharts";
import React, { useState, Fragment, useEffect } from "react";

const LineChart = (props) => {
  const { series, options } = props;
  useEffect(() => {
    console.log("Component rendered");
    console.log(series);
    console.log(options);
  }, [series]);

  return (
    <Chart
      options={options}
      type="line"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default LineChart;
