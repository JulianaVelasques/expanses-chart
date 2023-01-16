import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import Data from "../../data/data.json";

function ChartComponent() {
  let biggestAmount = Data.reduce(
    (previousLargestNumber, currentLargestNumber) => {
      return currentLargestNumber.amount > previousLargestNumber.amount
        ? currentLargestNumber
        : previousLargestNumber;
    }
  );

  const labels = Data.map((data) => data.day);
  const datasets = [
    {
      label: "",
      data: Data.map((data) => data.amount),
      backgroundColor: (context: any) => {
        if (biggestAmount.amount == context.raw) {
          return "hsl(186, 34%, 60%)";
        } else {
          return "hsl(10, 79%, 65%)";
        }
      },
      borderColor: (context: any) => {
        if (biggestAmount.amount == context.raw) {
          return "hsl(186, 34%, 60%)";
        } else {
          return "hsl(10, 79%, 65%)";
        }
      },
      borderWidth: 2,
      hoverBackgroundColor: (context: any) => {
        if (biggestAmount.amount == context.raw) {
          return "hsl(186, 34%, 80%)";
        } else {
          return "hsl(10, 79%, 80%)";
        }
      },
      hoverBorderColor: (context: any) => {
        if (biggestAmount.amount == context.raw) {
          return "hsl(186, 34%, 80%)";
        } else {
          return "hsl(10, 79%, 80%)";
        }
      },
    },
  ];

  return (
    <div>
      <Bar
        data={{ labels, datasets }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                title: (context) => {
                  let title = context[0].formattedValue;
                  return `$ ${title}`;
                },
                label: () => {
                  return "";
                },
              },
              displayColors: false,
              yAlign: "bottom",
              caretPadding: 5,
              caretSize: 0,
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
