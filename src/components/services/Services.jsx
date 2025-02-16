import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import servicesBg from "../../assets/service_bg_1.png";
import Wrapper from "../layout/Wrapper";
import Servicelist from "../smallcomponent/servicelist/Servicelist";
const Services = () => {
  const navigate = useNavigate(); 
  return (
    <div
      className="services-main"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Wrapper>
        <div className="services-section">
          <div className="service-heading">
          
            <h2 className="service-title">OUR SERVICES</h2>
          </div>
          <div className="title">
            <p className="heading">
            
              We Provide Exclusive <span className="span-text">
                Service <br />
              </span>
              For Your Business
            </p>
          </div>

          <div className="service-card">
            <Servicelist />

            {/* smallCard */}
          </div>
          <div className="service-button">
            <button className="service-btn1"  onClick={()=>navigate('/services')}>View All Services →</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
