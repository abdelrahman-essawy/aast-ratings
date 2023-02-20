"use client"
import React, { useState } from 'react'

import { Choose } from './Choose';
import { Stepper } from './Stepper';
import { AASTLogo } from '../../SVG/AASTLogo';
import Link from 'next/link';

const Start = ({ data }) => {

    const [campusId, setCampusId] = useState(null)

    const [collegeId, setCollegeId] = useState(null)

    const [courseId, setCourseId] = useState(null)



    const campuses = data
    const campusName = campuses.find((item) => item.id === campusId)?.name
    const colleges = campuses.find((item) => item.id === campusId)?.hasColleges
    const collegeName = colleges?.find((item) => item.id === collegeId)?.name
    const courses = colleges?.find((item) => item.id === collegeId)?.hasCourses
    const courseName = courses?.find((item) => item.id === courseId)?.name

    console.log(campusName)


    const [searchKeyword, setSearchKeyword] = useState('')
    const [isClicked, setIsClicked] = useState(false)
    const [isAllEntered, setIsAllEntered] = useState(false)
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleClick = () => {
        setIsClicked(true)
    }
    return (
        <section className='flex flex-col max-w-screen-md m-auto md:mt-8 md:gap-8 py-4 md:py-0'>
            {/* hero */}
            <div className='md:flex md:flex-row items-stretch justify-center gap-6 p-16 w-full m-auto px-4 md:p-0 bg-base-200 pb-0 pt-4'>
                <div className='relative overflow-hidden'>
                    {/* 
                    <Image
                        quality={1}
                        alt='start page logo'
                        style={{
                            objectFit: 'contain',
                        }} fill src="/start.webp" className='hidden md:block' /> */}
                    <div className='hidden md:block fill-red-900'>

                        <AASTLogo width={260} className='fill-zinc-300' />
                    </div>
                </div>

                <div className='max-w-lg md:self-center px-4'>
                    <h1 className="md:text-5xl text-4xl font-bold ">Your<br></br>Education,<br></br>Your <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Journey.</span></h1>
                    <p className="mt-6">Leave a Feedback. Make a Difference!</p>
                </div>
            </div>


            <div className='flex flex-col items-center justify-center gap-4 pt-8 max-w-screen-lg w-full m-auto px-6 md:p-0 bg-base-200 md:mt-8'>
                <div className='w-full gap-5 flex flex-col'>
                    <div className='grid md:grid-cols-3 md:justify-between gap-5'>
                        <Choose name={'Campus'} data={campuses} setCampusId={setCampusId} />
                        <Choose name={'College'} data={colleges} setCollegeId={setCollegeId} />
                        <Choose name={'Course'} data={courses} setCourseId={setCourseId} setIsAllEntered={setIsAllEntered} />
                    </div>
                    <Stepper className='col-span-3 w-full' campusName={campusName} collegeName={collegeName} courseName={courseName} />
                    {/* <Stepper campusName={campusName} collegeName={collegeName} courseName={courseName} /> */}
                    <div className={`${!isAllEntered && 'cursor-not-allowed'}`}>
                        <Link href={`/show?courseId=${courseId}`} onClick={handleClick} className={`btn btn-block col-span-3 ${!isAllEntered && 'pointer-events-none'}`}>Next</Link>
                        {/* collegeId=${campusId}&collegeId=${collegeId}& */}
                    </div>


                </div>

            </div>
        </section>

    )
}
export default Start