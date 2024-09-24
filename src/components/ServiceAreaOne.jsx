import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaOne = () => {
  return (
    <div className="service-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Latest service</span>
              <h2 className="sec-title">
                Professional Car Repair The Best Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="Complete Vehicle Diagnostics" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details/complete-vehicle-diagnostics">Complete Vehicle Diagnostics</Link>
                </h4>
                <p className="service-card_text">
                  Advanced diagnostic tools to quickly and accurately identify issues in any vehicle model.
                </p>
                <Link to="/service-details/complete-vehicle-diagnostics" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.png" alt="Complete Vehicle Diagnostics" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="Routine Maintenance & Fluid Checks" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details/routine-maintenance">Routine Maintenance & Fluid Checks</Link>
                </h4>
                <p className="service-card_text">
                  Essential services like oil changes, fluid top-ups, and regular inspections to ensure peak performance.
                </p>
                <Link to="/service-details/routine-maintenance" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.png" alt="Routine Maintenance & Fluid Checks" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Brake Repair & Replacement" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details/brake-repair">Brake Repair & Replacement</Link>
                </h4>
                <p className="service-card_text">
                  Expert brake pad, rotor, and caliper repairs and replacements for safe driving.
                </p>
                <Link to="/service-details/brake-repair" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.png" alt="Brake Repair & Replacement" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;