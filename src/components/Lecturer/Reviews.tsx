import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReviewArrow from '../../SVG/ReviewArrow'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'

export const Reviews = ({ hasReviews }: { hasReviews: any }) => {

    TimeAgo.addDefaultLocale(en)
    const timeAgo = new TimeAgo('en-US')

    return (
        <section id='style-1' className="bg-base-300 rounded-lg sm:p-4 p-2 overflow-y-auto max-h-80 flex-1">
            <h2 className="card-title mb-3 md:block">Reviews</h2>

            {

                hasReviews ? (
                    hasReviews.map(({ id, author, comment, rating, personalSideRating, scientificSideRating, recommendationRating, createdAt }, index) => (
                        <div
                            key={id}
                            className={`chat chat-start mb-4`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full bg-base-100 shadow">
                                    <img src="https://styles.redditmedia.com/t5_1pfdj8/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18zMDM5NjQ_rare_6369bceb-9935-4e1f-8e8d-d3f215df9418-headshot.png?width=256&height=256&crop=256:256,smart&v=enabled&s=aed349fbdb4de4811c91a44273afe0f21e6cd483" />
                                </div>
                            </div>
                            <div className="chat-header mx-2 mb-1 flex flex-row items-center gap-4">
                                <span>{author}</span>
                                <span className="text-xs opacity-50 ">{timeAgo.format(Date.parse(createdAt))}</span>
                            </div>
                            <div className="chat-bubble p-4">
                                <div className="grid grid-cols-2 gap-1">
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
                                        <span className="text-sm opacity-70 font-bold">32</span>

                                        <ReviewArrowFilled className="rotate-180 w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
                                    </div>
                                    <div className='hover:bg-base-100 p-2 rounded-lg select-none transition duration-150 ease-in-out cursor-pointer active:scale-95'>
                                        <p className='text-xs font-medium'>Report</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    )
                    )

                ) : (
                    <div>
                        <h1 className="text-xl font-bold text-center">No reviews yet.</h1>
                    </div>
                )
            }
        </section>
    )
}
