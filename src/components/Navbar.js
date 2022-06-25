import React from "react";
import Logo from "../Assets/Logo.png";
import Home from "../Assets/Home.png";
import Menu from "../Assets/Menu.png";
import Gallery from "../Assets/Gallery.png";

import "./Navbar.css";
function Navbar() {
  return (
    <div
      className="desktop-header"
      style={{ position: "absolute", width: "100%" }}
    >
      <div className="container ">
        <div className="row align-items-center">
            {/* bootstrap is starting from here */}
          <div className="col-md-3">
            <img src={Logo} alt="not found" />
          </div>
          <div className="col-md-6 nav-items">
            <span>
              <img src={Home} alt="not found" /> HOME
            </span>
            <span>
              <img src={Menu} alt="not found" /> MENU
            </span>
            <span>
              <img src={Gallery} alt="not found" /> GALLERY
            </span>
          </div>
          <div className="col-md-3 ">
            <div className="red-btn">
              <p style={{ fontWeight: "bold", color: "white", padding: "3px" }}>
                ONLINE ORDER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
