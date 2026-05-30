import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import BudgetCard from "../components/BudgetCard";
import ExpenseChart from "../components/ExpenseChart";
import IncomeExpenseChart from "../components/IncomeExpenseChart";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Smart Expense Tracker Dashboard
        </h1>

        <div className="row">

          <div className="col-md-4">
            <div className="card bg-success text-white p-3">
              <h4>Total Income</h4>
              <h2>₹50,000</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-danger text-white p-3">
              <h4>Total Expense</h4>
              <h2>₹20,000</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-primary text-white p-3">
              <h4>Balance</h4>
              <h2>₹30,000</h2>
            </div>
          </div>

        </div>

        {/* Add Transaction Form */}
        <TransactionForm />

        {/* Transaction List */}
        <TransactionList />

        {/* Budget Summary */}
        <BudgetCard />

        {/* Expense Pie Chart */}
        <ExpenseChart />

        {/* Income vs Expense Bar Chart */}
        <IncomeExpenseChart />

      </div>
    </>
  );
}

export default Dashboard;