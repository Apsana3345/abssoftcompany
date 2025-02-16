import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Hamburger.css";
import Navlist from "../navlist/Navlist";
const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hamburger-main">
      <button  className="hamburger-btn"  onClick={() => setOpen(!open)}>
        
       {open? <Icon className="hamburger-icon" icon="bitcoin-icons:cross-filled" />:<Icon className="hamburger-icon" icon="pajamas:hamburger" />}
      </button>
     
      {open &&<div className="hamburger-mobile-list">
<Navlist />

      </div>}
    
    </div>
  );
};

export default Hamburger;
