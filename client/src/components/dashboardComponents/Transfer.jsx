import React from "react";
import axios from "axios";

import { useState } from "react";

function Transfer({ accId, balance, getAccountTransactions, getAccountData }) {
  const [showTransfer, setshowTransfer] = useState(false);
  const [transferValue, settransferValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [transferStatus, settransferStatus] = useState(false);

  const transferRequest = async (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("Please enter a first name");
      return;
    }

    if (!lastName) {
      alert("Please enter a last name");
      return;
    }

    if (!transferValue) {
      alert("Please enter a value to transfer");
      return;
    }

    if (transferValue >= balance) {
      alert("Action failed. Not enough money!");
      return;
    }

    try {
      const res = await axios({
        method: "PUT",
        url: `http://localhost:3000/api/transfer/${accId}`,
        data: {
          firstName: firstName,
          lastName: lastName,
          transfer_value: transferValue,
          account_balance: balance,
        },
      });

      getAccountTransactions();
      getAccountData();
      settransferStatus(false);
    } catch (e) {
      console.log(e);
      settransferStatus(true);
    }

    setFirstName("");
    setLastName("");
    settransferValue("");
  };

  return (
    <div className="transfer">
      <button
        onClick={() => {
          setshowTransfer(!showTransfer);
        }}
      >
        Transfer
      </button>
      {showTransfer && (
        <div id="box">
          <form>
            <div className="transfer-option">
              <div className="form-control-transfer">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-control-transfer">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-control-transfer">
                <label>Value</label>
                <input
                  type="number"
                  value={transferValue}
                  onChange={(e) => settransferValue(e.target.value)}
                />
              </div>
              <button className="option-btn" onClick={transferRequest}>
                Transfer
              </button>
            </div>
          </form>
          {transferStatus && <p>The account does not exist</p>}
        </div>
      )}
    </div>
  );
}

export default Transfer;
