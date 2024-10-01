import React from "react";

const ContactArea = () => {
  return (
    <>
      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h6 className="contact-info_title">Address</h6>
                <p className="contact-info_text">
                  5034 Chiles Rd #E <br /> Davis, CA 95618
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <h6 className="contact-info_title">Phone Number</h6>
                <p className="contact-info_text">
                  <a href="tel:+19168221168">(916) 822 1168</a>
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-clock" />
                </div>
                <h6 className="contact-info_title">Opening Hours</h6>
                <p className="contact-info_text">Monday - Saturday: 9 AM to 7 PM</p>
                <p className="contact-info_text">Closed on Sundays</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <h6 className="contact-info_title">E-mail</h6>
                <p className="contact-info_text">
                  <a href="mailto:visitautorepair@gmail.com">visitautorepair@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;