import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Trusted Car Repair Professionals{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Visit Auto Repair"
                />
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
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="Engine Repair" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service">Engine Repair & Diagnostics</Link>
                  </h4>
                  <p className="service-card_text">
                    Complete engine troubleshooting, repairs, and performance optimization for all vehicle makes and models.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="btn style4">
                Schedule Service <i className="fas fa-arrow-right" />
              </Link>
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
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="Brake Service" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service">Brake Repair & Replacement</Link>
                  </h4>
                  <p className="service-card_text">
                    Expert brake pad, rotor, and caliper repairs to ensure your vehicle stops safely every time.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="btn style4">
                Schedule Service <i className="fas fa-arrow-right" />
              </Link>
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
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Transmission Service" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service">Transmission Service</Link>
                  </h4>
                  <p className="service-card_text">
                    Professional transmission diagnosis, repair, and replacement for smooth shifting and reliability.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="btn style4">
                Schedule Service <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
