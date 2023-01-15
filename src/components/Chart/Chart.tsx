import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import Data from "../../data/data.json";

function ChartComponent() {
  const labels = Data.map((data) => data.day);
  const datasets = [
    {
      label: "",
      data: Data.map((data) => data.amount),
      backgroundColor: "hsl(10, 79%, 65%)",
      borderColor: "hsl(10, 79%, 65%)",
      borderWidth: 2,
    },
  ];

  return (
    <div>
      <Bar
        data={{ labels, datasets }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {},
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ChartComponent;
