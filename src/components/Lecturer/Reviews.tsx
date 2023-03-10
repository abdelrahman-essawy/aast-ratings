import React, { memo } from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReviewCommentTemplete from '../Shared/ReviewCommentTemplete'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export const Reviews = memo(({ hasReviews, mutate }: { hasReviews: any, mutate?: any }) => {

    return (
        <section id='style-1' className="bg-base-300 rounded-lg flex-1">
            <div className='sm:p-4 p-2 '>
                <h2 className="card-title md:block">Reviews</h2>

            </div>
            <div className='overflow-y-auto max-h-96 min-h-16 sm:px-4 px-2'>
                {

                    hasReviews[0] ? (
                        hasReviews.map(({ id, avatar, author, comment, rating, personalSideRating, scientificSideRating, recommendationRating, createdAt, score }) => (

                            <ReviewCommentTemplete
                                key={id}
                                id={id}
                                avatar={avatar}
                                author={author}
                                comment={comment}
                                rating={rating}
                                personalSideRating={personalSideRating}
                                scientificSideRating={scientificSideRating}
                                recommendationRating={recommendationRating}
                                createdAt={createdAt}
                                score={score}
                                mutate={mutate} />
                        ))

                    ) : (
                        <div>
                            <h1 className="text-lg font-bold text-center w-full h-full opacity-50">No reviews yet.</h1>
                        </div>
                    )
                }
            </div>

        </section>
    )
})
Reviews.displayName = 'Reviews'
