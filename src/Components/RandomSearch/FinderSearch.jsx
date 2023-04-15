import React from 'react';
import './FinderSearch.css';



import pic1 from './photo/pic1.jfif';
import pic2 from './photo/pic2.jfif';
import pic3 from './photo/pic3.jfif';
import pic4 from './photo/pic4.jfif';
import pic5 from './photo/pic5.jfif';
import pic6 from './photo/pic6.jfif';
import pic7 from './photo/pic7.jfif';
import pic8 from './photo/pic8.jfif';
import pic9 from './photo/pic9.jfif';
import pic10 from './photo/pic10.jfif';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation ,Autoplay} from "swiper";

const FinderSearch = () => {
  return (
    <>
    <div mainContainerBG>

      <div className='titleMatch'>
        <p>IT'S SERIOUSLY MATCH!</p>
      </div>



    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={pic1} /> </SwiperSlide>
        <SwiperSlide> <img src={pic2} /> </SwiperSlide>
        <SwiperSlide> <img src={pic3} /> </SwiperSlide>
        <SwiperSlide> <img src={pic4} /> </SwiperSlide>
        <SwiperSlide> <img src={pic5} /> </SwiperSlide>
        <SwiperSlide> <img src={pic6} /> </SwiperSlide>
        <SwiperSlide> <img src={pic7} /> </SwiperSlide>
        <SwiperSlide> <img src={pic8} /> </SwiperSlide>
        <SwiperSlide> <img src={pic9} /> </SwiperSlide>
        <SwiperSlide> <img src={pic10} /> </SwiperSlide>
      </Swiper>
    
      </div>
    </>
  )
}

export default FinderSearch