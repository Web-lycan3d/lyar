/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.styles.scss";

const Navbar = () => {
  const [areialState, setAreialState] = useState(false);
  const [areialState2, setAreialState2] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", (e) => {
        if (navRef.current.contains(e.target)) {
          return;
        } else {
          setAreialState2(false);
          setAreialState(false);
        }
      });
    }, 1200);
  }, []);

  return (
    <div ref={navRef} className="navbar-container">
      <div className="nav-contents">
        <div
          className="nav-ptag"
          onClick={() => {
            setAreialState2(false);
            setAreialState(!areialState);
          }}>
          <p> AERIAL SYSTEMS</p>

          <div
            className={
              areialState
                ? "nav-aerial-contents nav-areial-active"
                : "nav-aerial-contents"
            }>
            <Link className="nav-atag" to={"/product/menu?areial=" + true}>
              <span>Muticolor</span>
            </Link>
            <Link className="nav-atag" to={"/product/menu?areial=" + true}>
              <span>Fixed Wing</span>
            </Link>
          </div>
        </div>

        <img src="" alt="logo" className="nav-logo" />
        <div
          className="nav-ptag"
          onClick={() => {
            setAreialState(false);
            setAreialState2(!areialState2);
          }}>
          <p> COMMUNICATION</p>
          <div
            className={
              areialState2
                ? "nav-aerial-contents nav-areial-active"
                : "nav-aerial-contents"
            }>
            <Link className="nav-atag" to={"/product/menu?areial=" + false}>
              <span>GCS</span>
            </Link>
            <Link className="nav-atag" to={"/product/menu?areial=" + false}>
              <span>SWARM</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
