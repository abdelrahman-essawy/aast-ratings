import React from 'react'

export const Ratings = ({ hasReviews, amountOfReviews = hasReviews?.length, rating }: { hasReviews: any, amountOfReviews?: number, rating: number }) => {
    return (
        <div className="bg-base-300 rounded-lg p-4">
            <h2 className="card-title mb-3">Ratings</h2>

            <div className="">
                <div className="flex items-center mb-3">
                    {
                        [...Array(5)].map((_, i) => (
                            i + 1 <= rating ?
                                <svg
                                    key={i} aria-hidden="true" className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                :
                                <svg
                                    key={i} aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>

                        ))
                    }
                    <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{rating} out of 5</p>
                </div>

                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{amountOfReviews} total reviews</p>

                <div className="grid gap-4 mt-4 w-full">



                    {
                        [...Array(5)].map((_, i) => (
                            hasReviews?.length === 0 ?
                                <div
                                    key={i}
                                    className="flex items-center justify-center space-x-4">

                                    <span
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 inline-block">
                                        {5 - i} star
                                    </span>
                                    <div
                                        className="h-5 flex-1 bg-gray-200 rounded dark:bg-gray-700">

                                        <div
                                            className="h-5 bg-purple-700 rounded"
                                            style={{ width: `0%` }} />

                                    </div>

                                    <span
                                        className="text-sm w-9 font-medium text-blue-600 dark:text-blue-500">
                                        0%
                                    </span>

                                </div>
                                :
                                <div
                                    key={i}
                                    className="flex items-center justify-center space-x-4">

                                    <span
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 inline-block">
                                        {5 - i} star
                                    </span>
                                    <div
                                        className="h-5 flex-1 bg-gray-200 rounded dark:bg-gray-700">

                                        <div
                                            className="h-5 bg-purple-700 rounded"
                                            style={{ width: `${hasReviews?.filter((review: any) => review.rating === 5 - i)?.length / hasReviews?.length * 100}%` }} />

                                    </div>

                                    <span
                                        className="text-sm w-9 font-medium text-blue-600 dark:text-blue-500">
                                        {Math.round(hasReviews?.filter((review: any) => review.rating === 5 - i)?.length / hasReviews?.length * 100)}%
                                    </span>

                                </div>
                        ))

                    }

                </div>

            </div>


        </div>
    )
}
