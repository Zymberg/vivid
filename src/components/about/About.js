import React from "react";
import "./About.css";
import F from "../../assets/F.jpg";
import M from "../../assets/21.jpg";
import GZ from "../../assets/profile.JPG";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <br></br>
        <p>VividHomes conducts expansive, ongoing research to produce and maintain the largest and most comprehensive database of commercial real estate information.</p>
        <p>
        Our suite of online services enables our clients to analyze, interpret, and gain unmatched insight on commercial property values, market conditions, and current availabilities.
        </p>
      </div>
      <br></br>
      <h2>Meet Our Team</h2>

      <div className="row">
        <div className="column-about">
          <div className="card-about">
            <img className="img-about" src={GZ} alt="GZ"  />
            <div className="container-about">
              <h2>Granit Zymeri</h2>
              <p className="title-about">CEO & Founder</p>
              <p>
              <Link to="/contact" >
                        <button className="button-connect">Contact</button>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="column-about">
          <div className="card-about">
            <img className="img-about" src={M} alt="Mike"  />
            <div className="container-about">
              <h2>Mike Ross</h2>
              <p className="title-about">Leasing Director</p>
              <p>
              <Link to="/contact" >
                        <button className="button-connect">Contact</button>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="column-about">
          <div className="card-about">
            <img className="img-about" src={F} alt="Jane"/>
            <div className="container-about">
              <h2>Jane Doe</h2>
              <p className="title-about">Marketing Director</p> 
              <p>
              <Link to="/contact" >
                        <button className="button-connect">Contact</button>
                </Link>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
