import React from 'react'

export const CurrentStats = () => {
    return (
        <div className="stats shadow flex w-8/12 border border-gray-700">

            <div className="stat place-items-center p-2">
                <div className="stat-title">Lecturers</div>
                <div className="stat-value text-2xl">31K</div>
            </div>

            <div className="stat place-items-center p-2">
                <div className="stat-title">Reviews</div>
                <div className="stat-value text-primary text-2xl">4,200</div>
            </div>

        </div>
    )
}
