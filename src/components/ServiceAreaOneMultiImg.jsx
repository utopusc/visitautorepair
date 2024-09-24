import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaOneMultiImg = () => { 
  const services = [
    "Complete Vehicle Diagnostics",
    "Routine Maintenance & Fluid Checks",
    "Brake Repair & Replacement",
    "Engine Repair, Rebuilding, & Tuning",
    "Transmission Repair & Replacement",
    "Suspension, Shocks & Struts",
    "Steering System Repair",
    "Tire Services (Rotation, Alignment, Balancing)",
    "Tire Sales & Installation",
    "Air Conditioning & Heating Repair",
    "Battery Testing, Replacement & Charging Systems",
    "Exhaust & Muffler Services",
    "Cooling System Services (Radiator & Thermostat)",
    "Electrical System Repairs",
    "Fuel Injection & System Cleaning",
    "Check Engine Light Diagnostics",
    "Hybrid & Electric Vehicle Services",
    "Window & Windshield Repair",
    "Body Repair & Painting",
    "Performance Upgrades & Customization",
    "Headlight & Taillight Replacement",
    "Drivetrain Repair (Axles, Differentials, CV Joints)",
    "Fleet Maintenance & Repair Services",
    "Off-Road Vehicle & 4x4 Services",
    "Convertible Top Repair & Replacement",
    "Diesel Engine Services",
    "Emission Testing & Repair",
    "Ignition System Repair & Key Programming",
    "Clutch Repair & Replacement",
    "Windshield Wiper & Washer System Repair",
    "Rustproofing & Undercoating",
    "Trailer Hitch Installation & Towing Services",
    "Interior Repair (Seats, Upholstery, Dashboards)"
  ];

  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card style-shadow">
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <Link to={`/contact`}>{service}</Link>
                  </h4>
                  <p className="service-card_text">
                    A car repair is a service provided to fix any issues or damages with your{" "}
                  </p>
                  <Link to={`/contact`} className="link-btn">
                    Contact Us <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOneMultiImg;
