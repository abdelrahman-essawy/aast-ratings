"use client"
import React, { use, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { Stepper } from './Stepper'


// const fetcher = (url: string = 'https://aast-ratings.vercel.app/api/campus') => fetch(url).then((res) => res.json())
// const fetcher = async (url: string, id: string = null) => await fetch(`${url}?id=${id}`).then((res) => res.json())
// const campusPromise = fetcher(`http://localhost:3000/api/campus`)
// const collegePromise = fetcher(`http://localhost:3000/api/college`, campusId)
// const coursePromise = fetcher(`http://localhost:3000/api/course`, courseId)

// const handleApiRequest = async (url: string, id: string = null) => {
//     const res = await fetch(`${url}?id=${id}`)
//     const data = await res.json()
//     return data
// }

// const cachedFetch = (url: string, id: string = '') => {
//     return handleApiRequest(url)
// }

export const Choose = ({ name, data, setCampusId, setCollegeId, setCourseId, setIsAllEntered }: {
    name: string,
    data: [{ name: String, id: String }],
    setCampusId: React.Dispatch<any>,
    setCollegeId: React.Dispatch<any>,
    setCourseId: React.Dispatch<any>,
    setIsAllEntered: React.Dispatch<any>

}) => {


    // // const [campusId, setCampusId] = useState(null)
    // const [campusName, setCampusName] = useState(null)

    // // const [collegeId, setCollegeId] = useState(null)
    // const [collegeName, setCollegeName] = useState(null)

    // // const [courseId, setCourseId] = useState(null)
    // const [courseName, setCourseName] = useState(null)





    // const [options, setOptions] = useState(
    //     [
    //         { name: 'campus', makeRequest: true, result: use(cachedFetch('http://localhost:3000/api/campus')) },
    //         { name: 'college', makeRequest: false, result: use(handleApiRequest('http://localhost:3000/api/college', campusId)) },
    //         { name: 'course', makeRequest: false, result: use(handleApiRequest('http://localhost:3000/api/course', courseId)) }
    //     ]
    // )

    const [options, setOptions] = useState(
        [
            { name: 'campus', show: true, data: data },
            { name: 'college', show: false, data: data },
            { name: 'course', show: false, data: data }
        ]
    )

    return (
        <div className='w-full'>


            <div>
                {/* <h2 className='mb-4'>Choose {name}</h2> */}
                <h1 className='text-3xl font-bold text-gray-200'>
                    <Select onValueChange={
                        (value) => {
                            switch (name) {
                                case 'Campus':
                                    setCampusId(value)
                                    break;
                                case 'College':
                                    setCollegeId(value)
                                    break;
                                case 'Course':
                                    setCourseId(value)
                                    setIsAllEntered(true)
                                    break;
                                default:
                                    break;
                            }
                            // options[index + 1].show = true
                        }
                    }>
                        <div className={`${data === undefined && 'cursor-not-allowed'}`}>
                            <SelectTrigger className={`h-12 transition-all duration-300 ease-in-out ${data === undefined && ' bg-gray-700 pointer-events-none'}`}>
                                <SelectValue placeholder={name} />
                            </SelectTrigger>
                            <SelectContent className='bg-base-200 w-full'>

                                {
                                    data?.map(({ name, id }: { name: String, id: String }, index) => {
                                        return (
                                            <SelectItem value={id as string} key={index} className='py-2'>{name}</SelectItem>
                                        )
                                    })

                                }
                            </SelectContent>
                        </div>


                    </Select>
                </h1>
            </div>


        </div >
    )
}
