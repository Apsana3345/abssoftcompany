import React, { useState } from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import Wrapper from "../layout/Wrapper";

import logo from "../../assets/logo1.png";
import { ContactInfo, SocialInfo, SupportConstant } from "../../constant/NavConstant";
import Hamburger from "../smallcomponent/hamburger/Hamburger";
import Navlist from "../smallcomponent/navlist/Navlist";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  



  return (
    <nav className="navbar">
      <div className="main">
        <div className="upperNav">
          <Wrapper>
            <div className="upperNav-inside">
              <section className="uppernav-right">
                {ContactInfo.map((item) => (
                  <div className="contact" key={item.id}>
                    <Icon icon={item.logo} />
                    <a href={item.link} target="_blank" >

                       <p>{item.label}</p>
                        
                       </a>
                  </div>
                ))}
              </section>
              <section className="uppernav-left">
                <p className="follow">Follow Us On:</p>
                {SocialInfo.map((item) => (
                  <a className="contact" key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Icon className="socialLinks" icon={item.logo} />
                  </a>
                ))}
              </section>
            </div>
          </Wrapper>
        </div>

        <div className="nav-main">
          <div className="left"></div>
          <Wrapper>
            <div className="nav-main-inside">
              <section className="nav-logo">
                <figure>
                  <img
                    className="image-logo"
                    src={logo}
                    alt="logo"
                    width="250px"
                  />
                </figure>
              </section>

              <div className="link-button">
                <span></span>
                <section className="navList">
                  <Navlist/>
                </section>

                <section className="btn1">
                  <button className="search-btn">
                    <Icon icon="material-symbols:search-rounded" />
                  </button>
                  <button className="search-btn1">

                  {
        SupportConstant.map((item) => (
          <NavLink  className="linkbtn"
          key={item.id} to={item.link}  >
            {item.label}
          </NavLink>
          
        )) 
      }


                   
                  </button>
                  
                </section>
            
              </div>
              <section className="hamburger-menu">
              <Hamburger />
            </section>
            </div>
          </Wrapper>
          <div className="right"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
