import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/1.avif'
import img2 from '../../../assets/2.avif'
import img3 from '../../../assets/3.avif'
import img4 from '../../../assets/4.avif'
import img5 from '../../../assets/5.avif'
import img6 from '../../../assets/6.avif'

const Gallery = () => {
    return (
        <div className='mx-auto max-w-7xl my-20'>
           
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img2} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img3} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img4} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img5} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img6} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img2} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="group inline-block overflow-hidden relative">
                        <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img3} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;