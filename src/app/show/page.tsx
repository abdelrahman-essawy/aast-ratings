import React, { use } from 'react'
import { Cards } from '../../components/Cards/Cards'

// const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/course/?id=${id}`).then((res) => res.json())
const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/lecturer`).then((res) => res.json())

// { id, name, courseCode, rating, availableInColleges, hasReviews, taughtByLecturers, _count }

const page = ({ searchParams }) => {
    const lecturers = use(fetcher(searchParams.courseId))
    console.log(lecturers)

    // const course = use(fetcher(searchParams.courseId))
    // const lecturers = course?.taughtByLecturers
    return (
        <section className='flex flex-col max-w-screen-md m-auto md:mt-8 md:gap-8 py-4 md:py-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>Show</h1>
            <p className='text-center'>This is the show page</p>

            <Cards lecturers={lecturers} hero={false} />

        </section>

    )
}

export default page