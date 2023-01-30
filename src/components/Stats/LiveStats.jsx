import React, { use } from 'react'
import { SkeletonStats } from './SkeletonStats'


const getStats = async () => await fetch('https://aast-ratings.vercel.app/api/getStats', { next: { revalidate: 1 } }).then(res => res.json())


export const LiveStats = () => {
    const stats = use(getStats())
    return (
        <div className="stats shadow border border-gray-700 grid grid-cols-4 w-full">

            {
                [...Object.keys(stats)].map((key, index) => {
                    const value = stats[key]
                    console.log(key)
                    return key === 'message' ? <SkeletonStats /> : //Error in Fetching
                        <div key={index} className="stat self-center p-2 gap-1">
                            <div className="stat-title">
                                {key}
                            </div>
                            <div className={`stat-value text-2xl ${index > 1 && "text-primary"}`}>
                                {value}
                            </div>
                        </div>
                })
            }

            {/* <div className="stat place-items-center p-2">
                <div className="stat-title">Lecturers</div>
                <div className="stat-value text-2xl">31K</div>
            </div>

            <div className="stat place-items-center p-2">
                <div className="stat-title">Reviews</div>
                <div className="stat-value text-primary text-2xl">4,200</div>
            </div>
            <div className="stat place-items-center p-2">
                <div className="stat-title">Reviews</div>
                <div className="stat-value text-primary text-2xl">4,200</div>
            </div>

            <div className="stat place-items-center p-2">
                <div className="stat-title">Reviews</div>
                <div className="stat-value text-primary text-2xl">4,200</div>
            </div> */}
        </div>
    )
}
