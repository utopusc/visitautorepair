import React from "react";
import { Link } from "react-router-dom";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service">Mechanic Masters</Link>
                    </li>
                    <li>
                      <Link to="/service">Speedy Auto Repair</Link>
                    </li>
                    <li>
                      <Link to="/service">Mobile Car Repair</Link>
                    </li>
                    <li>
                      <Link to="/service">Pro Auto Fix</Link>
                    </li>
                    <li>
                      <Link to="/service">Precision Auto Works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact">
                  <p>
                    <Link to="tel:888123456765">(916) 822 1168</Link>
                  </p>
                  <p>
                    <Link to="mailto:visitautorepair@gmail.com">visitautorepair@gmail.com</Link>
                  </p>
                  <p>
                    5034 Chiles Rd <br /> #E Davis CA 95618
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">Get In Touch</h3>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email Address"
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Visit Auto Repair</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Tarms &amp; Condition</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
