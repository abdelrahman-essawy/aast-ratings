import Image from 'next/image'
import React from 'react'

export const CardTemplete = ({ name, courses, icon, country, className }) => {
    console.log(courses)
    return (
        <div className={`card m-auto w-60 h-fit bg-base-100 border border-gray-700 shadow-xl ${className}`}>
            <figure className='w-full bg-base-300 h-fit p-12'>
                {
                    icon ? <Image fill src={icon} alt="Shoes" /> : <div className='text-4xl'>Image</div>
                }
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between w-full items-center px-2'>
                    <p className="card-subtitle text-gray-500">Alexandria</p>
                    <p className="card-subtitle text-gray-500 text-end">Abu Qir</p>

                </div>
                <div className='grid grid-cols-2 gap-2 my-2'>
                    {
                        courses?.map((course, index) => {
                            return (
                                <div className={`badge badge-outline text-xs rounded-lg p-3 w-full ${index === 78 ? `col-span-2` : ``}`} key={index}>{course}</div>
                            )
                        }
                        )
                    }
                </div>
                <div className='flex justify-between items-center w-full px-1'>

                    <div className="rating gap-1">
                        <input type="radio" name="rating-3" className="mask mask-heart w-4 h-4 bg-red-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart w-4 h-4 bg-orange-400" checked />
                        <input type="radio" name="rating-3" className="mask mask-heart w-4 h-4 bg-yellow-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart w-4 h-4 bg-lime-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart w-4 h-4 bg-green-400" />
                    </div>
                    <div className="badge badge-md">987,654</div>

                </div>

                <button className="btn gap-2 bg-base-300">
                    Review
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>
        </div>
    )
}
