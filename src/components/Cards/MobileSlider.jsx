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
                    .map(({ name, desc, icon, country, courses, ratings, reviews }, index) =>

                    <SwiperSlide
                        key={index}>
                        <CardTemplete name={name} desc={desc} icon={icon} ratings={ratings} reviews={reviews} country={country} courses={courses} />
                    </SwiperSlide>
                )
            }

        </Swiper>
    )
}
