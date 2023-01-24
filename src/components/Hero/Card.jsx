import React from 'react'

export const Card = () => {
    return (
        <div className="card w-60 h-72 bg-base-100 border border-gray-700 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Review</button>
                </div>
            </div>
        </div>
    )
}
