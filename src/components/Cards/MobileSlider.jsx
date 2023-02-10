"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper";
import { CardTemplete } from './CardTemplete';

export const MobileSlider = ({ lecturers }) => {
    return (
        <Swiper
            className='!items-stretch'
            effect={"cards"}
            modules={[EffectCards, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            lazy={true}
            centeredSlides={true}
            rewind={true}
        >
            {
                lecturers
                    .sort((a, b) => b.ratings - a.ratings)
                    .slice(0, 3)
                    .map(({ name, icon, rating, amountOfReviews, role, teachCourses, workInColleges, id }, index) =>

                        <SwiperSlide
                            key={index} className='!items-stretch'>
                            <CardTemplete
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
