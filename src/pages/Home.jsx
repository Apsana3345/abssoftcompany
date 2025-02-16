import React from "react";
import About from "../components/about/About";
import Cursor from "../components/cursor/Cursor";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";
import Trust from "../components/trust/Trust";
import Work from "../components/work/Work";
import Popup from "../components/popup/Popup";

const Home = () => {
  return (
    <div>
      <Cursor />
      <Hero />
       <Popup/>
      <About />
      <Services />
      <Work />
      <Trust />
      <Testimonial />
    </div>
  );
};

export default Home;
