import ChartContainer from "../components/ChartContainer/ChartContainer";
import Header from "../components/Header/Header";

import "./ExpensesContainer.scss";

function ExpensesContainer() {
  return (
    <div className="container">
      <Header />
      <ChartContainer />
    </div>
  );
}

export default ExpensesContainer;
