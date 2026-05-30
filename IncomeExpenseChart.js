import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function IncomeExpenseChart() {
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [50000, 20000]
      }
    ]
  };

  return (
    <div className="card mt-4 p-4">
      <h3>Income vs Expense</h3>
      <Bar data={data} />
    </div>
  );
}

export default IncomeExpenseChart;