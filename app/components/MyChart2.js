import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const MyChart2 = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const seriesData = [21, 22, 10, 28, 16, 21, 13, 30, 18, 16, 25, 21];
      const categoryData = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const options = {
        series: [{ data: seriesData }],
        chart: {
          height: 100,
          type: "bar",
          toolbar: {
            show: false,
          },
          events: {
            click: function (chart, w, e) {
              // Handle chart click event if needed
            },
          },
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          "#26a69a",
          "#D10CE8",
        ],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false, // Hide grid lines
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: categoryData,
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      };

      setChartOptions(options);
    };

    fetchData();
  }, []);

  return (
    <div id="chart">
      {chartOptions?.series && chartOptions?.chart?.type ? (
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type={chartOptions.chart.type}
          width={chartOptions.chart.width}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyChart2;
