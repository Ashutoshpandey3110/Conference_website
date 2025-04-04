import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
        
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >   
             {/* <SwiperSlide><img src="https://i.postimg.cc/J42hsCPZ/2-scientist.png" /></SwiperSlide>       */}
            <SwiperSlide><img src="https://i.postimg.cc/vZgyyTkp/image.png" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/0jDVqSGQ/Image-1-00001.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/fyY06783/nit-patna-005.jpg" /></SwiperSlide>
            {/* <SwiperSlide><img src="https://i.postimg.cc/sgvVmgT5/Screenshot_2024-07-31_154315.png"/></SwiperSlide> */}
            
            
          </Swiper>
        </>
      );
}

export default Slider

