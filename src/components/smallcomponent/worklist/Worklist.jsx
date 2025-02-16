import React from "react";

import "./Worklist.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { WorkConstant } from "../../../constant/WorkConstant";
import Circle from "../circle/Circle";
const Worklist = () => {

    // console.log(WorkConstant);

  return (
    <div className="list-W-main">
        
      {WorkConstant.map((item) => (
        <div className="W-container" key={item.id}>
          <div className="icon-W-container">
            <p className="paraCircle" >{item.name}</p>
            <Circle/>
          </div>
          <Icon  className="second-icon"  icon={item.icons}/>
          <h1 className="work-head">{item.title}</h1>

          <h2 className="work-para">{item.description}</h2>
         
        </div>
      ))}
      
     
    </div>
     
  );
};

export default Worklist;
