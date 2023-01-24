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
        <div className='m-auto w-full flex flex-col gap-8 justify-center items-center max-w-screen-md'>
            <h2>
                <span className='text-2xl font-bold text-center'>Top Rated Lecturers</span>

            </h2>
            <div
                className='grid grid-cols-3 gap-16 justify-center  m-auto'
            >
                {
                    lecturers.map(({ name, desc, icon, country }, index) => {

                        return <CardTemplete key={index} name={name} desc={desc} icon={icon} country={country} className={`${index == 1 ? 'scale-110' : ''}`} />

                    })
                }

            </div>
        </div>

    )
}
