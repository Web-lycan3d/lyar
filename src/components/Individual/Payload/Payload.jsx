/** @format */

import React from "react";
import "./payload.styles.scss";

const Payload = () => {
  return (
    <React.Fragment>
      <div className="payload-container">
        <div className="payload-contents">
          <h2 className="payload-h2">PAYLOAD APPLICATIONS</h2>
          <div className="payload-flex-container">
            <div className="payload-item">
              <div className="payload-img">
                <img src="https://i.ibb.co/h9nVQS1/Group-9659.png" alt="" />
                <p className="payload-img-ptag">RGB CAMERA</p>
              </div>
              <div className="payload-details">
                <p>
                  Used for aerial mapping and surveying by processing imagery
                  into orthomosaic maps, 3d models, point clouds and digital
                  surface models.
                </p>{" "}
                <p>
                  Inspection of roads, land, construction sites, pipelines and
                  powerlines.
                </p>
                <p>
                  Monitoring of infrastructure, animal population, environmental
                  changes and surveillance.
                </p>
              </div>
            </div>
            <div className="payload-item">
              <div className="payload-img">
                <img
                  src="https://i.ibb.co/F8yhvLm/Viewpro-U30-TIR-Gimbal.png"
                  alt=""
                />
                <p className="payload-img-ptag">EO/IR CAMERA</p>
              </div>
              <div className="payload-details">
                <p>
                  EO/IR cameras provide total situational awareness both day and
                  night and in low light conditions.
                </p>
                <p>
                  Used for search and rescue operations, surveillance and
                  targeting, coastal and border patrol, and security.
                </p>
                <p>
                  High-definition video tracking, target tracking and image
                  enhancement and processing capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sheet-container">
        <h3 className="sheet-h3">SPEC SHEET</h3>
        <div className="sheet-contents">
          <div className="sheet-table">
            <div className="sheet-spec">
              <p className="sheet-ptag"> Specification</p>
              <div className="sheet-spec-item">
                <span>item</span>
              </div>
            </div>
            <div className="sheet-table-right">
              <div className="sheet-table-design">
                <p className="sheet-ptag">Design</p>
                <div className="sheet-design-item">
                  <span>item</span>
                  <span>item</span>
                </div>
              </div>
              <div className="sheet-table-payload">
                <p className="sheet-ptag">Payload options</p>{" "}
                <div className="sheet-payload-item">
                  <span>item</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sheet-img">
            <img src="https://i.ibb.co/qYDx2SH/Path-104.png" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payload;
