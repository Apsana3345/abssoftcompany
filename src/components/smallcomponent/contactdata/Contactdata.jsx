import React from "react";
import "./Contactdata.css";
import Wrapper from "../../layout/Wrapper";
import { ContactConstant } from "../../../constant/ContactConstant";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contactdata = () => {
  return (
    <section className="contactdata">
      <Wrapper>
        <div className="contactdata-section">
          {ContactConstant.map((item) => (
            <div className="contact-data-inside" key={item.id} to={item.link}>
              <div className="icon-contact-data">
                <Icon className="contactdataicon" icon={item.icon} />
              </div>
              <div className="contactdatainfo">
                <p className="dataname">{item.title}</p>
                <a href={item.link} className="datasecond">
                  {item.label}
                </a>
                <a href={item.link1} className="datathird">
                  {item.label1}
                </a>
              </div>
            </div>
          ))}
        </div>



        
      </Wrapper>
    </section>
  );
};

export default Contactdata;
