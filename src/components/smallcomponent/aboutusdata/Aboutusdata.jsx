import React from "react";
import "./Aboutusdata.css";
import { AboutusConstant } from "../../../constant/AboutusConstant";
import Wrapper from "../../layout/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";

const Aboutusdata = () => {
  return (
    <section className="aboutusdata-section">
      <Wrapper>
        <div className="aboutusdata-main">
          {AboutusConstant.map((item) => (
            <div className="aboutus-main" key={item.id}>
              <div className="icon-img">
                <Icon className="aboutdataicon" icon={item.icon} />
              </div>
              <div className="data-info">
                <p className="number-data">{item.number}</p>
                <p className="number-text">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Aboutusdata;
