import React, { Suspense, use } from 'react'
import Spinner from '../../utilities/Spinner'

export const SkeletonStats = () => {
    return (
        <div className="stats shadow border border-gray-700 grid grid-cols-4 w-full items-center">
            {
                [...Array(4)]?.map((_, index) => {
                    return (
                        <div className="stat self-center p-3 gap-4 " key={index}>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full animate-pulse mt-1" />
                            <div className='mb-1'>

                                <Spinner />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
