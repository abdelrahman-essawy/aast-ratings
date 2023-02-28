import React from 'react'
import { Achievements } from '../../Lecturer/Achievements'
import { Contacts } from '../../Lecturer/Contacts'
import { Courses } from '../../Lecturer/Courses'
import { Ratings } from '../../Lecturer/Ratings'

type contacts = [{
    name: string
    value: string
}]

const DesktopUpperSection = (
    {
        contacts,
        achievements,
        rating,
        hasReviews,
        amountOfReviews,
        teachCourses
    }
) => {
    return (
        <section className="gap-3 grid-cols-3 hidden md:grid">

            <div className="flex flex-col items-start gap-3 max-h-[304px]">

                <div className="w-full">

                    <Contacts contacts={contacts} />
                </div>

                <div className="flex-1 w-full">

                    <Achievements achievements={achievements} />
                </div>

            </div>

            <Ratings rating={rating} hasReviews={hasReviews} amountOfReviews={amountOfReviews} />
            <Courses teachCourses={teachCourses} />

        </section>
    )
}

export default DesktopUpperSection