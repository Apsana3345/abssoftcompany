import React, { useState, useEffect } from "react";
import "./Hero.css";
import Wrapper from "../layout/Wrapper";
import { HeroConstantList } from "../../constant/HeroConstant";

const Hero = () => {
  const [index, setIndex] = useState(1); // Track current slide
  const [fade, setFade] = useState(true); // Track animation state

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % HeroConstantList.length); // Change slide
        setFade(true); 
      }, 500); 
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  const hero = HeroConstantList[index]; 
  

  return (
    <div
      className="heroMain"
      style={{
        backgroundImage: `url(${hero.img})`, 
        
      
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
        
      }}
    >
     

      
<div className="scroll-top">↑</div>
        <Wrapper>
      <section className="herosection">
      <div className="center">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
          <div className={`hero-text ${fade ? "slide-in" : "slide-out"}`}>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="firstHeading">{hero.label}</p>
            <p className="secondHeading">
              {hero.text1}
            </p>
            <p className="thirdHeading">{hero.description}</p>
          </div>
        </section>
        </Wrapper>

        {/* <div className="rightarrow">
          <span className="arrow">→</span>
        </div> */}
    </div>
  );
};

export default Hero;
