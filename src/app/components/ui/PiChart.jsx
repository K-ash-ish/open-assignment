"use client";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { dummyData } from "@/app/constant";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

function PiChart() {
  const [chartData, setChartData] = useState({
    labels: dummyData.map((data) => data.employee_age),
    datasets: [
      {
        label: "Employer's Salary ",
        data: dummyData.map((data) => data.employee_salary),
      },
    ],
  });
  return (
    <Pie
      data={chartData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            borderWidth: 0, // Remove border around slices
          },
        },
        scales: {
          x: {
            display: false, // Hide X-axis
          },
          y: {
            display: false, // Hide Y-axis
          },
        },
      }}
    />
  );
}

export default PiChart;
