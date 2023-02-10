import React, { use } from 'react'
import ReviewModal from '../Modal/reviewModal'
import { CardTemplete } from './CardTemplete'
import { DesktopSlider } from './DesktopSlider'
import { MobileSlider } from './MobileSlider'

// const fetcher = async (endPoint = 'http://localhost:3000/api/lecturer/topRated') => await fetch(endPoint, {
//     next: {
//         revalidate: 60
//     }
// }).then(res => res.json())


export const Cards = () => {
    const lecturers = [
        {
            "id": "salma-yasser-computer-science-alexandria-37",
            "name": "Salma Yasser",
            "role": "eng",
            "rating": 4,
            "amountOfReviews": 5,
            "teachCourses": [
                {
                    "id": "software-engineering-computer-science-alexandria",
                    "name": "Software Engineering"
                },
                {
                    "id": "digital-logic-computer-science-alexandria",
                    "name": "Digital Logic"
                }
            ],
            "workInColleges": [
                {
                    "id": "computer-science-alexandria",
                    "name": "Computer Science"
                }
            ]
        },
        {
            "id": "ahmed-mohamed-computer-science-alexandria-70",
            "name": "Ahmed Mohamed",
            "role": "dr",
            "rating": 0,
            "amountOfReviews": 0,
            "teachCourses": [],
            "workInColleges": [
                {
                    "id": "computer-science-alexandria",
                    "name": "Computer Science"
                }
            ]
        },
        {
            "id": "abdelrahman-essawy-computer-science-alexandria-1",
            "name": "Abdelrahman Essawy",
            "role": "eng",
            "rating": 0,
            "amountOfReviews": 0,
            "teachCourses": [],
            "workInColleges": [
                {
                    "id": "computer-science-alexandria",
                    "name": "Computer Science"
                }
            ]
        }
    ]

    // const lecturers = use(fetcher())

    return (
        <div className='h-fit py-12 pt-8'>
            <h2 className='text-2xl font-bold text-center mb-8 sm:mb-14'>Top Rated Lecturers</h2>

            <div className='hidden sm:block'>
                <DesktopSlider lecturers={lecturers} />
            </div>
            <div className='sm:hidden flex justify-center items-center px-4'>
                <MobileSlider lecturers={lecturers} />
            </div>

        </div>




    )
}
