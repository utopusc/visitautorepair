import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaOneMultiImg = () => {
  const services = [
    {
      title: "Complete Vehicle Diagnostics",
      description: "We use advanced diagnostic equipment to accurately identify electrical and mechanical issues in your vehicle."
    },
    {
      title: "Routine Maintenance & Fluid Services",
      description: "Oil changes, filters, and full fluid inspections that keep your car running smoothly and extend its life."
    },
    {
      title: "Brake Repair & Replacement",
      description: "Pads, rotors, ABS systems and hydraulic components—safe and reliable brake service for every vehicle."
    },
    {
      title: "Engine Repair & Performance",
      description: "Full engine troubleshooting including leaks, misfires, sensor faults, overheating, and performance issues."
    },
    {
      title: "Transmission Repair & Replacement",
      description: "Professional diagnosis and repair for shifting problems, leaks, and internal transmission failures."
    },
    {
      title: "Suspension, Shocks & Struts",
      description: "We repair shocks, struts, control arms, and all suspension components to restore a smooth and stable ride."
    },
    {
      title: "Steering System Repair",
      description: "Fixing issues such as stiff steering, loose steering, EPS warning lights, and power steering failures."
    },
    {
      title: "Tire Services (Rotation, Alignment & Balancing)",
      description: "Tire rotation, wheel alignment, and balancing to improve tire life and driving safety."
    },
    {
      title: "Tire Sales & Installation",
      description: "Affordable new tires with professional installation and same-day service options."
    },
    {
      title: "Air Conditioning & Heating Repair",
      description: "A/C recharge, leak repair, compressors, blower motors, and heating system troubleshooting."
    },
    {
      title: "Battery Testing & Replacement",
      description: "Battery load testing, replacement, and full charging system inspection (alternator & voltage regulation)."
    },
    {
      title: "Exhaust & Muffler Repair",
      description: "Muffler repairs, catalytic converters, and fixing exhaust leaks for better performance and safety."
    },
    {
      title: "Cooling System Services (Radiator & Thermostat)",
      description: "Radiator, thermostat, water pump, and cooling hose repairs to prevent overheating."
    },
    {
      title: "Electrical System Repairs",
      description: "Complete electrical diagnostics and repair for lights, starters, alternators, and wiring issues."
    },
    {
      title: "Fuel Injection & System Cleaning",
      description: "Fuel injector cleaning, fuel pump repair, and system maintenance for optimal engine performance."
    },
    {
      title: "Check Engine Light Diagnostics",
      description: "Accurate scan tool diagnostics with clear explanations and solutions for all warning lights."
    },
    {
      title: "Hybrid & Electric Vehicle Services",
      description: "Battery inspection, cooling system service, and advanced diagnostics for hybrid and EV models."
    },
    {
      title: "Window & Windshield Replacement",
      description: "Windshield replacement, window repair, and fixing power-window motor or regulator issues."
    },
    {
      title: "Body Repair & Painting",
      description: "Dents, scratches, bumper repairs, and full professional paint services."
    },
    {
      title: "Performance Upgrades & Customization",
      description: "Custom exhaust systems, suspension upgrades, and performance tuning for enhanced driving experience."
    },
    {
      title: "Headlight & Taillight Replacement",
      description: "Bulb replacement, headlight restoration, and LED/HID upgrades for improved visibility."
    },
    {
      title: "Drivetrain Repair (Axles, Differentials, CV Joints)",
      description: "Complete drivetrain diagnostics and repair for smooth power delivery and handling."
    },
    {
      title: "Fleet Maintenance & Repair Services",
      description: "Comprehensive maintenance programs for businesses with multiple vehicles."
    },
    {
      title: "Off-Road Vehicle & 4x4 Services",
      description: "Specialized service for trucks, SUVs, and off-road vehicles including lift kits and 4WD systems."
    },
    {
      title: "Diesel Engine Services",
      description: "Expert diesel engine maintenance, turbo repair, and fuel system service."
    },
    {
      title: "Emission Testing & Repair",
      description: "State emission testing and repairs to ensure your vehicle meets environmental standards."
    },
    {
      title: "Clutch Repair & Replacement",
      description: "Manual transmission clutch diagnostics, repair, and replacement services."
    },
    {
      title: "Trailer Hitch Installation & Towing Services",
      description: "Professional hitch installation and towing package setup for all vehicle types."
    }
  ];

  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Professional Auto Repair Services
              </h2>
              <p className="sec-text">
                With over 25 years of experience, we provide comprehensive automotive services to keep your vehicle running at its best.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card style-shadow">
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <Link to="/contact">{service.title}</Link>
                  </h4>
                  <p className="service-card_text">
                    {service.description}
                  </p>
                  <Link to="/contact" className="link-btn">
                    Schedule Service <i className="fas fa-arrow-right" />
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
