import "./ChartContainer.scss";

function ChartContainer() {
  return (
    <div className="chart-container">
      <h1>Spending - Last 7 days</h1>

      <div>Chart here</div>

      <hr className="divider" />

      <div className="resume-content">
        <div>
          <p className="title">Total this month</p>
          <p className="money">$478.33</p>
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
