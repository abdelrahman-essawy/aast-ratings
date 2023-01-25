import React from 'react'

export const CurrentStats = () => {
    return (
        <div class="stats shadow flex w-8/12 border border-gray-700">

            <div class="stat place-items-center p-2">
                <div class="stat-title">Lecturers</div>
                <div class="stat-value text-2xl">31K</div>
            </div>

            <div class="stat place-items-center p-2">
                <div class="stat-title">Reviews</div>
                <div class="stat-value text-primary text-2xl">4,200</div>
            </div>

        </div>
    )
}
