import React from "react";
import Fish from "../Assets/Fish.png";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.png";

import Prawn from "../Assets/Prawn.png";
import Bigimg from "../Assets/Bigimg.png";
import "./SecondSection.css";
function SecondSection() {
  return (
    <>
      <section className="section_1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-0">
              <div>
                <img className="img-fluid" src={Fish} alt="fish" />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <img src={Bigimg} className="img-fluid" alt="not found" />
            </div>
            <div className="col-md-3 p-0">
              <img className="img-fluid" src={Prawn} alt="not found" />
            </div>
          </div>
        </div>
      </section>

      <section className="section_2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="img-1-2">
                <img src={img4} alt="not found" style={{alignSelf:"center"}}/>
                <h2 style={{textAlign:"center"}}>ABOUT US</h2>
                <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
            <div className="col-md-6 p-0" >
              <div className="img-1-3">
              <img src={img5} alt="not found" style={{alignSelf:"center"}}/>
                <h2 style={{textAlign:"center"}}>LOCATIONS</h2>
                <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondSection;
