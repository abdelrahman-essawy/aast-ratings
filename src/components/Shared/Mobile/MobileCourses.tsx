import Link from 'next/link'
import React from 'react'

export const MobileCourses = ({ teachCourses, role }: { teachCourses: any, role: string }) => {
    return <section className="md:hidden overflow-y-auto bg-base-300 rounded-lg p-3 h-full">

        <h2 className="card-title mb-1 text-xs">Courses</h2>

        <div className="grid grid-cols-1">
            {
                teachCourses[0] ?
                    teachCourses?.map(({ id, name, rating }, i) => (
                        <div key={id} className="flex flex-row flex-wrap justify-between px-2">
                            <Link href={`/course/${id}`} className="text-sm opacity-50 hover:opacity-100 transition-all ease-in-out duration-150">{i + 1}.<span className='underline hover:opacity-100'>{name}</span></Link>
                            <span className={`text-md opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}<span className='text-gray-400 text-xs'>/5</span></span>
                        </div>
                    ))
                    :
                    <div>
                        <span className='opacity-50 text-sm md:text-base'>
                            No courses,
                        </span>
                        <Link href="/" className="text-base-content ml-1 underline
                        opacity-50 
                        hover:opacity-100 transition-all ease-in-out duration-150 text-sm md:text-base
                        ">
                            add some?
                        </Link>
                    </div>
            }
        </div>
    </section>


}
