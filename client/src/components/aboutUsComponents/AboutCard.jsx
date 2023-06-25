import React from "react";

function AboutCard({ text, icon }) {
  return (
    <div className="about-card">
      <h1>{text}</h1>
      {icon}
    </div>
  );
}

export default AboutCard;
