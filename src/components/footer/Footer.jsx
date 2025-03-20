import React from "react";
import "./Footer.css";
import logofooter from "../../assets/abslogo.png";
import Wrapper from "../layout/Wrapper";
import FooterSecondSection from "../smallcomponent/secondsectionfooter/FooterSecondSection";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer-main">
          {/* First Section */}
          <div className="footer-first-section">
            <div className="first-left">
              <div className="logoImage">
                <img className="logofooter" src={logofooter} alt="ABS Logo" />
              </div>
              <div className="logo-side">
                <p className="info">Call For More Info</p>
                <a href="tel:+977 9802630721" className="phone-number">
                  9802630721
                </a>
              </div>
            </div>

            <div className="middle-line"></div>

            <div className="first-right">
              <div className="looking">
                <p className="look">
                  Looking <br />
                  to discuss your <br /> technical needs?
                </p>
              </div>
              <div className="buttonTalk">
                <button 
                  className="btntalk" 
                  onClick={() => navigate("/contact-us")}
                  aria-label="Contact Us"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="footer-second-section">
            <FooterSecondSection />
          </div>

          {/* Third Section */}
          <div className="footer-third-section">
            <div className="footer-line"></div>
            <div className="footer-copyright">
              <span className="copyright-text">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <span className="abs">A.B.S Soft Pvt. Ltd.</span> All Rights
                Reserved.
              </span>
              <span className="career">
                <a href="/careers">Careers</a> | <a href="/privacy">Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;