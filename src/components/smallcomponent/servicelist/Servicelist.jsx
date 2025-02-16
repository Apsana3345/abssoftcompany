import React from "react";
import { ServiceCardConstant } from "../../../constant/ServiceCardConstant";

import "./Servicelist.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Circle from "../circle/Circle";
const Servicelist = () => {
  return (
    <div className="list-main">
      {ServiceCardConstant.map((item) => (
        <div className="container" key={item.id}>
          <div className="icon-container">
            <Icon className="icon-class" icon={item.icon} />
            <Circle/>
          </div>
          <h1 className="service-head">{item.title}</h1>
          <h2 className="service-para">{item.description}</h2>
          <button className="btn-read">{item.button}</button>
        </div>
      ))}
    </div>
  );
};

export default Servicelist;
