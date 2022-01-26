/** @format */

import "./swarm.styles.scss";

import React from "react";

const Swarm = () => {
  return (
    <div className="swarm-container">
      <div className="swarm-contents">
        <div className="swarm-details">
          <div className="swarm-details-header">
            <h3 className="swarm-h3tag">
              SWARM <span>SYSTEM</span>
            </h3>
            <img src="https://i.ibb.co/x1qgrfG/Group-9870.png" alt="err" />
          </div>
          <p className="swarm-ptag">
            We are developing peer-to-peer communication systems that enable
            multiple drones to communicate with each other and operate as a
            group. The drone swarm operates through a decentralised command and
            control structure that enables them to complete the required task
            until the last drone is airborne. This is accomplished by algorithms
            that create communication architectures that are encrypted and
            change randomly to prevent signal spoofing. Software manages the
            entire operation from launch to end.
          </p>
        </div>
        <div className="swarm-img">
          <img
            src="https://i.ibb.co/gTQcRKJ/image-placeholder-title.webp"
            alt="err"
          />
        </div>
      </div>
    </div>
  );
};

export default Swarm;
