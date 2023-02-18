import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export const Reviews = ({ hasReviews }: { hasReviews: any }) => {

    TimeAgo.addDefaultLocale(en)
    const timeAgo = new TimeAgo('en-US')

    return (
        <section id='style-1' className="bg-base-300 rounded-lg sm:p-4 p-2 overflow-y-auto max-h-80 flex-1">
            <h2 className="card-title mb-3 md:block">Reviews</h2>

            {

                hasReviews ? (
                    hasReviews.map(({ id, comment, rating, personalSideRating, scientificSideRating, recommendationRating, createdAt }, index) => (
                        <div
                            key={id}
                            className={`chat ${index % 2 === 0 ? 'chat-start' : 'chat-end'}`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full bg-base-100 shadow p-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1157/1157034.png" />
                                </div>
                            </div>
                            <div className="chat-header mx-2 mb-1">
                                {/* <span>Student</span> */}
                                <span className="text-xs opacity-50 ">{timeAgo.format(Date.parse(createdAt))}</span>
                            </div>
                            <div className="chat-bubble p-4">
                                <div className="grid grid-cols-2 gap-1">
                                    <span className="text-xs opacity-50">Rating: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
                                    <span className="text-xs opacity-50">Personality: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{personalSideRating}</span></span>
                                    <span className="text-xs opacity-50">Scientifically: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{scientificSideRating}</span></span>
                                    <span className="text-xs opacity-50">Recommended: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{recommendationRating}</span></span>
                                </div>
                                <div className="divider !my-1" />

                                <div className="mt-2 ml-2">

                                    {comment}
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
