/** @format */

import React from "react";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-contents">
        <div className="about-text">
          <div className="about-text-details">
            <h3>LYCAN AEROSPACE</h3>
            <p>EXPERIENCE. PRECISION. EXCELLENCE</p>
          </div>
        </div>
        <div className="about-header-img">
          <img src="https://i.ibb.co/GFHBHhx/Component-49-2.webp" alt="error" />
        </div>
        <div className="about-footer">
          <div className="about-footer-img">
            <img src="https://i.ibb.co/p4yR08m/Group-10351.webp" alt="" />
          </div>
          <div className="about-footer-details">
            <h2>ABOUT US</h2>
            <p>
              Lycan Aerospace is a Bangalore based Aerospace start-up that
              focuses on the development and manufacturing of Drones and UAVs
              for applications in a variety of sectors ranging from Defense and
              Infrastructure to Deliveries and Surveillance. At Lycan Aerospace,
              we specialize in high-quality Drone & UAV-based solutions and
              products to translate aerial view data into actionable
              intelligence. We provide an extensive set of systems and services
              to ensure our clients achieve the solutions they require and are
              fully committed to making aerial systems that cut costs, perform
              better, travel faster and enable new methods and applications
              globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
