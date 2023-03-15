import React from 'react'
import { Colleges } from '../../Course/Colleges'
import { Lecturers } from '../../Course/Lecturers'
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
        teachCourses,
        taughtByLecturers,
        availableInColleges
    }
) => {
    return (
        <section className="gap-3 grid-cols-3 hidden md:grid">

            <div className="flex flex-col items-start gap-3 max-h-[304px]">

                {
                    contacts &&
                    <Contacts contacts={contacts} />
                }
                {
                    availableInColleges &&
                    <Colleges availableInColleges={availableInColleges} />
                }

                {
                    <Achievements achievements={achievements} />
                }

            </div>

            <Ratings rating={rating} hasReviews={hasReviews} amountOfReviews={amountOfReviews} />

            {
                teachCourses &&
                <Courses teachCourses={teachCourses} />
            }

            {
                taughtByLecturers &&
                <Lecturers taughtByLecturers={taughtByLecturers} />
            }
        </section>
    )
}

export default DesktopUpperSection