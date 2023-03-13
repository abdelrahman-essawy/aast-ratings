"use client"
import React, { useCallback, useId, useState } from 'react'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'
import useSWR from 'swr'

const fetcher = (url: URL) => fetch(url).then((res) => res.json())

const ScoreArrows = ({ score, id, mutate }: { score: number, id: string, mutate: () => void }) => {
    const [scoreState, setScoreState] = useState(score)
    const [log, setLog] = useState('')

    const handleScore =
        async (id, scoreAction) => {

            if (log === id + scoreAction) {
                // scoreAction === 1 ? setScoreState(scoreState - 1) : setScoreState(scoreState + 1)
                // handleArrowStyle(scoreAction, randomId, 'pending', true)
                // const res = await fetch(`/api/review?id=${id}&scoreAction=${scoreAction * -1}`, {
                //     method: 'PUT',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                // })
                // if (res.status === 200) {
                //     // mutate()
                //     handleArrowStyle(scoreAction, randomId, 'success', true)

                // }
                return
            }


            scoreAction === 1 ? setScoreState(scoreState + 1) : setScoreState(scoreState - 1)
            handleArrowStyle(scoreAction, randomId, 'pending', false)
            const res = await fetch(`/api/review?id=${id}&scoreAction=${scoreAction}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 200) {
                // mutate()
                handleArrowStyle(scoreAction, randomId, 'success', false)

            }
        }

    const randomId = useId()

    return (
        <div className='flex flex-row gap-1 items-center'>
            <ReviewArrowFilled
                id={`upvote-` + randomId}
                onClick={() => {
                    handleScore(id, 1)
                    setLog(id + 1)
                }}
                className="w-7 h-7 fill-none stroke-gray-400 md:hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
            <span className="text-sm opacity-70 font-bold">{scoreState}</span>
            <ReviewArrowFilled
                id={`downvote-` + randomId}
                onClick={() => {
                    handleScore(id, -1)
                    setLog(id + -1)

                }}
                className="rotate-180 w-7 h-7 fill-none stroke-gray-400 md:hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
        </div>
    )
}

export default ScoreArrows







const handleArrowStyle = (scoreAction, randomId, state, undo) => {

    if (state === 'pending') {
        document.getElementById(`upvote-` + randomId).classList.toggle('!fill-gray-400', scoreAction === 1)
        document.getElementById(`downvote-` + randomId).classList.toggle('!fill-gray-400', scoreAction === -1)
    }

    if (state === 'success') {

        document.getElementById(`upvote-` + randomId).classList.toggle('!stroke-green-500', scoreAction === 1)
        document.getElementById(`upvote-` + randomId).classList.toggle('!fill-green-500', scoreAction === 1)

        document.getElementById(`downvote-` + randomId).classList.toggle('!stroke-red-500', scoreAction === -1)
        document.getElementById(`downvote-` + randomId).classList.toggle('!fill-red-500', scoreAction === -1)

        undo && (() => {
            document.getElementById(`upvote-` + randomId).classList.toggle('!stroke-green-500', scoreAction === 1)
            document.getElementById(`upvote-` + randomId).classList.toggle('!fill-green-500', scoreAction === 1)

            document.getElementById(`downvote-` + randomId).classList.toggle('!stroke-red-500', scoreAction === -1)
            document.getElementById(`downvote-` + randomId).classList.toggle('!fill-red-500', scoreAction === -1)
        }
        )()

    }
}