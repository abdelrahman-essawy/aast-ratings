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

    // {
    //     id: 'salma-yasser-computer-science-alexandria-85',
    //         name: 'Salma Yasser',
    //             rating: 0,
    //                 personalSideRating: 0,
    //                     scientificSideRating: 0,
    //                         recommendationRating: 0,
    //                             createdAt: '2023-02-10T08:50:47.151Z',
    //                                 updatedAt: '2023-02-10T08:50:47.151Z',
    //                                     teachCourses: [],
    //                                         workInColleges: [[Object]],
    //                                             hasReviews: []
    // }

    const {  } = lecturers
    return (

        <div className='grid grid-cols-3 gap-16 justify-center items-center m-auto max-w-screen-lg'
        >
            {
                lecturers
                    .sort((a, b) => b.ratings - a.ratings)
                    .slice(0, 3)
                    .map(({ name, icon, college, courses, ratings }, index) => {

                        return <CardTemplete key={index} name={name} college={college} amountOfReviews={45} icon={icon} courses={courses} className={`${index === 0 ? 'scale-110 sm:hover:scale-[115%]' : ''} ${index === 1 ? 'order-first' : 'order-last'}`} />

                    })
            }

        </div>

    )
}
