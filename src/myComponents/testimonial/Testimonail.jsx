
import "./tesimonail.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import rating1 from "../../../public/rating/rate1.png"
import rating2 from "../../../public/rating/rate2.png"
import rating3 from "../../../public/rating/rate3.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Testimonail() {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  return (
    <>
      <section id='tesimonail' className='tesimonail'>
         <h1 className='titl'>Testimonials</h1>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={rating1} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={rating2} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={rating3} alt="" srcset="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
         </section>
    
    </>
  )
}

export default Testimonail