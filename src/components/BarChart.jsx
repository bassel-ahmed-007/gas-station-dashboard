import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  return (
    <section className="w-[1150px] h-[400px] bg-white absolute right-[580px] top-[330px] rounded-[20px] flex flex-col shadow-lg">
      <div className="flex items-center justify-center">
        <div className="w-[95%] h-[80px] flex items-center justify-between px-[20px] border-b-[1px]">
          <h1 className="text-[16px] font-bold text-textColor">
            Stations Activties Overview
          </h1>
          <ul className="flex items-center justify-center gap-[40px] pr-[20px] text-[18px] font-bold text-textColor">
            <li className="text-mainColor">Sales</li>
            <li>Transaction</li>
            <li>Value</li>
            <li>Comperssion</li>
          </ul>
        </div>
      </div>

      <div className="h-[60%] px-[45px] mt-[40px]">
        <Bar
          data={{
            labels: [
              "station 1",
              "station 2",
              "station 3",
              "station 4",
              "station 5",
            ],
            datasets: [
              {
                label: null,
                data: [250, 160, 200, 230, 140],
                backgroundColor: "#FF7F5C",
                barThickness: 8,
              },
            ],
          }}
          height={165}
          width={1080}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 300,
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: true,
                },
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

export default BarChart;
