/** @format */

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./pageheader.styles.scss";

const PageHeader = () => {
  return (
    <div className="pageheader-container">
      <div className="pageheader-contents">
        <div className="pageheader-details">
          <div className="pageheader-details-flex">
            <h1 className="pageheader-h1">
              MICRO <br /> <span className="pageheader-span">DRONE</span>
            </h1>
            <img src="https://i.ibb.co/Z6gTGcg/Path-107.png" alt="drone png" />
          </div>
          <p className="pageheader-p">
            Micro drones are small-scale drones carrying payloads such as
            cameras and sensors. The micro drone enables the user to obtain a
            bird's eye view of the environment which is helpful in many
            applications such as environmental monitoring, surveying,
            surveillance or disaster management.
          </p>
        </div>
        <div className="pageheader-img">
          <img src="https://i.ibb.co/b79pfS8/Mask-Group-22.png" alt="" />
        </div>
      </div>
      <div className="pageheader-sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default PageHeader;
