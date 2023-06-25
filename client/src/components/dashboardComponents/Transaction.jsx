import React from "react";

function Transaction({ transaction }) {
  return (
    <div className="mov">
      <div
        className="mov-type"
        id={
          transaction.transaction_type == "Loan" ? "loan-type" : "transfer-type"
        }
      >
        <h1>{transaction.transaction_type}</h1>
      </div>
      <div className="mov-date">
        <p>{transaction.transaction_date}</p>
      </div>
      {transaction.transaction_type == "Loan" ? (
        <div className="mov-value" style={{ color: "#438e55" }}>
          <p>{transaction.transaction_amount}€</p>
        </div>
      ) : (
        <div className="mov-value" style={{ color: "red" }}>
          <p>-{transaction.transaction_amount}€</p>
        </div>
      )}
    </div>
  );
}

export default Transaction;
