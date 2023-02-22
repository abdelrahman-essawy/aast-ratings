import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'
import NoSSR from '../NoSSR'
import { RandomAvatarGenerator } from '../RandomAvatarGenerator'


interface ReviewCommentTempleteProps {
    id: string,
    author: string,
    comment: string,
    rating: number,
    personalSideRating: number,
    scientificSideRating: number,
    recommendationRating: number,
    createdAt: string,
    score: number
}

export default function ReviewCommentTemplete(
    {
        id,
        author,
        comment,
        rating,
        personalSideRating,
        scientificSideRating,
        recommendationRating,
        createdAt,
        score
    }: ReviewCommentTempleteProps
) {
    TimeAgo.addDefaultLocale(en)
    const timeAgo = new TimeAgo('en-US')
    return (
        <div
            key={id}
            className={`chat chat-start mb-4 gap-x-2`}>
            <div className="chat-image avatar">
                <div className="w-11">
                    <NoSSR>
                        <RandomAvatarGenerator />
                    </NoSSR>
                </div>
            </div>
            <div className="chat-header mx-2 mb-1 flex flex-row items-center gap-4">
                <span>{author}</span>
                <span className="text-xs opacity-50 ">{timeAgo.format(Date.parse(createdAt))}</span>
            </div>
            <div className="chat-bubble p-4">
                <div className="grid grid-cols-2 gap-1 w-fit">
                    <span className="text-xs opacity-50">Overall: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
                    <span className="text-xs opacity-50">Personality: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{personalSideRating}</span></span>
                    <span className="text-xs opacity-50">Scientifically: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{scientificSideRating}</span></span>
                    <span className="text-xs opacity-50">Recommended: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{recommendationRating}</span></span>
                </div>


                <div className="my-3">

                    {comment}
                </div>



                <div className="-ml-1 flex flex-row items-center gap-3">
                    <div className='flex flex-row gap-1 items-center'>
                        <ReviewArrowFilled className="w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
                        <span className="text-sm opacity-70 font-bold">{score}</span>

                        <ReviewArrowFilled className="rotate-180 w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
                    </div>
                    <div className='hover:bg-base-100 p-2 rounded-lg select-none transition duration-150 ease-in-out cursor-pointer active:scale-95'>
                        <p className='text-xs font-medium'>Report</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
