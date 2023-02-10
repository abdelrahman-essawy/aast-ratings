import React, { use } from 'react'
import { DesktopSlider } from './DesktopSlider'
import { MobileSlider } from './MobileSlider'

const fetcher = async (endPoint = 'https://aast-ratings.vercel.app/api/lecturer/topRated') => await fetch(endPoint, {
    next: {
        revalidate: 60
    }
}).then(res => res.json())


export const Cards = () => {
    const lecturers = use(fetcher())

    return (
        <div className='h-fit py-12 pt-8'>
            <h2 className='text-2xl font-bold text-center mb-8 sm:mb-14'>Top Rated Lecturers</h2>

            <div className='hidden sm:block'>
                <DesktopSlider lecturers={lecturers} />
            </div>
            <div className='sm:hidden flex justify-center items-stretch px-4'>
                <MobileSlider lecturers={lecturers} />
            </div>

        </div>




    )
}
