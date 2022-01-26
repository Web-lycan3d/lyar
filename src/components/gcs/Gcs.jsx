/** @format */
import "./gcs.styles.scss";

import React from "react";
import Features from "../Individual/Features/Features";

const Gcs = () => {
  const gcsData = [
    {
      features: [
        {
          id: 1,
          image: "https://i.ibb.co/xLkbKnT/Group-9877.png",
          desp: "Even after a target has been selected, the mission can be aborted in about 5 seconds.",
        },
        {
          id: 2,
          image: "https://i.ibb.co/56sDdKR/Group-9878.png",
          desp: "Using high speed and accuracy, the UAV is able to instantly lock on a target and attack.",
        },
        {
          id: 3,
          image: "https://i.ibb.co/y52Rn6F/Group-9879.png",
          desp: "High stabilised live stream video recording can be performed.",
        },
        {
          id: 4,
          image: "https://i.ibb.co/20rmwBq/Group-9880.png",
          desp: "Not detected as easily by radar systems.",
        },
        {
          id: 5,
          image: "https://i.ibb.co/XFNjXxN/Group-9881-2x.png",
          desp: "Ability to plan and execute automated flight missions.",
        },
        {
          id: 6,
          image: "https://i.ibb.co/86zrfz2/Group-9882.png",
          desp: "Ability to loiter around a target area and track specific objects.",
        },
      ],
      feature_Img:
        "https://i.ibb.co/5xjMMTr/UAV-Ground-Control-Station-B01-2k.png",
      specifications: [
        {
          item: "MTOW",
          value: "2kg",
        },
        {
          item: "Cruising Velocity",
          value: "10m/s",
        },
        {
          item: "Maximum Velocity",
          value: "13m/s",
        },
        {
          item: "Maximum ceiling height",
          value: "800m",
        },
        {
          item: "Endurance",
          value: "25mins",
        },
        {
          item: "Command & Control Range",
          value: "<10km*",
        },
        {
          item: "Wind resistance",
          value: "11m/s",
        },
        {
          item: "Temperature resistance",
          value: "-10 to 50°C",
        },
      ],
    },
  ];

  return (
    <div className="gcs-container">
      <div className="gcs-contents">
        <div className="gcs-header">
          <div className="gcs-header-details">
            <div className="gcs-header-details-text">
              <h4>GROUND CONTROL STATION</h4>
              <img src="https://i.ibb.co/x1qgrfG/Group-9870.png" alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ullam
              pariatur officiis blanditiis, quibusdam numquam accusamus, totam
              aut quaerat consequatur reiciendis, id minima sint nobis libero.
              Mollitia vitae quidem similique.
            </p>
          </div>
          <div className="gcs-header-img">
            <img
              src="https://i.ibb.co/r3m1XDs/UAV-Ground-Control-Station-H03-2k.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="gcs-benifits">
        <div className="gcs-benifits-contents">
          <div className="gcs-benifits-img">
            <img
              src="https://i.ibb.co/XXJmfqP/UAV-Ground-Control-Station-D14-2k.png"
              alt=""
            />
          </div>
          <div className="gcs-benifits-text">
            <h5 className="gcs-h5tag">BENEFITS</h5>
            <p>
              This ensures reduction of manual efforts during preflight
              checkups, continuous monitoring of the UAVs, provides visual
              alerts in undesired conditions to help with guidance as well as a
              Manual to Auto switch option.This ensures reduction of manual
              efforts during preflight checkups, continuous monitoring of the
              UAVs, provides visual alerts in undesired conditions to help with
              guidance as well as a Manual to Auto switch option.
            </p>
          </div>
        </div>
      </div>
      <Features
        features={{
          img: gcsData[0].feature_Img,
          array: gcsData[0].features,
        }}
      />
    </div>
  );
};

export default Gcs;
