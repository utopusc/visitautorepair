import React from "react";
import { Link } from "react-router-dom";

const FaqAreaOne = () => {
  return (
    <section className="faq-area-1 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">Any Questions?</span>
              <h2 className="sec-title">
                Everything You Need to Know About Our Services
              </h2>
              <p className="sec-text">
                At Visit Auto Repair, we strive to provide clear and transparent information to enhance your experience. Whether you have questions about our services or your vehicle's needs, we've got you covered. Below are some common inquiries we receive.
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" to="/contact">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    Can I choose which parts to use for my car repair?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Yes, we provide you with options for OEM (Original Equipment Manufacturer) parts as well as high-quality aftermarket parts. Our technicians will guide you to make the best choice for your vehicle and budget.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    How often should I get my car serviced?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      It is generally recommended to service your car every 6,000 miles or 6 months, whichever comes first. Regular maintenance helps ensure your vehicle’s longevity and performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    What should I do if my check engine light is on?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      If the check engine light comes on, it is important to get it diagnosed as soon as possible. Our advanced diagnostic tools can quickly determine the cause and recommend the best course of action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    {" "}
                    How long does it take to repair a car?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      The repair time can vary depending on the complexity of the issue. Simple repairs might take a few hours, while more complex issues could take a few days. We strive to provide accurate time estimates and keep you informed throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;