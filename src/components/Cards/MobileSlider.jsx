"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper";
import { CardTemplete } from './CardTemplete';

export const MobileSlider = ({ lecturers, autoplay = {
    disableOnInteraction: false,
    delay: 3000,
},
    initialSlide = 1,
    className
}) => {

    const sortHighestRatedInMiddle = (lecturers) => {
        lecturers.sort((a, b) => a.rating - b.rating)
        const left = lecturers.slice(0, lecturers.length / 2)
        const right = lecturers.slice(lecturers.length / 2, lecturers.length).reverse()
        return left.concat(right)
    }
    return (
        <Swiper
            className={`overflow-visible pt-2 pb-12 ${className}`}
            effect={"cards"}
            modules={[EffectCards, Autoplay]}
            autoplay={autoplay}
            lazy={true}
            centeredSlides={true}
            initialSlide={initialSlide}
            rewind={true}>
            {
                sortHighestRatedInMiddle(lecturers)
                    //.slice(0, 3)
                    .map(({ name, icon, rating, amountOfReviews, role, teachCourses, workInColleges, id }, index) =>

                        <SwiperSlide
                            key={index} className='px-14'>
                            <CardTemplete
                                index={index}
                                key={id}
                                id={id}
                                name={name}
                                rating={rating}
                                role={role}
                                workInColleges={workInColleges}
                                teachCourses={teachCourses}
                                amountOfReviews={amountOfReviews}
                                icon={icon}
                            />
                        </SwiperSlide>
                    )
            }

        </Swiper>
    )
}
