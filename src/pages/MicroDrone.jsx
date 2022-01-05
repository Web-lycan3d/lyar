/** @format */

import React from "react";
import PageCenter from "../components/PageCenter/PageCenter";
import PageHeader from "../components/PageHeader/PageHeader";
import Sector from "../components/Sectors/Sector";
import SectorAdv from "../components/Sectors/SectorAdv";
import DroneVideo from "../components/Video/DroneVideo";

const MicroDrone = () => {
  return (
    <div>
      <PageHeader />
      <Sector />
      <PageCenter />
      <SectorAdv />
      <DroneVideo />
    </div>
  );
};

export default MicroDrone;
