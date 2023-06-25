import React from "react";

function HeaderDashboard({ name, balance }) {
  return (
    <div className="header-dashboard">
      <h1>Hello... {name}</h1>
      <h1 className={balance == 0 ? "zero-balance" : "balance"}>
        Balance: <span>{balance} </span> €
      </h1>
    </div>
  );
}

export default HeaderDashboard;
