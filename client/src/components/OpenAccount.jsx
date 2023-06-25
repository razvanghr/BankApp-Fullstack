import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [date, setDate] = useState(new Date());
  const [logged, setLogged] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("Please insert a first name");
      return;
    }

    if (!lastName) {
      alert("Please insert a last name");
      return;
    }

    if (!email) {
      alert("Please insert an email");
      return;
    }

    if (!password) {
      alert("Please insert a password");
      return;
    }

    if (!pin) {
      alert("Please insert a pin");
      return;
    }

    if (!date) {
      alert("Please insert a date");
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      pin: pin,
      dateOfBirth: date,
    };

    try {
      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setLogged(true);
    } catch (e) {
      console.log(e);
    }

    console.log(data);

    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setPin("");
    setDate(new Date());
  };

  return (
    <>
      {logged ? (
        <div className="account-created">
          <h1>Account created! Please Login</h1>
          <button>
            <Link to="/account">Login</Link>
          </button>
        </div>
      ) : (
        <div className="open-account">
          <form>
            <div className="form-control">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
              <label>PIN</label>
              <input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Date of Birth</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </form>
          <button onClick={sendData}>Open Account</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/account">Sign In</Link>
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default OpenAccount;
