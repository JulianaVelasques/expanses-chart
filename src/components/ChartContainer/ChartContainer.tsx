import ChartComponent from "../Chart/Chart";

import Data from "../../data/data.json";

import "./ChartContainer.scss";

function ChartContainer() {
  const totalExpense = Data.reduce((sum, val) => {
    return sum + val.amount;
  }, 0);

  return (
    <div className="chart-container">
      <h1>Spending - Last 7 days</h1>

      <ChartComponent />

      <hr className="divider" />

      <div className="resume-content">
        <div>
          <p className="title">Total this month</p>
          <p className="money">${totalExpense}</p>
        </div>

        <div>
          <p className="percent">+2.4%</p>
          <p className="title">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default ChartContainer;
