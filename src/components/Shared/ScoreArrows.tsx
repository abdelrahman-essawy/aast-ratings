"use client"
import React, { useCallback, useState } from 'react'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'
import useSWR from 'swr'

const fetcher = (url: URL) => fetch(url).then((res) => res.json())

const ScoreArrows = ({ score, id, mutate }: { score: number, id: string, mutate: () => void }) => {
    const [scoreState, setScoreState] = useState(score)
    const handleScore =
        async (id, scoreAction) => {

            scoreAction === 1 ? setScoreState(scoreState + 1) : setScoreState(scoreState - 1)

            const res = await fetch(`/api/review?id=${id}&scoreAction=${scoreAction}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 200) {
                mutate()
            }
        }


    return (
        <div className='flex flex-row gap-1 items-center'>
            <ReviewArrowFilled
                onClick={() => handleScore(id, 1)}
                className="w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
            <span className="text-sm opacity-70 font-bold">{scoreState}</span>
            <ReviewArrowFilled
                onClick={() => handleScore(id, -1)}
                className="rotate-180 w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
        </div>
    )
}

export default ScoreArrows