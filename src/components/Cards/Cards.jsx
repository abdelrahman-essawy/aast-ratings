import React, { use } from 'react'
import { DesktopSlider } from './DesktopSlider'
import { MobileSlider } from './MobileSlider'

const fetcher = async (endPoint = 'https://aast-ratings.vercel.app/api/lecturer/topRated') => await fetch(endPoint).then(res => res.json())

export const revalidate = 0

export const Cards = () => {
    const lecturers = use(fetcher())

    return (
        <div>

            <div className='hidden sm:block'>
                <DesktopSlider lecturers={lecturers} />
            </div>
            <div className='sm:hidden flex justify-center'>
                <MobileSlider lecturers={lecturers} />
            </div>

        </div>




    )
}
