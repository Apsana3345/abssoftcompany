import React from "react";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./Navlist.css";
import { NavListConstant } from "../../../constant/NavConstant";
import { Icon } from "@iconify/react/dist/iconify.js";
const Navlist = () => {
  
  return (
    <>
      {
        NavListConstant.map((item) => (
          <NavLink  className="link"
          key={item.id} to={item.link}  >
            {item.label}<Icon icon={item.icon}> </Icon>
          </NavLink>
         
        )) 
      }
    </>
  );
};

export default Navlist;
