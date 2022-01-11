/** @format */

import React from "react";
import Features from "../components/Individual/Features/Features";
import PageCenter from "../components/Individual/PageCenter/PageCenter";
import PageHeader from "../components/Individual/PageHeader/PageHeader";
import Payload from "../components/Individual/Payload/Payload";
import Sector from "../components/Individual/Application/Application";
import SectorAdv from "../components/Individual/Application/ApplicationAdv";
import DroneVideo from "../components/Individual/Video/DroneVideo";

const MicroDrone = () => {
  return (
    <div>
      <PageHeader />
      <Sector />
      <PageCenter />
      <SectorAdv />
      <DroneVideo />
      <Features />
      <Payload />
    </div>
  );
};

export default MicroDrone;
