"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper";
import { CardTemplete } from './CardTemplete';

export const MobileSlider = ({ lecturers }) => {

    const sortHighestRatedInMiddle = (lecturers) => {
        lecturers.sort((a, b) => a.rating - b.rating)
        const left = lecturers.slice(0, lecturers.length / 2)
        const right = lecturers.slice(lecturers.length / 2, lecturers.length).reverse()
        return left.concat(right)
    }
    return (
        <Swiper
            className='overflow-visible pt-2 pb-12'
            effect={"cards"}
            modules={[EffectCards, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            lazy={true}
            centeredSlides={true}
            initialSlide={1}
            rewind={true}>
            {
                sortHighestRatedInMiddle(lecturers)
                    .slice(0, 3)
                    .map(({ name, icon, rating, amountOfReviews, role, teachCourses, workInColleges, id }, index) =>

                        <SwiperSlide
                            key={index} className='px-14'>
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
