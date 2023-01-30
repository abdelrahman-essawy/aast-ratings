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

        <div className='grid grid-cols-3 gap-16 justify-center items-center m-auto max-w-screen-lg'
        >
            {
                lecturers
                    .sort((a, b) => b.ratings - a.ratings)
                    .slice(0, 3)
                    .map(({ name, desc, icon, country, courses, ratings, reviews }, index) => {

                        return <CardTemplete key={index} name={name} desc={desc} reviews={reviews} ratings={ratings} icon={icon} courses={courses} country={country} className={`${index === 0 ? 'scale-110 sm:hover:scale-[115%]' : ''} ${index === 1 ? 'order-first' : 'order-last'}`} />

                    })
            }

        </div>

    )
}
