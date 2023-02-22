import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReviewArrow from '../../SVG/ReviewArrow'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'
import { BigHead } from '@bigheads/core'
import ReviewCommentTemplete from '../Shared/ReviewCommentTemplete'

export const Reviews = ({ hasReviews }: { hasReviews: any }) => {

    TimeAgo.addDefaultLocale(en)
    const timeAgo = new TimeAgo('en-US')

    return (
        <section id='style-1' className="bg-base-300 rounded-lg sm:p-4 p-2 overflow-y-auto max-h-80 flex-1">
            <h2 className="card-title mb-3 md:block">Reviews</h2>

            {

                hasReviews ? (
                    hasReviews.map(({ id, author, comment, rating, personalSideRating, scientificSideRating, recommendationRating, createdAt, score }) => (

                        <ReviewCommentTemplete key={id} id={id} author={author} comment={comment} rating={rating} personalSideRating={personalSideRating} scientificSideRating={scientificSideRating} recommendationRating={recommendationRating} createdAt={createdAt} score={score} />

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
