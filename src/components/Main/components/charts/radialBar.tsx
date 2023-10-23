import React from "react";
import Chart from "react-apexcharts";

interface RadialBarProps {
    color: string;
  // Define any props required by the component
}

const RadialBar: React.FC<RadialBarProps> = ({color}) => {
  const options = {
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },        
        track: {
          background: "#f2f2f2",
          strokeWidth: "97%",
        },
        dataLabels: {
          show: true,
          value: {
            show: true,
            offsetY: 70,
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "+74%",
            color: "#373d3f",
          },
        },
      },
    },
    colors: [color],
  };



  const series = [69];

  return (
    <div className="donut">
      <Chart options={options} series={series} type="radialBar" width="190px" />
    </div>
  );
};

export default RadialBar;
