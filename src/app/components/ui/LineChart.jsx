"use client";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { dummyData } from "@/app/constant";
import { Data } from "@/app/constant";
import { Line, Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

function LineChart() {
  const [chartData, setChartData] = useState({
    labels: dummyData.map((data) => data.employee_age),
    datasets: [
      {
        label: "Employer's Salary ",
        data: dummyData.map((data) => data.employee_salary),
        borderColor: "#E9A0A0",
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        pointRadius: 0,
      },
      {
        label: "Employer's Salary ",
        data: ["250000", "400000", "300000", "220000"],
        borderColor: "#9BDD7C",
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        pointRadius: 0,
      },
    ],
  });
  return (
    <Line
      data={chartData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              display: true,
              color: "#EAEAEA",
              lineWidth: 1,
            },
            ticks: {
              display: true,
              color: "#858585",
            },
          },
        },
      }}
    />
  );
}

export default LineChart;
