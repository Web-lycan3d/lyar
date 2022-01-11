/** @format */

import React from "react";
import "./features.styles.scss";

const Features = () => {
  return (
    <div className="feature-container">
      <h1 className="feature-h1">FEATURES</h1>
      <div className="feature-contents">
        <div className="feature-images">
          <img src="https://i.ibb.co/BV70Sx2/Group-9739.png" alt="" />
        </div>
        <div className="feature-details">
          <div className="feature-row-1">
            <div className="feature-item">
              <img src="https://i.ibb.co/Bgv7HBp/Group-9783.png" alt="" />

              <span className="feature-item-stag">
                Lightweight and compact, the micro drone weighs less than 2kg.
              </span>
            </div>
            <div className="feature-item">
              <img src="https://i.ibb.co/Bgv7HBp/Group-9783.png" alt="" />
            </div>
            <div className="feature-item">
              <img src="https://i.ibb.co/Bgv7HBp/Group-9783.png" alt="" />
            </div>
          </div>{" "}
          <div className="feature-row-2">
            <div className="feature-item">
              <img src="https://i.ibb.co/Bgv7HBp/Group-9783.png" alt="" />

              <span className="feature-item-stag">
                Lightweight and compact, the micro drone weighs less than 2kg.
              </span>
            </div>
            <div className="feature-item">
              <img src="https://i.ibb.co/Bgv7HBp/Group-9783.png" alt="" />
            </div>
            <div className="feature-item">
              <img src="https://i.ibb.co/Bgv7HBp/Group-9783.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
