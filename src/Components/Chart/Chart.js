import React from "react";
import "./Chart.css";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Patient in months (Hundred)",
        data: [1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 3, 2],
        borderColor: "#dc3545",
        fill: false
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1
          }
        }
      ]
    }
  };

  return(
    <div className="Chart">
      <Line data={data}  options={options} />
    </div>
  );
};

export default LineChart;
