import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaFour = () => {
  return (
    <div className="service-area-2 space overflow-hidden bg-smoke">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Complete Auto Care Solutions
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="Routine Maintenance" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service">Routine Maintenance</Link>
                  </h4>
                  <p className="service-card_text">
                    Oil changes, fluid checks, filter replacements, and scheduled maintenance to keep your vehicle running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-2.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="AC & Heating" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service">AC & Heating Repair</Link>
                  </h4>
                  <p className="service-card_text">
                    Complete climate control services including A/C recharge, compressor repair, and heating system diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-3.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Electrical Repair" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service">Electrical System Repair</Link>
                  </h4>
                  <p className="service-card_text">
                    Battery testing, alternator repair, starter replacement, and complete electrical diagnostics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaFour;
