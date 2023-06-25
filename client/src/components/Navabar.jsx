import React from "react";

import { Link, useLocation } from "react-router-dom";

function Navabar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navigation-left">
        <Link to="/">
          <h1>Bank App</h1>
        </Link>
      </div>
      <div className="navigation-right">
        <Link to="/about-us">About Us</Link>
        <Link to="/account">Login</Link>
        <Link id="open-btn" to="/open-account">
          Open Account
        </Link>
      </div>
    </div>
  );
}

export default Navabar;
