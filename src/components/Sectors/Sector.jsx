/** @format */
import React from "react";
import "./sectors.styles.scss";

const Sector = () => {
  return (
    <div className="sector-container">
      <div className="sector-contents">
        <div className="sector-img">
          <img
            src="https://i.ibb.co/R32tbf5/2-Kg-In-context-1-Transparent.png"
            alt="sector-img"
          />
        </div>
        <div className="sector-details">
          <h1 className="sector-h1">SECTORS</h1>
          <span className="sector-span">
            Micro drones are small-scale drones carrying payloads such as
            cameras and sensors. The micro drone enables the user to obtain a
            bird's eye view of the environment which is helpful in many
            applications such as environmental monitoring, surveying,
            surveillance or disaster management. The micro drone provides quick
            navigation with high-range communication operations. When required,
            several micro drones can fly in formation over the area of interest
            and deliver data that is collected, analyzed and delivered to the
            user in real-time. Their weight is usually 2 kg or even less and can
            easily be carried and launched.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sector;
