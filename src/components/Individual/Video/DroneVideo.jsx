/** @format */

import React from "react";
import "./dronevideo.styles.scss";
import test from "./test.mp4";

const DroneVideo = () => {
  return (
    <div className="dronevideo-container">
      <video controls>
        <source src={test} />
      </video>
    </div>
  );
};

export default DroneVideo;
