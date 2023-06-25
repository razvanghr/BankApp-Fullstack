import React from "react";

import img1 from "../assets/bag-dolars.png";
import img2 from "../assets/green-card.png";
import img3 from "../assets/green-dolar.png";
import Footer from "./Footer";

import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main">
        <div className="first-content">
          <div className="first-content-info">
            <p>
              Welcome to our bank!
              <br /> We are dedicated to providing you with the best banking
              services!
            </p>
            <Link to="/open-account">
              <button>Open Account</button>
            </Link>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="second-content">
          <h1 id="align-center">EVERYTHING YOU NEED FROM A MODERN BANK!</h1>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <h1 className="card-text">100% Digital</h1>
                <p>
                  Opening an account is easy. Just fill in a few basic
                  information and your account will work. Benefit from all the
                  benefits of digital banking at home. Sending money does not it
                  was so easy before.
                </p>
              </div>
              <img src={img2} alt="Green Visa Card" />
            </div>
            <div className="card">
              <img src={img3} alt="Green Visa Card" />
              <div className="card-content">
                <h1 className="card-text">Watch your money grow</h1>
                <p>
                  Beat inflation with our staggering 8.5% interest. teams our
                  efficient take care of your precious money and grow it at a
                  fast pace. You plant a seed, we make it a tree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
