"use client";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const MyChart = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const series = {
      monthDataSeries1: {
        prices: [300, 200, 200, 400, 300, 600, 400, 800],
      },
    };

    const options = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices,
          // Set stroke options including shadow with a light blue color
          stroke: {
            width: 2, // Set the width of the line
            curve: "smooth", // Use smooth curves
            shadow: {
              enabled: true, // Enable shadows
              blur: 7, // Set the blur radius for shadows
              opacity: 0.5, // Set the opacity of shadows
              colors: ["#aaffff"], // Light blue shadow color
            },
          },
        },
      ],
      chart: {
        type: "area",
        height: 200,
        toolbar: {
          show: false, // Hide chart toolbar
        },
      },
      dataLabels: {
        enabled: false, // Hide data labels
      },
      legend: {
        show: false, // Hide legend
      },
      xaxis: {
        type: "category", // Set x-axis type to category
        labels: {
          show: false, // Hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Hide y-axis labels
        },
      },
      grid: {
        show: false, // Hide grid lines
      },
    };

    setChartOptions(options);
  }, []);

  return (
    <div className="">
      <Chart
        options={chartOptions}
        series={chartOptions.series || []}
        type="area"
        // height={200}
        width={300}
      />
    </div>
  );
};

export default MyChart;
