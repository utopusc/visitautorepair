import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets/img/normal/about_2-1.png" alt="Fixturbo" />
              </div>
              <div className="about-img-2">
                <img src="assets/img/normal/about_2-2.png" alt="Fixturbo" />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src="assets/img/icon/about_icon2-1.svg" alt="Trusted Customer" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={5} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">Trusted Customers</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/about_icon2-2.png" alt="Experience" />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">10</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">Years of Experience</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">About Us</span>
                <h2 className="sec-title">
                  Your Trusted Partner in Auto Repair{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="Fixturbo"
                  />
                </h2>
                <p className="sec-text">
                  At Visit Auto Repair, we are committed to delivering exceptional auto repair services with a focus on quality, trust, and customer satisfaction. With years of experience in the industry, our certified technicians are equipped with the latest technology and expertise to handle all types of vehicle issues.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-3.svg" alt="Quality Service" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    Quality Service
                  </h5>
                  <p className="about-feature-text">
                    From regular maintenance to complex repairs, we ensure your vehicle is serviced to the highest standards for peak performance and safety.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-4.svg" alt="Advanced Technique" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Advanced Techniques</h5>
                  <p className="about-feature-text">
                    Our team uses state-of-the-art diagnostic tools and repair techniques to provide precise and reliable services.
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

export default AboutTwo;