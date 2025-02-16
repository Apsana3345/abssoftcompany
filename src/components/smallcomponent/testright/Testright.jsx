
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestConstant } from '../../../constant/TestConstant';
import './Testright.css';


const Testright = () => {
  return (
    <div className="card-slider-container">
      <Swiper
      
        spaceBetween={55} 
        autoplay={{
          
          delay: 2000,
          reverseDirection: true, // Reverse the autoplay direction
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={{ type: "bullets", clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="swiper "
        speed={800}
      >
        {TestConstant.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <p className="first-par">{item.text}</p>
             <div className="imageINFO">
              <img  className="item-img"src={item.img} alt={item.imgname} />
            <div className="imgside-info">
            <h3>{item.imgname}</h3>
            <p className="side-info">{item.imginfo || item.imageinfo}</p>
            </div>

             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testright;

