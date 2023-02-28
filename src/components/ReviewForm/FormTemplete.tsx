"use client"
import React, { useRef, useState } from 'react'
import { randomNameGenerator } from '../randomNameGenerator'
import { StarsRadio } from './StarsRadio'
import { useRouter } from 'next/navigation';
import { revalidate } from '../revalidate';
import useSWR from 'swr'
import { randomAvatarGenerator } from '../randomAvatarGenerator';

import ReactDOMServer from 'react-dom/server';

export function encodeSvg(reactElement) {
    return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
}

const fetcher = (url: URL) => fetch(url).then((res) => res.json())

export const FormTemplete = ({ id, lecturer, mutate }: { id: string, mutate?: any, lecturer?: any, setOptimisticData?: any }) => {
    const ref = useRef()

    // const { error, isLoading, mutate, isValidating } = useSWR(`/api/lecturer?id=${id}`, { fallbackData: { id: 'pending' } })
    const [name, setName] = useState(randomNameGenerator())
    const [avatar, setAvatar] = useState(randomAvatarGenerator(ref))
    const [comment, setComment] = useState('')
    const [personalSideRating, setPersonalSideRating] = useState(1)
    const [scientificSideRating, setScientificSideRating] = useState(1)
    const [recommendationRating, setRecommendationRating] = useState(1)

    const [loading, setLoading] = useState(false)


    const ratings = [{
        name: 'Personality',
        rating: personalSideRating,
        setter: setPersonalSideRating
    }, {
        name: 'Scientifically',
        rating: scientificSideRating,
        setter: setScientificSideRating
    }, {
        name: 'Recommendation',
        rating: recommendationRating,
        setter: setRecommendationRating

    }]
    const router = useRouter();
    const options = {
        optimisticData: () => {
            return {
                ...lecturer,
                amountOfReviews: lecturer.amountOfReviews + 1,
                personalSideRating: Math.round(lecturer.personalSideRating * lecturer.amountOfReviews + personalSideRating) / (lecturer.amountOfReviews + 1),
                scientificSideRating: Math.round(lecturer.scientificSideRating * lecturer.amountOfReviews + scientificSideRating) / (lecturer.amountOfReviews + 1),
                recommendationRating: Math.round(lecturer.recommendationRating * lecturer.amountOfReviews + recommendationRating) / (lecturer.amountOfReviews + 1),
                rating: Math.round(lecturer.rating * lecturer.amountOfReviews + (personalSideRating + scientificSideRating + recommendationRating) / 3) / (lecturer.amountOfReviews + 1),
                hasReviews: [
                    {
                        id: 'pending',
                        avatar: encodeSvg(avatar),
                        author: name,
                        comment,
                        personalSideRating,
                        scientificSideRating,
                        recommendationRating,
                        rating: overall,
                        createdAt: new Date().toISOString(),
                        score: 0
                    },
                    ...lecturer.hasReviews,

                ],
            }
        },
        rollbackOnError(error) {
            return error.name !== 'AbortError'
        },

    }



    const addReview = async () => {
        const url = `/api/review?lecturerId=${id}&author=${name}&comment=${comment}&personalSideRating=${personalSideRating}&scientificSideRating=${scientificSideRating}&recommendationRating=${recommendationRating}`
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: encodeSvg(avatar),
            })
        }).finally(() => {
            mutate()
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            addReview()
            mutate(options.optimisticData())

            document.getElementById('closeDialog')?.click()
        }
        catch (e) {
            console.log(e)
        }


    }
    const overall = Math.round(
        (Number(personalSideRating) + Number(scientificSideRating) + Number(recommendationRating)) / 3
    )

    console.log(ref.current)
    return (
        <div>
            <label className="block opacity-70 font-medium text-white text-start" >
                Rating
                <span className='italic ml-2 opacity-50 font-light'>(required)</span>
            </label>
            <div className='divider my-1' />

            <div className='flex flex-row gap-4'>
                <div className='flex-1'>
                    {
                        ratings.map(({ name, rating, setter }) => (
                            <div key={name} className='flex flex-row justify-between'>
                                <div className='text-sm'>{name}</div>
                                <StarsRadio callback={setter} />
                            </div>
                        ))
                    }
                </div>

                <div>
                    <div className='text-md text-center mb-1 opacity-70 font-medium text-white'>Overall</div>
                    <div className='px-4 py-3 bg-[#191d24] rounded-lg'>
                        <p className={`text-lg text-center ${overall == 3 ? 'text-yellow-400' : overall > 3 ? 'text-green-400' : 'text-red-400'}`}>{overall}
                            <span className={`text-xs text-center text-gray-400`}>/5</span>
                        </p>

                    </div>
                </div>
            </div>

            <div className='divider my-1' />

            <div className='flex flex-row gap-x-4'>

                <div>
                    <label className="block opacity-70 font-medium text-white text-start" htmlFor='name'>
                        Avatar
                    </label>
                    <div className="chat-image avatar">
                        <div className="w-12" onClick={() => setAvatar(randomAvatarGenerator(ref))}>
                            {avatar}
                        </div>
                    </div>

                </div>
                <div>
                    <label className="block opacity-70 font-medium text-white text-start" htmlFor='name'>
                        Nickname
                        <span className='italic ml-2 opacity-50 font-light'>(optional)</span>
                    </label>
                    <div className='flex flex-row items-center justify-between gap-4 mt-2'>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' name='name' placeholder="Nickname" className="input input-bordered w-full max-w-xs flex-1  placeholder:opacity-50 placeholder:italic" />

                        <div className="btn bg-[#191d24]" onClick={() => setName(randomNameGenerator())}>Generate</div>

                    </div>
                </div>
            </div>

            <label className="block opacity-70 font-medium text-white text-start mt-4" htmlFor='name'>
                Comment
                <span className='italic ml-2 opacity-50 font-light'>(optional)</span>
            </label>

            <textarea
                onChange={(e) => setComment(e.target.value)}
                className="textarea textarea-bordered mt-2 w-full placeholder:opacity-50 placeholder:italic" placeholder="He/She is a very thoughtful teacher who puts a lot of thought into how he/she presents the material."></textarea>

            {
                loading ?
                    <div onClick={handleSubmit} className="btn btn-block mt-4 bg-[#191d24] loading disabled" />
                    :
                    <div onClick={handleSubmit} className="btn btn-block mt-4 bg-[#191d24]">Submit</div>

            }
        </div>
    )
}
