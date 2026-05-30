function BudgetCard() {
  const budget = 25000;
  const spent = 20000;
  const remaining = budget - spent;

  return (
    <div className="card mt-4 p-4">
      <h3>Monthly Budget</h3>

      <p><strong>Budget:</strong> ₹{budget}</p>
      <p><strong>Spent:</strong> ₹{spent}</p>
      <p><strong>Remaining:</strong> ₹{remaining}</p>

      {spent > budget ? (
        <div className="alert alert-danger">
          Budget Exceeded!
        </div>
      ) : (
        <div className="alert alert-success">
          Budget Under Control
        </div>
      )}
    </div>
  );
}

export default BudgetCard;