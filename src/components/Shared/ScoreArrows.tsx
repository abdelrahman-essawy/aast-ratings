"use client"
import React from 'react'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'

const ScoreArrows = ({ score }: { score: number }) => {
    const [scoreState, setScoreState] = React.useState(score)
    return (
        <div className='flex flex-row gap-1 items-center'>
            <ReviewArrowFilled className="w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
            <span className="text-sm opacity-70 font-bold">{scoreState}</span>
            <ReviewArrowFilled className="rotate-180 w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
        </div>
    )
}

export default ScoreArrows