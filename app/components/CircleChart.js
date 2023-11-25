import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CircleChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 250,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  });

  return (
    <div id="chart">
      {chartOptions ? (
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type={chartOptions.chart?.type || "donut"} // Use default if 'type' is undefined
          width={chartOptions.chart?.width || 200} // Use default if 'width' is undefined
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CircleChart;
