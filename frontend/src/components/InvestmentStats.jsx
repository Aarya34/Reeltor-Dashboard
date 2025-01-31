import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InvestmentStats = () => {
    // Sample data for the bar chart
  const data = {
    labels: ["Total Investment", "Weekly Returns", "Expenses"],
    datasets: [
      {
        label: "Ether",
        data: [0.56, 0.7, 0.3], // Your values
        backgroundColor: ["#FFA500", "#00C49F", "#FF4D4D"], // Matching colors
        borderRadius: 8,
        barThickness: 20, // Adjust bar width
      },
    ],
  };
  // Chart options

  const options = {
    responsive: true,
    scales: {
      y: { display: false }, // Hide Y-Axis
      x: { grid: { display: false } }, // Hide X-Axis grid
    },
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: true }, // Show tooltips on hover
    },
  };
  // Return the bar chart
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-blue-300">
      <h3 className="text-lg font-semibold text-gray-700">Investment Stats</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default InvestmentStats;
