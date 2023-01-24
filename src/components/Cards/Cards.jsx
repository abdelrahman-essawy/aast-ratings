import React from 'react'
import { CardTemplete } from './CardTemplete'
import { DesktopSlider } from './DesktopSlider'
import { MobileSlider } from './MobileSlider'

export const Cards = () => {
    const lecturers = [
        {
            name: 'Dr. Mohamed Elsayed',
            courses: ['Digital Logic', 'Calculas 2', 'Marketing', 'IS Theory'],
            icon: '',
            country: 'Egypt',
            reviews: 4
        },
        {
            name: 'Dr. Mohamed Elsayed',
            courses: ['Digital Logic', 'Calculas 2', 'Marketing', 'IS Theory'],
            icon: '',
            country: 'Egypt',
            reviews: 3
        },
        {
            name: 'Dr. Mohamed Elsayed',
            courses: ['Digital Logic', 'Calculas 2', 'Marketing', 'IS Theory'],
            icon: '',
            country: 'Egypt',
            reviews: 2
        },

    ]

    return (
        <>
            <div className='hidden sm:block'>
                <DesktopSlider lecturers={lecturers}  />
            </div>
            <div className='sm:hidden flex justify-center items-center w-full'>
                <MobileSlider lecturers={lecturers} />
            </div>

        </>




    )
}
