import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ExpenseChart() {
  const data = {
    labels: [
      "Food",
      "Travel",
      "Shopping",
      "Bills"
    ],

    datasets: [
      {
        data: [5000, 3000, 7000, 5000]
      }
    ]
  };

  return (
    <div className="card mt-4 p-4">
      <h3>Expense Categories</h3>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;