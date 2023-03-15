import Link from 'next/link'
import React from 'react'

export const Courses = ({ teachCourses }: { teachCourses: any }) => {
    return (
        <div className="bg-base-300 rounded-lg p-4">
            <h2 className="card-title mb-3">Courses</h2>

            <div className="grid grid-cols-2 gap-1">
                <span className="text-md opacity-50">Courses: <span className={`text-md opacity-100 ${teachCourses?.length == 3 ? 'text-yellow-400' : teachCourses?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{teachCourses?.length}</span></span>
            </div>

            <div className="divider !my-1" />

            <div className="grid grid-cols-1 gap-1">
                {
                    teachCourses?.map(({ id, name, rating }, i) => (
                        <div key={id} className="flex flex-row flex-wrap justify-between">
                            <Link href={`/course/${id}`} className="text-md opacity-50 hover:opacity-100 transition-all ease-in-out duration-150">{i + 1}.<span className='underline hover:opacity-100'>{name}</span></Link>
                            <span className={`text-md opacity-100 ${getRatingColor(rating)}`}>{rating == 0 ? 'N/A' : rating}<span className='text-gray-400 text-xs'>/5</span></span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const getRatingColor = (rating: number) => {
    if (rating == 0) return 'text-gray-600 opacity-90 text-xs'
    if (rating > 0 && rating < 3) return 'text-red-400'
    if (rating >= 3 && rating < 4) return 'text-yellow-400'
    if (rating >= 4) return 'text-green-400'
}
