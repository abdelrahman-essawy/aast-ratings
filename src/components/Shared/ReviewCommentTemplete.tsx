import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReviewArrowFilled from '../../SVG/ReviewArrowFilled'
import NoSSR from '../NoSSR'
import ScoreArrows from './ScoreArrows'
import { randomAvatarGenerator } from '../randomAvatarGenerator'
import base64 from "react-native-base64";
import { getOptions } from '../ReviewForm/FormTemplete'


function decodeSvg(base64ImageFormat, appTitle) {
    let url = base64ImageFormat;
    if (base64ImageFormat.indexOf("data:image/svg;base64,") > -1) {
        let decodedSvg = base64.decode(
            base64ImageFormat.replace("data:image/svg;base64,", "")
        );
        let blob = new Blob([decodedSvg], { type: "image/svg+xml" });
        url = URL.createObjectURL(blob);
    }
    return <img src={url} alt={`image for ${appTitle}`} />;
    //return svgs;
    //return React.createElement("div", null, { img });
    //return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(svgs) }} />;
}
interface ReviewCommentTempleteProps {
    id: string,
    avatar: string,
    author: string,
    comment: string,
    rating: number,
    personalSideRating?: number,
    scientificSideRating?: number,
    recommendationRating?: number,
    courseContent?: number,
    materialQuality?: number,
    realworldPracticality?: number,
    createdAt: string,
    score: number
}
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')


export default function ReviewCommentTemplete(
    {
        id,
        avatar,
        author,
        comment,
        rating,
        personalSideRating,
        scientificSideRating,
        recommendationRating,
        courseContent,
        materialQuality,
        realworldPracticality,
        createdAt,
        score,
    }: ReviewCommentTempleteProps
) {
    const options = [{
        name: 'Personalaity',
        value: personalSideRating,
    },
    {
        name: 'Scientifically',
        value: scientificSideRating,
    },
    {
        name: 'Recommended',
        value: recommendationRating,
    },
    {
        name: 'Course Content',
        value: courseContent,
    },
    {
        name: 'Material Quality',
        value: materialQuality,
    },
    {
        name: 'Practicality',
        value: realworldPracticality,
    }]
    console.log(realworldPracticality)
    return (
        <div
            key={id}
            className={`chat chat-start mb-4 gap-x-2 ${id === 'pending' ? 'fadeInLeft' : null}`}>
            <div className="chat-image avatar">
                <div className="w-11">
                    {/* {avatar ? decodeSvg(avatar, 'avatar') : randomAvatarGenerator()} */}
                    {randomAvatarGenerator()}
                </div>
            </div>
            <div className="chat-header mx-2 mb-1 flex flex-row items-center gap-4">
                <span>{author}</span>
                <span className="text-xs opacity-50 ">{timeAgo.format(Date.parse(createdAt))}</span>
            </div>
            <div className={`chat-bubble p-4 ${id === 'pending' ? 'bg-base-100' : null} transition ease-in-out duration-500`}>
                <div className="grid grid-cols-2 gap-1 w-fit">
                    <span className="text-xs opacity-50">Overall: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
                    {
                        options.map(({ name, value }, i) => {
                            return (
                                value > 0 &&
                                <span key={i} className="text-xs opacity-50">{name}: <span className={`text-xs opacity-100 ${value == 3 ? 'text-yellow-400' : value > 3 ? 'text-green-400' : 'text-red-400'}`}>{value}</span></span>
                            )
                        })


                    }

                </div>


                <div className="my-3">

                    {comment}
                </div>



                <div className="-ml-1 flex flex-row items-center gap-3">
                    <ScoreArrows id={id} score={score} mutate={()=>{}} />
                    <div className='hover:bg-base-100 p-2 rounded-lg select-none transition duration-150 ease-in-out cursor-pointer active:scale-95'>
                        <p className='text-xs font-medium'>Report</p>
                    </div>
                </div>

            </div>

        </div >
    )
}