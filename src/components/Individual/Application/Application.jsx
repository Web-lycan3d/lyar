/** @format */
import React from "react";
import "./application.styles.scss";

const Sector = () => {
  return (
    <div className="application-container">
      <div className="application-contents">
        <div className="application-img">
          <img
            src="https://i.ibb.co/R32tbf5/2-Kg-In-context-1-Transparent.png"
            alt="sector-img"
          />
        </div>
        <div className="application-details">
          <h1 className="application-h1">APPLICATIONS</h1>
          <div className="application-list">
            <p className="application-list-ptag">ENVIRONMENTAL MONITORING</p>
            <span className="application-list-span">
              Using Azure, it is possible to monitor a variety of environmental
              factors - land erosion, wildfire risk, invasive species growth,
              endangered species populations and more. The data can then be used
              to make better, more informed decisions that protect both humans
              and the environment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
