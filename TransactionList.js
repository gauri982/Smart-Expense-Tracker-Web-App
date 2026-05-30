import { useEffect, useState } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");

  useEffect(() => {
    const savedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    setTransactions(savedTransactions);
  }, []);

  const deleteTransaction = (index) => {
    const updatedTransactions =
      transactions.filter((_, i) => i !== index);

    setTransactions(updatedTransactions);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updatedTransactions)
    );
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditTitle(transactions[index].title);
    setEditAmount(transactions[index].amount);
  };

  const saveEdit = () => {
    const updatedTransactions = [...transactions];

    updatedTransactions[editIndex] = {
      title: editTitle,
      amount: editAmount
    };

    setTransactions(updatedTransactions);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updatedTransactions)
    );

    setEditIndex(null);
  };

  return (
    <div className="card mt-4 p-4">
      <h3>Transactions</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    className="form-control"
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                  />
                ) : (
                  transaction.title
                )}
              </td>

              <td>
                {editIndex === index ? (
                  <input
                    className="form-control"
                    value={editAmount}
                    onChange={(e) =>
                      setEditAmount(e.target.value)
                    }
                  />
                ) : (
                  `₹${transaction.amount}`
                )}
              </td>

              <td>
                {editIndex === index ? (
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => startEdit(index)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteTransaction(index)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;