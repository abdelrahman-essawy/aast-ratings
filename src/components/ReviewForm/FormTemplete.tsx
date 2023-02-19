"use client"
import React, { useState } from 'react'
import { nameGenerator } from '../nameGenerator'
import { StarsRadio } from './StarsRadio'
import { useRouter } from 'next/navigation';
import { revalidate } from '../revalidate';

export const FormTemplete = ({ id }: { id: string }) => {
    const [name, setName] = useState(nameGenerator())
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name, comment, personalSideRating, scientificSideRating, recommendationRating)
        setLoading(true)
        try {
            const res = await fetch(`/api/review?lecturerId=${id}&author=${name}&comment=${comment}&personalSideRating=${personalSideRating}&scientificSideRating=${scientificSideRating}&recommendationRating=${recommendationRating}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(() => revalidate(`https://aast-ratings.vercel.app/api/lecturer?id=${id}`))
                .then(() => setLoading(false))
                .finally(() => {
                    document.getElementById('closeDialog')?.click()
                    router.refresh()
                })

        }
        catch (e) {
            console.log(e)
        }


    }
    const overall = Math.round(
        (Number(personalSideRating) + Number(scientificSideRating) + Number(recommendationRating)) / 3
    )
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

            <label className="block opacity-70 font-medium text-white text-start" htmlFor='name'>
                Nickname
                <span className='italic ml-2 opacity-50 font-light'>(optional)</span>
            </label>
            <div className='flex flex-row items-center justify-between gap-4 mt-2'>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' name='name' placeholder="Nickname" className="input input-bordered w-full max-w-xs flex-1  placeholder:opacity-50 placeholder:italic" />

                <div className="btn bg-[#191d24]" onClick={() => setName(nameGenerator())}>Generate</div>

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
