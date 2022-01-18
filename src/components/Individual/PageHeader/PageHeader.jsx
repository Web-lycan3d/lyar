/** @format */

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./pageheader.styles.scss";

const PageHeader = ({ pageHeader }) => {
  return (
    <div className="pageheader-container">
      <div className="pageheader-contents">
        <div className="pageheader-details">
          <div className="pageheader-details-flex">
            <h1 className="pageheader-h1">{pageHeader.name}</h1>
            <img src={pageHeader.svg} alt="drone png" />
          </div>
          <p className="pageheader-p">{pageHeader.text}</p>
        </div>
        <div className="pageheader-img">
          <img src={pageHeader.img} alt="err" />
        </div>
      </div>
      <div className="pageheader-sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default PageHeader;
