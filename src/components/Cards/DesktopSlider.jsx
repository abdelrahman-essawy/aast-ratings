"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { CardTemplete } from './CardTemplete';

export const DesktopSlider = ({ lecturers }) => {
    return (

        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                lecturers.map(({ name, desc, icon, country }, index) => {

                    return <SwiperSlide key={index}>
                        <CardTemplete name={name} desc={desc} icon={icon} country={country} />
                    </SwiperSlide>
                })
            }

        </Swiper>
    )
}
