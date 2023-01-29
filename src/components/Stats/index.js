import React, { use } from 'react'


const getStats = async () => await fetch('http://localhost:3000/api/getStats', { next: { revalidate: 10 } }).then(res => res.json())


export const CurrentStats = () => {
    const stats =
    {
        "Campuses": 10,
        "Colleges": 43,
        "Lecturers": 0,
        "Reviews": 0
    }

    console.log(Object.keys(stats))
    return (


        <div className="stats shadow border border-gray-700 grid grid-cols-4 w-full">

            {
                [...Object.keys(stats)].map((key, index) => {
                    return (
                        <div key={index} className="stat self-center p-2 gap-1">
                            <div className="stat-title">{key}</div>
                            <div className={`stat-value text-2xl ${index > 1 && "text-primary"}`}>{stats[key]}</div>
                        </div>
                    )
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
