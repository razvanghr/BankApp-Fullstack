import React, { useState, useEffect } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import HeaderDashboard from "./dashboardComponents/HeaderDashboard";
import Transactions from "./dashboardComponents/Transactions";
import Loan from "./dashboardComponents/Loan";
import Transfer from "./dashboardComponents/Transfer";
import Delete from "./dashboardComponents/Delete";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashbord({ accId }) {
  const [accountData, setAccountData] = useState({});
  const [accountTransactions, setAccountTransactions] = useState([]);
  const [loanChange, setLoanChange] = useState(false);

  useEffect(() => {
    getAccountTransactions();
    getAccountData();
  }, [loanChange]);

  const getAccountData = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:3000/api/info/${accId}`,
      });

      setAccountData(res.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const getAccountTransactions = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:3000/api/transaction/${accId}`,
      });

      setAccountTransactions(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="dashboard">
        <HeaderDashboard
          name={accountData.last_Name}
          balance={accountData.account_money}
        />
        <Transactions transactions={accountTransactions} />
        <div className="options">
          <Loan
            accId={accId}
            getAccountTransactions={getAccountTransactions}
            getAccountData={getAccountData}
          />
          <Transfer
            balance={accountData.account_money}
            accId={accId}
            getAccountTransactions={getAccountTransactions}
            getAccountData={getAccountData}
          />
          <Delete accId={accId} />
        </div>
        <div className="log-out">
          <Link to="/">
            <HiOutlineLogout />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashbord;
