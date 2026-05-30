import { useState } from "react";

function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title,
      amount
    };

    const existingTransactions =
      JSON.parse(
        localStorage.getItem("transactions")
      ) || [];

    existingTransactions.push(newTransaction);

    localStorage.setItem(
      "transactions",
      JSON.stringify(existingTransactions)
    );

    alert("Transaction Added Successfully!");

    setTitle("");
    setAmount("");
  };

  return (
    <div className="card mt-4 p-4">
      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Expense Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          required
        />

        <button
          type="submit"
          className="btn btn-success"
        >
          Add Transaction
        </button>

      </form>
    </div>
  );
}

export default TransactionForm;