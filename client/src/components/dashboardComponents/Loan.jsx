import React from "react";

import { useState } from "react";
import axios from "axios";

function Loan({ accId, onChange, getAccountTransactions, getAccountData }) {
  const [showLoan, setshowLoan] = useState(false);
  const [loanValue, setloanValue] = useState("");

  const loanRequest = async (e) => {
    e.preventDefault();

    if (!loanValue) {
      alert("Please insert a value");
      return;
    }

    if (loanValue > 5000) {
      alert("Loan Value need to be lower than 5000");
      return;
    }

    if (loanValue)
      try {
        const res = await axios({
          method: "put",
          url: `http://localhost:3000/api/loan/${accId}`,
          data: {
            loan_value: loanValue,
          },
        });
        getAccountTransactions();
        getAccountData();
      } catch (e) {
        console.log(e);
      }

    setloanValue("");
    setshowLoan(false);
  };
  return (
    <div className="loan">
      <button
        onClick={() => {
          setshowLoan(!showLoan);
        }}
      >
        Loan
      </button>
      {showLoan && (
        <div id="box">
          <form>
            <div className="loan-option">
              <label>Request Loan</label>
              <input
                type="number"
                value={loanValue}
                onChange={(e) => setloanValue(e.target.value)}
              />
              <button className="option-btn" onClick={loanRequest}>
                Request Loan
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Loan;
