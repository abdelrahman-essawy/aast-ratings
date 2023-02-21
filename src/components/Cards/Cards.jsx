import React, { use } from 'react'
import { MobileSlider } from './MobileSlider'
import { DesktopSlider } from './DesktopSlider'



export const Cards = ({ lecturers, hero, skeleton = false }) => {

    const skeletonLecturers = [
        {
            name: 'Loading...',
            rating: 0,
            image: 'https://aast-ratings.vercel.app/images/lecturers/placeholder.png',
            department: 'Loading...',
            id: 0

        },
        {
            name: 'Loading...',
            rating: 0,
            image: 'https://aast-ratings.vercel.app/images/lecturers/placeholder.png',
            department: 'Loading...',
            id: 1
        }, {
            name: 'Loading...',
            rating: 0,
            image: 'https://aast-ratings.vercel.app/images/lecturers/placeholder.png',
            department: 'Loading...',
            id: 0

        }]

    return (
        <div>

            <div className='hidden sm:block'>
                <DesktopSlider
                    hero={hero}
                    lecturers={skeleton ? skeletonLecturers : lecturers}
                />
            </div>
            <div className='sm:hidden flex justify-center'>
                <MobileSlider
                    lecturers={skeleton ? skeletonLecturers : lecturers}
                />
            </div>

        </div>




    )
}
