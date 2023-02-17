import Link from 'next/link'
import React from 'react'

export const Lecturers = ({ taughtByLecturers }: { taughtByLecturers: any }) => {
    return (
        <div className="bg-base-300 rounded-lg p-4">
            <h2 className="card-title mb-3">Lecturers</h2>

            <div className="grid grid-cols-2 gap-1">
                <span className="text-md opacity-50">Lecturers: <span className={`text-md opacity-100 ${taughtByLecturers?.length == 3 ? 'text-yellow-400' : taughtByLecturers?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{taughtByLecturers?.length}</span></span>
            </div>

            <div className="divider !my-1" />

            <div className="grid grid-cols-1 gap-1">
                {
                    taughtByLecturers?.map(({ id, name, rating }, i) => (
                        <div key={id} className="flex flex-row flex-wrap justify-between">
                            <Link href={`/lecturer/${id}`} className="text-md opacity-50 hover:opacity-100 transition-all ease-in-out duration-150">{i + 1}.<span className='underline hover:opacity-100'>{name}</span></Link>
                            <span className={`text-md opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}<span className='text-gray-400 text-xs'>/5</span></span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
