"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { CardTemplete } from './CardTemplete';
import ReviewModal from '../Modal/reviewModal';

export const DesktopSlider = ({ lecturers }) => {

    return (

        <div className='grid grid-cols-3 gap-16 justify-center items-center m-auto max-w-screen-lg'
        >
            {
                lecturers
                    .slice(0, 3)
                    .map(({ name, icon, rating, amountOfReviews, role, teachCourses, workInColleges, id }, index) => {

                        return <CardTemplete
                            key={id}
                            id={id}
                            name={name}
                            rating={rating}
                            role={role}
                            workInColleges={workInColleges}
                            teachCourses={teachCourses}
                            amountOfReviews={amountOfReviews}
                            icon={icon}
                            className={`${index === 0 ? 'scale-110 sm:hover:scale-[115%]' : ''} ${index === 1 ? 'order-first' : 'order-last'}`} />



                    })
            }

        </div>

    )
}
