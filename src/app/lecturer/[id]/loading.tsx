import React from 'react'
import Image from "next/image"
import { use } from "react"
import VerifiedIcon from "../../../SVG/VerifiedIcon"
import { Reviews } from "../../../components/Lecturer/Reviews"
import { Ratings } from "../../../components/Lecturer/Ratings"
import { Courses } from "../../../components/Lecturer/Courses"
import { Contacts } from "../../../components/Lecturer/Contacts"
import { Achievements } from "../../../components/Lecturer/Achievements"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { MobileRatings } from "../../../components/Shared/Mobile/Ratings"
import { MobileCourses } from "../../../components/Shared/Mobile/MobileCourses"
import { ReviewModal } from "../../../components/ReviewForm/ReviewModal"
import ReviewArrowFilled from '../../../SVG/ReviewArrowFilled'
function Loading() {
    return (
        <div className='w-full'>
            <div className="relative sm:h-16 h-12 overflow-y-hidden flex justify-center items-center bg-base-300 overflow-hidden w-full">
                <div className="flex justify-between inset-y-1/2 -translate-y-1/2 h-fit absolute z-10 w-full items-center text-center max-w-screen-lg px-4">

                    <p className="z-10 bg-clip-text font-medium m-auto sm:m-0 text-lg sm:text-xl">College</p>

                    <p className="z-10 bg-clip-text font-medium m-auto sm:m-0 text-lg sm:text-xl hidden sm:block">Campus</p>

                </div>
                <Image
                    priority
                    quality={10}
                    className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
                    src={`/computer-science.webp`} alt='' fill />

            </div>


            <div className="z-50 bg-base-200 flex flex-col h-full sm:py-4 py-2 px-4 md:px-0 max-w-screen-lg w-full m-auto">


                <section className="">
                    <div className="flex justify-center items-center py-2">
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-32 h-32 relative bg-[#191d24] rounded-full p-4 flex justify-center items-center overflow-hidden">
                                {

                                    <div className="flex items-center justify-center w-full h-48 rounded sm:w-96 animate-pulse">
                                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                    </div>

                                }
                            </div>
                            <div className='flex'>

                                <h2 className="card-title flex p-3">
                                    <div className='h-5 px-28 bg-base-100 animate-pulse rounded-full' />
                                </h2>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Mobile */}

                <Tabs defaultValue="Ratings" className="block md:hidden">

                    <TabsContent value="Contacts" className="p-0 border-none h-20 mt-auto">
                        <Contacts contacts={[]} />
                    </TabsContent>

                    <TabsContent value="Ratings" className="p-0 border-none h-20 mt-auto">
                        <MobileRatings rating={0} achievements={[]} amountOfReviews={0} />
                    </TabsContent>

                    <TabsContent value="Courses" className="p-0 border-none h-20 mt-auto">
                        <MobileCourses role={''} teachCourses={[]} />
                    </TabsContent>

                    <div className="flex justify-center items-center">
                        <TabsList className="mt-4">
                            <TabsTrigger value="Contacts">Contacts</TabsTrigger>
                            <TabsTrigger value="Ratings">Ratings</TabsTrigger>
                            <TabsTrigger value="Courses">Courses</TabsTrigger>
                        </TabsList>
                    </div>

                </Tabs>

                <section className="gap-3 grid-cols-3 hidden md:grid">

                    <div className="flex flex-col  items-start gap-3">

                        <div className="w-full">

                            <div className="bg-base-300 rounded-lg p-3 md:p-4 h-full">
                                <h2 className="card-title md:mb-3 mb-1 text-xs md:text-xl">Contacts</h2>
                                <p className={`my-3 h-3 w-32 bg-base-100 rounded-full animate-pulse`}></p>
                            </div >

                        </div>

                        <div className="flex-1 w-full">



                            <div className="bg-base-300 rounded-lg w-full p-3 overflow-y-auto max-h-52 h-full">


                                <h2 className="card-title mb-3">Achievements</h2>
                                <div className=' px-4'>


                                    {
                                        [Array(1)]?.length > 0 ?
                                            <ol className="relative border-l border-gray-200 dark:border-gray-700">

                                                {
                                                    [...Array(1)]?.map((_, index) => {

                                                        return <li key={index} className="mb-6 ml-4 grid gap-1">
                                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 h-2 w-20 bg-base-100 rounded-full animate-pulse"></time>
                                                            <h3 className="text-md font-semibold text-gray-900 dark:text-white h-3 w-32 bg-base-100 my-1 rounded-full animate-pulse"></h3>
                                                            <p className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400 mt-1 h-2 w-48 bg-base-100 rounded-full animate-pulse"></p>
                                                            <p className={`ml-2 text-xs font-normal text-gray-500 dark:text-gray-400 mt-1 h-2 w-14 bg-base-100 rounded-full animate-pulse`}></p>
                                                            <p className={`ml-2 text-xs font-normal text-gray-500 dark:text-gray-400 mt-1 h-2 w-7 bg-base-100 rounded-full animate-pulse`}></p>
                                                        </li>

                                                    }
                                                    )

                                                }

                                            </ol>


                                            :
                                            <span className="text-md opacity-50">No achievements</span>


                                    }
                                </div>

                            </div>

                        </div>


                    </div>

                    <Ratings rating={0} hasReviews={[]} amountOfReviews={0} />



                    <div className="bg-base-300 rounded-lg p-4">
                        <h2 className="card-title mb-3">Courses</h2>

                        <div className="grid grid-cols-2 gap-1">
                            <div className="h-2 w-16 bg-base-100 rounded-full animate-pulse my-2"></div>
                        </div>

                        <div className="divider !my-1" />

                        <div className="grid grid-cols-1 gap-3 mt-3">
                            {
                                [...Array(2)]?.map((_, i) => (
                                    <div key={i} className="flex flex-row flex-wrap justify-between">
                                        <div className={`h-2 ${i == 0 ? 'w-36' : 'w-20'} bg-base-100 rounded-full animate-pulse`}></div>
                                        <span className='h-2 w-6 bg-base-100 rounded-full animate-pulse'></span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </section>

                <div className="divider px-4" />


                {/* Reviews */}
                <section id='style-1' className="bg-base-300 rounded-lg flex-1">
                    <div className='sm:p-4 p-2 '>
                        <h2 className="card-title md:block">Reviews</h2>

                    </div>
                    <div className='overflow-y-hidden max-h-96 min-h-16 sm:px-4 px-2'>

                        {
                            [...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`chat chat-start mb-4 gap-x-2`}>
                                    <div className="chat-image avatar">
                                        <div className="p-3 bg-[#191d24] animate-pulse rounded-full">

                                            <svg
                                                className="w-4 h-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>

                                        </div>
                                    </div>
                                    <div className="chat-header mx-2 mb-2 flex flex-row items-center gap-4">
                                        <span className='h-2 w-20 bg-base-100 rounded-full animate-pulse' />
                                        <span className="h-2 w-20 bg-base-100 rounded-full animate-pulse" />
                                    </div>
                                    <div className="chat-bubble p-4">
                                        <div className="grid grid-cols-2 gap-1 w-fit">
                                            {
                                                [...Array(4)].map((_, i) => (
                                                    <span key={i} style={{ width: (i + 7) * 10 }} className={`text-xs opacity-50 h-2 bg-base-100 rounded-full animate-pulse`} />
                                                ))
                                            }
                                        </div>

                                        <div className='my-3 flex flex-col gap-1'>
                                            <div className="h-2 w-20 bg-base-100 rounded-full animate-pulse" />
                                            <div className="h-2 w-40 bg-base-100 rounded-full animate-pulse" />
                                            <div className="h-2 w-40 bg-base-100 rounded-full animate-pulse" />
                                        </div>



                                        <div className="-ml-1 flex flex-row items-center gap-3">
                                            <div className='flex flex-row gap-1 items-center'>
                                                <ReviewArrowFilled className="w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
                                                <span className="text-sm opacity-70 font-bold">0</span>

                                                <ReviewArrowFilled className="rotate-180 w-7 h-7 fill-none stroke-gray-400 hover:fill-gray-400 transition duration-150 ease-in-out cursor-pointer md:active:scale-75 active:scale-90 p-1" />
                                            </div>
                                            <div className='hover:bg-base-100 p-2 rounded-lg select-none transition duration-150 ease-in-out cursor-pointer active:scale-95'>
                                                <p className='text-xs font-medium'>Report</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))

                        }
                    </div>
                </section>
                <ReviewModal name={''} id={''} />



            </div>
        </div>
    )
}

export default Loading