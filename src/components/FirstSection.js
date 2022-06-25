import React from "react";
import "./FirstSection.css";
import mainimg from "../Assets/mainimg.png";
import Compoimg from "../Assets/component1.png";

function FirstSection() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5">
            <div class="banner-content">
              <h1>DELICIOUS</h1>
              <h2>SEAFOOD BOIL</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={mainimg} alt="not found" className="img-fluid" />
          </div>
          <div
            className="col-md-12 justify-content-center"
            style={{ display: "flex" }}
          >
            <img src={Compoimg} alt="not found" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
