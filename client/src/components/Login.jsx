import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashbord from "./Dashbord";
import HashLoader from "react-spinners/HashLoader";

function Login() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [showDashbord, setshowDashbord] = useState(true);
  const [accId, setAccountId] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  let accountData;

  const LoadingTimer = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const sendData = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please insert an email");
      return;
    }

    if (!pin) {
      alert("Please insert a pin");
      return;
    }

    if (!password) {
      alert("Please insert a password");
      return;
    }

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: {
          email: email,
          password: password,
          pin: pin,
        },
      });

      if (res.data) {
        setshowDashbord(false);
        [accountData] = res.data;
        setAccountId(accountData.account_id);
        LoadingTimer();
      }
    } catch (e) {
      console.log(e);
      setLoginStatus(true);
    }

    setEmail("");
    setPin("");
    setPassword("");
  };

  return (
    <>
      {showDashbord ? (
        <div className="open-account">
          <form>
            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Pin</label>
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
          </form>
          <button onClick={sendData}>Login</button>
          <p>
            Don't have an account?
            <span>
              <Link to="/open-account"> Create Account </Link>
            </span>
          </p>
          {loginStatus && <p>Email , Password or PIN are incorrect</p>}
        </div>
      ) : loading ? (
        <div className="loading-container">
          <HashLoader
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            color="#438e55"
            data-testid="loader"
          />
        </div>
      ) : (
        <Dashbord accId={accId} />
      )}
    </>
  );
}

export default Login;

{
  /* <Dashbord accId={accId} /> */
}
