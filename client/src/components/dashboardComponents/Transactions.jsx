import Transaction from "./Transaction";

function Transactions({ transactions }) {
  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.transaction_id}
          transaction={transaction}
        />
      ))}
    </div>
  );
}

export default Transactions;
