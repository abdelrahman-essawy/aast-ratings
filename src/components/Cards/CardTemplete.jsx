import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReviewModal from '../Modal/reviewModal'

export const CardTemplete = ({ name, id, icon, className, rating, workInColleges, amountOfReviews, role, teachCourses }) => {
    return (
        <>

            <div className={`card m-auto min-w-[250px] h-fit bg-base-100 border border-gray-700 shadow-xl sm:hover:shadow-2xl sm:hover:scale-105 transition ease-in-out duration-300 ${className}`}>
                <figure className='w-full bg-base-300 h-fit p-12'>
                    {
                        icon ?
                            <Image fill src={icon} alt="Shoes" />
                            :
                            <div className='text-4xl'>{name?.split(" ").map((n) => n[0])}</div>
                    }
                </figure>
                <div className="card-body p-4 gap-2">
                    <div className='flex'>
                        <span className='text-lg font-extralight text-gray-400 mr-1'>{role?.charAt(0).toUpperCase() + role?.slice(1)}. </span>
                        <h2 className="card-title">{name}</h2>
                    </div>

                    {
                        workInColleges?.map(({ name, id }) => {
                            return (
                                <p className="card-subtitle text-gray-500" key={id}>{name}</p>
                            )
                        }
                        )
                    }

                    <div className='grid grid-cols-2 gap-2 my-2'>
                        {
                            teachCourses?.map(({ id, name }, index) => {
                                return (
                                    <div className={`text-xs border border-gray-700 p-2 bg-base-200 text-gray-400 rounded-lg truncate col-span-2 text-center font-sans leading-relaxed`} key={id}>{name}</div>
                                )
                            }
                            )
                        }
                    </div>
                    <div className='flex justify-between items-center w-full px-1'>

                        <div className="rating gap-1">
                            {
                                [...Array.from({ length: 5 })].map((_, index) => {
                                    return (
                                        index + 1 <= rating ?
                                            index + 1 === rating ?
                                                <div type="radio" name="rating-3" className={`mask mask-heart w-4 h-4 bg-red-500`} key={index} readOnly />
                                                :
                                                <div type="radio" name="rating-3" className={`mask mask-heart w-4 h-4 bg-red-500`} key={index} readOnly />


                                            :
                                            <div type="radio" name="rating-3" className={`mask mask-heart w-4 h-4 bg-slate-500`} key={index} readOnly />
                                    )
                                }
                                )
                            }

                        </div>
                        <div className="badge badge-md">{amountOfReviews}</div>

                    </div>
                    {/* <label className="btn gap-2 bg-base-300 sm:hover:fill-gray-400 active:fill-gray-400 focus:hover:fill-gray-400 fill-none transition ease-in-out duration-300" htmlFor='my-modal-66'>
                    View
                    <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
                </label> */}


                    <div className='mt-2 grid grid-cols-2 gap-4'>
                        <Link
                            href={`/lecturer/${id}`}
                            className="btn gap-2 !text-xs justify-center bg-base-300 sm:hover:fill-gray-400 active:fill-gray-400 focus:hover:fill-gray-400 fill-none transition ease-in-out duration-300">
                            View
                            <svg className="h-5 w-5 fill-gray-400 " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enableBackground="new 0 0 92 92" xmlSpace="preserve">
                                <path id="XMLID_1239_" d="M91.3,43.8C90.6,42.8,74.4,19,46,19C17.6,19,1.4,42.8,0.7,43.8c-0.9,1.3-0.9,3.1,0,4.5
	C1.4,49.2,17.6,73,46,73c28.4,0,44.6-23.8,45.3-24.8C92.2,46.9,92.2,45.1,91.3,43.8z M46,65C26.7,65,13.5,51.4,9,46
	c4.5-5.5,17.6-19,37-19c19.3,0,32.5,13.6,37,19C78.4,51.5,65.3,65,46,65z M48.3,29.6c-4.4-0.6-8.7,0.5-12.3,3.2c0,0,0,0,0,0
	c-7.3,5.5-8.8,15.9-3.3,23.2c2.7,3.6,6.5,5.8,10.9,6.5c0.8,0.1,1.6,0.2,2.3,0.2c3.6,0,7-1.2,9.9-3.3c7.3-5.5,8.8-15.9,3.3-23.2
	C56.6,32.5,52.7,30.2,48.3,29.6z M52.3,54.5c-2.2,1.7-5,2.4-7.8,2c-2.8-0.4-5.3-1.9-7-4.1C34.1,47.7,35,41,39.7,37.5
	c2.2-1.7,5-2.4,7.8-2c2.8,0.4,5.3,1.9,7,4.1C57.9,44.3,57,51,52.3,54.5z M51.9,40c0.8,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8
	c-0.7,0.7-1.8,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.7-0.8,1.8-1.2,2.8-1.2
	C50.2,38.9,51.2,39.3,51.9,40z" />
                            </svg>

                        </Link>



                        <label
                            className="btn justify-center !text-xs gap-2 bg-base-300 sm:hover:fill-gray-400 active:fill-gray-400 focus:hover:fill-gray-400 fill-none transition ease-in-out duration-300"
                            htmlFor='review-modal'>
                            Review
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </label>
                    </div>

                </div>
            </div>
        </>

    )
}
