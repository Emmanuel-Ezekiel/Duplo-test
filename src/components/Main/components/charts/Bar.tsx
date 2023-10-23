import React from "react";
import Chart from "react-apexcharts";

const App: React.FC = () => {
  const options = {
    chart: {
      id: "basic-bar",
      stacked: true,
      toolbar: {
        show: false, // Set show to false to hide the download menu
      },
    },
    xaxis: {
      categories: [
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#2196f3", "#ffa600", "#ff5630"],
    plotOptions: {
      bar: {
        columnWidth: "20%",
        borderRadius: 8,
        barHeight: "30%",
        // Adjust the barWidth to set the width of each bar // Adjust the columnWidth to reduce the width of each bar
      },
    },
    dataLabels: {
      enabled: false, // Disable the data labels on each bar
    },
    legend: {
      show: false, // Set show to false to hide the legend
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 83, 82, 84, 49],
    },
    {
      name: "series-2",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 73, 94, 20, 93],
    },
    {
      name: "series-2",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 73, 28, 93, 46],
    },
  ];

  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="200%"
      />
    </div>
  );
};

export default App;
