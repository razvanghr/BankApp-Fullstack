import React from "react";
import Typewriter from "typewriter-effect";
import AboutCard from "./aboutUsComponents/AboutCard";
import { FaPiggyBank, FaClock, FaNetworkWired } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-us">
      <Typewriter
        options={{
          strings: ["EVERYTHING YOU NEED FROM A MODERN BANK!"],
          autoStart: true,
          loop: true,
        }}
      />
      <div className="about-cards">
        <AboutCard text={"Accessibility"} icon={<FaNetworkWired />} />
        <AboutCard text={"24/7 Services"} icon={<FaClock />} />
        <AboutCard text={"Efficiency"} icon={<FaPiggyBank />} />
      </div>
    </div>
  );
}

export default AboutUs;
