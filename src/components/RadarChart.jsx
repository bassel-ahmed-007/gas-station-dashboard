import React from "react";
import { Radar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(Tooltip, Legend, LineElement, PointElement, RadialLinearScale);

function RadarChart() {
  return (
    <section className="w-[312px] h-[350px]  absolute right-[150px] top-[0px] flex flex-col">
      <div className="flex items-center justify-center mb-[25px]">
        <h1 className="text-[20px] font-bold">Hourly Sales</h1>
      </div>
      <div className="w-[90%]">
        <Radar
          data={{
            labels: [
              "02:00",
              "04:00",
              "06:00",
              "08:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
              "22:00",
              "24:00",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: [80, 85, 90, 81, 75, 68, 78, 85, 90, 81, 75, 68],
                fill: true,
                backgroundColor: "#00CBC0",
                borderColor: "#00CBC0",
                pointRadius: 0,
                pointHoverRadius: 0,
                hoverBackgroundColor: "#00CBC0",
                pointHoverBackgroundColor: "#00CBC0",
              },
              {
                label: "My Second Dataset",
                data: [68, 78, 85, 90, 81, 75, 68, 67, 80, 85, 90, 81],
                fill: true,
                backgroundColor: "#FF7F5C",
                borderColor: "#FF7F5C",
                pointRadius: 0,
                pointHoverRadius: 0,
              },
            ],
          }}
          options={{
            scales: {
              r: {
                angleLines: {
                  display: false,
                },
                suggestedMin: 50,
                suggestedMax: 100,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </section>
  );
}

export default RadarChart;
