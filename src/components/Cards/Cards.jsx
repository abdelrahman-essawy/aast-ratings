import React from 'react'
import { CardTemplete } from './CardTemplete'
import { DesktopSlider } from './DesktopSlider'
import { MobileSlider } from './MobileSlider'

export const Cards = () => {
    const lecturers = [
        {
            name: 'Eng. Salma Yasser',
            courses: ['Digital Logic', 'Calculas 2', 'Marketing', 'IS Theory'],
            icon: '',
            country: 'Egypt',
            city: 'Cairo',
            campus: 'Cairo',
            ratings: 4,
            reviews: 100
        },
        {
            name: 'Dr. Karim Elsayed',
            courses: ['Digital Logic', 'Calculas 2', 'Marketing', 'IS Theory'],
            icon: '',
            country: 'Egypt',
            ratings: 3,
            reviews: 140
        },
        {
            name: 'Eng. Ahmed Elsayed',
            courses: ['Digital Logic', 'Calculas 2', 'Marketing', 'IS Theory'],
            icon: '',
            country: 'Egypt',
            ratings: 2,
            reviews: 120
        },

    ]

    return (
        <>
            <div className='hidden sm:block'>
                <DesktopSlider lecturers={lecturers} />
            </div>
            <div className='sm:hidden flex justify-center items-center'>
                <MobileSlider lecturers={lecturers} />
            </div>

        </>




    )
}
