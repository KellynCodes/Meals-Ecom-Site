import React from "react";
import NiceLogo from "../images/nicelogo.jpg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_up">
          <div className="company_logo">
            <img src={NiceLogo} alt="" />
            <h3>Meals</h3>
          </div>

          <div className="links">
            <ul className="company">
              <h4>Company</h4>
              <a href="/blog">Blog</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </ul>

            <ul className="services">
              <h4>Services</h4>
              <a href="/faqs">FAQs</a>
              <a href="/our-menu">Our Menu</a>
            </ul>

            <div className="social_links">
              <div className="social_icon">
                <i className="bi bi-facebook"></i>
              </div>

              <div className="social_icon">
                <i className="bi bi-instagram"></i>
              </div>

              <div className="social_icon">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_down">
          <div className="copyright">
            <p>
              &copy; <b>2022</b> Meals Alright Reserved
            </p>
          </div>

          <div className="social_links">
            <div className="social_icon">
              <i className="bi bi-facebook"></i>
            </div>

            <div className="social_icon">
              <i className="bi bi-instagram"></i>
            </div>

            <div className="social_icon">
              <i className="bi bi-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
