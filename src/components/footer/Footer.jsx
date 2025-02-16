import React from "react";
import "./Footer.css";
import logofooter from "../../assets/abslogo.png";
import Wrapper from "../layout/Wrapper";
import FooterSecondSection from "../smallcomponent/secondsectionfooter/FooterSecondSection";

const Footer = () => {
  return (
    <section className="footer">
      <Wrapper>
        <div className="footer-main">
          <div className="footer-first-section">
            <div className="first-left">
              <div className="logoImage">
                <img className="logofooter" src={logofooter} alt="" />
              </div>
              <div className="logo-side">
                <p className="info">Call For More Info</p>
                <a href="tel:+977 9802630721">9802630721</a>
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
                <button className="btntalk">Let's Talk</button>
              </div>
            </div>
          </div>
          <div className="footer-second-section">

<FooterSecondSection/>



          </div>

          <div className="footer-third-section">
            <div className="footer-line"></div>
            <div className="footer-copyright">
              <span className="copyright-text">
                Copyright &copy; 2025{" "}
                <span className="abs">A.B.S Soft Pvt. Ltd. </span> All Rights
                Reserved.
              </span>
              <span className="career"> Careers | Privacy Policy</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
