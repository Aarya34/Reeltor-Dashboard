import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

// Register the necessary plugins and elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const TotalDistributions = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Distributions",
        data: [200, 250, 180, 300, 220, 210, 260], // Sample data
        borderColor: "#7C3AED", // Purple line color
        backgroundColor: "rgba(124, 58, 237, 0.2)", // Light purple fill
        borderWidth: 2,
        fill: true,
        tension: 0.4, // Smooth curves
        pointRadius: 5, // Point size
        pointBackgroundColor: "#7C3AED", // Point color
        pointBorderColor: "#fff",
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        grid: { display: false }, // Remove y-axis grid
      },
      x: {
        grid: { display: false }, // Remove x-axis grid
      },
    },
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: {
        enabled: true,
        backgroundColor: "#7C3AED", // Tooltip background
        titleFont: { size: 12 },
        bodyFont: { size: 14 },
        padding: 10,
        displayColors: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full mt-5">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Total Distributions</h3>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalDistributions;
