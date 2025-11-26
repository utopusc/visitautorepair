import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_1_1.png)" }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white">Trusted Auto Care in Davis, CA</span>
              <h1 className="hero-title text-white">
                Expert{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_1.png" alt="Visit Auto Repair" />
                  Auto Repair
                </span>{" "}
                You Can Count On
              </h1>
              <p className="hero-text text-white">
                25+ years of experience. ASE certified technicians. Honest service at fair prices.
              </p>
              <div className="btn-group">
                <Link to="/contact" className="btn">
                  Schedule Service
                </Link>
                <Link to="/service" className="btn style-border">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-thumb text-center">
              <img src="assets/img/normal/breadcrumb-thumb.png" alt="Visit Auto Repair" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
