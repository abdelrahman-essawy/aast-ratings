"use client"
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { randomNameGenerator } from '../randomNameGenerator';
import { StarsRadio } from './StarsRadio';
import { useRouter } from 'next/navigation';
import { revalidate } from '../revalidate';
import useSWR from 'swr';
import { randomAvatarGenerator } from '../randomAvatarGenerator';
import ReactDOMServer from 'react-dom/server';

export function encodeSvg(reactElement) {
    return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup((reactElement)));
}


const FormTemplate = React.memo(({ id, lecturer, course, mutate }: any) => {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [comment, setComment] = useState('');
    const [personalSideRating, setPersonalSideRating] = useState(1);
    const [scientificSideRating, setScientificSideRating] = useState(1);
    const [recommendationRating, setRecommendationRating] = useState(1);
    const [courseContent, setCourseContent] = useState(1);
    const [materialQuality, setMaterialQuality] = useState(1);
    const [realworldPracticality, setrealworldPracticality] = useState(1);

    const [loading, setLoading] = useState(false);

    const randomData = useCallback(() => {
        setName(randomNameGenerator());
        setAvatar(randomAvatarGenerator());
    }, [])

    useEffect(() => {
        randomData();
    }, [randomData])

    const ratings = useMemo(
        () => {
            return getOptions(lecturer, personalSideRating, setPersonalSideRating, scientificSideRating, setScientificSideRating, recommendationRating, setRecommendationRating, course, courseContent, setCourseContent, materialQuality, setMaterialQuality, realworldPracticality, setrealworldPracticality);
        },
        [course, courseContent, lecturer, materialQuality, personalSideRating, realworldPracticality, recommendationRating, scientificSideRating],
    )


    const overall = useMemo(() => {
        if (lecturer) {
            return Math.round(((Number(personalSideRating) + Number(scientificSideRating) + Number(recommendationRating)) / 3) * 10) / 10;
        }
        if (course) {
            return Math.round(((Number(courseContent) + Number(materialQuality) + Number(realworldPracticality)) / 3) * 10) / 10;
        }
    }, [lecturer, course, personalSideRating, scientificSideRating, recommendationRating, courseContent, materialQuality, realworldPracticality]);

    const options = useMemo(() => {
        return {
            optimisticData: () => {
                if (lecturer) {
                    return {
                        ...lecturer,
                        amountOfReviews: lecturer.amountOfReviews + 1,
                        personalSideRating: Math.round(lecturer.personalSideRating * lecturer.amountOfReviews + personalSideRating) / (lecturer.amountOfReviews + 1),
                        scientificSideRating: Math.round(lecturer.scientificSideRating * lecturer.amountOfReviews + scientificSideRating) / (lecturer.amountOfReviews + 1),
                        recommendationRating: Math.round(lecturer.recommendationRating * lecturer.amountOfReviews + recommendationRating) / (lecturer.amountOfReviews + 1),
                        ratings,
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
                }



                if (course) {
                    return {
                        ...course,
                        amountOfReviews: course.amountOfReviews + 1,
                        courseContent: Math.round(course.courseContent * course.amountOfReviews + courseContent) / (course.amountOfReviews + 1),
                        materialQuality: Math.round(course.materialQuality * course.amountOfReviews + materialQuality) / (course.amountOfReviews + 1),
                        realworldPracticality: Math.round(course.realworldPracticality * course.amountOfReviews + realworldPracticality) / (course.amountOfReviews + 1),
                        ratings,
                        hasReviews: [
                            {
                                id: 'pending',
                                avatar: encodeSvg(avatar),
                                author: name,
                                comment,
                                courseContent,
                                materialQuality,
                                realworldPracticality,
                                rating: overall,
                                createdAt: new Date().toISOString(),
                                score: 0
                            },
                            ...course.hasReviews,
                        ],
                    }
                }


            },
            rollbackOnError(error) {
                return error.name !== 'AbortError'
            },

        };
    }, [lecturer, course, personalSideRating, scientificSideRating, recommendationRating, ratings, avatar, name, comment, overall, courseContent, materialQuality, realworldPracticality]);


    const addReview = useCallback(async () => {

        const handleURL = () => {
            if (lecturer)
                return `/api/review?lecturerId=${id}&author=${name}&comment=${comment}&personalSideRating=${personalSideRating}&scientificSideRating=${scientificSideRating}&recommendationRating=${recommendationRating}&rating=${overall}`

            if (course)
                return `/api/review?courseId=${id}&author=${name}&comment=${comment}&courseContent=${courseContent}&materialQuality=${materialQuality}&realworldPracticality=${realworldPracticality}&rating=${overall}`

        }

        await fetch(handleURL(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).finally(() => {
            mutate()
        })
    }, [avatar, comment, id, mutate, name, personalSideRating, recommendationRating, scientificSideRating])

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        try {
            addReview()
            await sleep(800)
            mutate(options.optimisticData())
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setLoading(false);
            document.getElementById('closeDialog')?.click()
        }
    }, [addReview, mutate, options]);



    return (
        <>
            <label className="block opacity-70 font-medium text-white text-start" >
                Rating
                <span className='italic ml-2 opacity-50 font-light'>(required)</span>
            </label>
            <div className='divider my-1' />

            <div className='flex flex-row gap-2'>
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

                <div className='min-w-fit'>
                    <div className='text-md text-center mb-1 opacity-70 font-medium text-white'>Overall</div>
                    <div className='px-4 py-3 bg-[#191d24] rounded-lg w-16'>
                        <p className={`text-lg text-center ${overall == 3 ? 'text-yellow-400' : overall > 3 ? 'text-green-400' : 'text-red-400'}`}>
                            {overall}
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
                        <div className="w-12" onClick={() => randomData()}>
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

                        <div className="btn bg-[#191d24]" onClick={() => randomData()}>Generate</div>

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
        </>
    )
}
)

FormTemplate.displayName = 'FormTemplate'

export default FormTemplate

const getOptions = (lecturer?: any,
    personalSideRating?: number,
    setPersonalSideRating?: React.Dispatch<React.SetStateAction<number>>,
    scientificSideRating?: number,
    setScientificSideRating?: React.Dispatch<React.SetStateAction<number>>,
    recommendationRating?: number,
    setRecommendationRating?: React.Dispatch<React.SetStateAction<number>>,
    course?: any, courseContent?: number,
    setCourseContent?: React.Dispatch<React.SetStateAction<number>>,
    materialQuality?: number,
    setMaterialQuality?: React.Dispatch<React.SetStateAction<number>>,
    realworldPracticality?: number,
    setrealworldPracticality?: React.Dispatch<React.SetStateAction<number>>) => {
    if (lecturer) {
        return [{
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
        }];
    }
    if (course) {
        return [{
            name: 'Course Content',
            rating: courseContent,
            setter: setCourseContent
        }, {
            name: 'Material Quality',
            rating: materialQuality,
            setter: setMaterialQuality
        },
        {
            name: 'Real-world Practicality',
            rating: realworldPracticality,
            setter: setrealworldPracticality
        }];
    }
}
export { getOptions }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}