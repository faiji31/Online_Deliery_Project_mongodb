import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import monster from '../../../assets/brands/moonstar.png'
import amazonvector from '../../../assets/brands/amazon_vector.png'
import casio from '../../.../../../assets/brands/casio.png'
import start from '../../../assets/brands/start.png'
import randstad from '../../../assets/brands/randstad.png'
import startpeople from '../../../assets/brands/start-people 1.png'

const barndsLogo =[
  amazon,
  monster,
  amazonvector,
  casio,
  start,
  randstad,
  startpeople
]

const Brands = () => {
  return (
    <Swiper
    loop={true}
     slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}>
          {
            barndsLogo.map((logo,index)=><SwiperSlide key={index}><img src={logo} alt="brand logo"/></SwiperSlide>)
          }
      
      
    </Swiper>
  );
};

export default Brands;
