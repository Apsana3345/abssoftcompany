import React from "react";
import "./Work.css";
import Workbg from "../../assets/Workbg.png";
import Wrapper from "../layout/Wrapper";
import Worklist from "../smallcomponent/worklist/Worklist";
const Work = () => {
  return (
    <div
      className="Work-main"
      style={{
        backgroundImage: `url(${Workbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Wrapper>
        <div className="services-section">
          <div className="service-heading">
           
            <h2 className="service-title">WORK PROCESS</h2>
          </div>
          <div className="title">
            <p className="heading">
              
              How To Work <span className="span-text">
                It
              </span>
             
            </p>
          </div>

          <div className="service-card">
            <Worklist/>
            
          </div>
         
        
        </div>
      </Wrapper>
    </div>
  );
};

export default Work;
