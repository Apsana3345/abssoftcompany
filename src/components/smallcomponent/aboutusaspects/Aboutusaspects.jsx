import React from "react";
import "./Aboutusaspects.css";
import aspectrightImage from "../../../assets/aboutt.jpeg";
import imageaspect from "../../../assets/shape.svg";
import Wrapper from "../../layout/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AboutaspectConstant } from "../../../constant/AboutusConstant";
const Aboutusaspects = () => {
  return (
    <section className="aspect-section">
      <Wrapper>
        <div className="aspect-main">
          <div className="left-description">
            <div className="head-aspect">
              <img src={imageaspect} alt="" />
              <h2 className="about-title-aspect">WHY CHOOSE US</h2>
            </div>
            <div className="title-aspects">
              <p className="heading-aspects">
                We Deal With The Aspects  <br /> Professional 
                <span className="span-text-aspect"> IT Services</span>
              </p>
            </div>

            <div className="aboutaspectsdeal">
              {AboutaspectConstant.map((item,index) => (
                <div className="deals" key={item.id}>
                  {/* <div className="aspects-deal"> */}
                    <Icon icon="simple-line-icons:check" /> {item.label}
                  {/* </div> */}
                  {/* <div className="second-deal">
                    {item.label1}</div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-right-Image">
            <img src={aspectrightImage} alt="" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Aboutusaspects;
