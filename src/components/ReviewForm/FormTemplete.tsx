"use client"
import React, { useState } from 'react'
import { nameGenerator } from '../nameGenerator'
import { StarsRadio } from './StarsRadio'
import { useRouter } from 'next/navigation';

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
            await fetch(`/api/review?lecturerId=${id}&comment=${comment}&personalSideRating=${personalSideRating}&scientificSideRating=${scientificSideRating}&recommendationRating=${recommendationRating}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
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


    return (
        <div>
            {
                ratings.map(({ name, rating, setter }) => (
                    <div key={name} className='flex flex-row justify-between'>
                        <div className='text-sm'>{name}</div>
                        <StarsRadio callback={setter} />
                    </div>
                ))
            }

            <div className='divider my-1' />

            <label className="block text-start" htmlFor='name'>
                Nickname
                <span className='italic ml-2 opacity-50'>(optional)</span>
            </label>
            <div className='flex flex-row items-center justify-between gap-4 mt-2'>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' name='name' placeholder="Nickname" className="input input-bordered w-full max-w-xs flex-1  placeholder:opacity-50 placeholder:italic" />

                <div className="btn bg-[#191d24]" onClick={() => setName(nameGenerator())}>Generate</div>

            </div>

            <label className="block text-start mt-4" htmlFor='name'>
                Comment
                <span className='italic ml-2 opacity-50'>(optional)</span>
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
