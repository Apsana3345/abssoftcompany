import React from "react";
import testimonialBg from "../../assets/testimonialBg.jpg";
import "./Testimonial.css";

import imagetest from "../../assets/shape.svg";

import Wrapper from "../layout/Wrapper";
import Testright from "../smallcomponent/testright/Testright";
const Testimonial = () => {
  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <Wrapper>
        <div className="testimonial-main">
          <div className="left-test">
            <div className="test-logo">
              <img src={imagetest} alt="" />
              <h2 className="test-title">Testimonials</h2>
            </div>

            <div className="test-title">
              <h2 className="test-heading">
                Let's hear what the customers Are
                <span className="span-test"> Saying</span>
              </h2>
            </div>

            <div className="left-para">
              "Listen to real customer feedback and experiences to understand
              how our services make a difference."
            </div>

            <div className="test-button">
              <button className="test-btn1">Explore more →</button>
            </div>
          </div>

          {/* <div > */}
            <Testright />
          {/* </div> */}
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
