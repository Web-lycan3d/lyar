/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Footer;
