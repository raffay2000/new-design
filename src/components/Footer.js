import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
// import {}
function Footer() {
  return (
    // this is outter div
    <footer className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-md-12 ">
            <div className="footer-items1">
              <span>GALLERY</span>
              <span>MENU</span>
              <span>CONTACT</span>
            </div>
          </div>
          {/* bootstrap is starting from here */}
          <div
            className="col-md-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="footer-items2">
              <span>
                <FontAwesomeIcon
                  icon="fa-brands fa-twitter"
                  style={{ color: "white" }}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook-f"
                  style={{ color: "white" }}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  style={{ color: "white" }}
                />
              </span>
            </div>
          </div>
          <div className="col-md-12">
            <hr style={{ color: "white" }} />
          </div>
        </div>
        <div className="col-md-12">
          <p style={{ color: "white", textAlign: "center" }}>
            © Juicy bucket 2022 . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
