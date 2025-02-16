import React from "react";
import "./About.css";

import imagehead from "../../assets/shape.svg"

import { Icon } from "@iconify/react";
import aboutImage from "../../assets/abut.png";
import iconImage from "../../assets/iconImage.svg";

import Wrapper from "../layout/Wrapper";
import Circle from "../smallcomponent/circle/Circle";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate= useNavigate();
  return (
    <section className="about-section">
      <Wrapper>
        <div className="about-main">
          <div className="leftImage">
            <img src={aboutImage} alt="" />
            <div className="downCircle">
              <div className="value">6</div>
              <div className="years">Years of experience</div>
            </div>
          </div>
          <div className="right-description">
            <div className="head">

            <img src={imagehead} alt="" />
            <h2 className="about-title">ABOUT US</h2>
            </div>
            <div className="title">
              <p className="heading">
                {" "}
                We Are Increasing Business Success With{" "}
                <span className="span-text">IT Solution</span>
              </p>
            </div>

            <div className="para">
              ABS Soft is renowned for excellence in Information Technology,
              serving as a trusted partner for businesses in Nepal. With our
              steadfast dedication and expertise, we design tailored, long-term
              solutions to elevate your digital landscape. We recognize the
              journey of small businesses and are here to illuminate the path to
              success. Count on ABS Soft to empower your growth and lead you to
              prosperity.
            </div>

            <div className="team">
              <div className="right-about">
                <div className="icon">
                  <img src={iconImage} alt="" />
                </div>
                <div className="text-about">
                  <p className="upper">
                    24/7 <br /> Support
                  </p>
                  <p className="lower">
                    Provides <br />
                    24/7 <br />
                    support
                  </p>
                </div>
              </div>

              <div className="left">
                <p className="upper">Expert Team</p>
                <p className="lower">100% Expert Team</p>
              </div>
            </div>

            <div className="line"></div>
            <div className="about-contact">
              <div className="about-button">
                <button className="butn1" onClick={()=>navigate('/about-us')}
                
                >Explore More →</button>
                <div className="number">
                  <div className="number-center">
                      <Icon
                        className="phone-icon"
                        icon="solar:phone-bold"
                      />
                    <Circle/>
                  </div>
                  <div className="rightContact">
                    <p className="lower">Call Us On:</p>
                    <a className="num" href="tel:+977 9802630721">
                      9802630721
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
