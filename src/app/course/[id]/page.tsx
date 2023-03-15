"use client"
import Image from "next/image"
import { use, useMemo } from "react"
import { Colleges } from "../../../components/Course/Colleges"
import { Lecturers } from "../../../components/Course/Lecturers"
import { Achievements } from "../../../components/Lecturer/Achievements"
import { Courses } from "../../../components/Lecturer/Courses"
import { Ratings } from "../../../components/Lecturer/Ratings"
import { Reviews } from "../../../components/Lecturer/Reviews"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { MobileRatings } from "../../../components/Shared/Mobile/Ratings"
import { MobileCourses } from "../../../components/Shared/Mobile/MobileCourses"
import useSWR from 'swr'
import { ReviewModal } from "../../../components/ReviewForm/ReviewModal"
import Loading from "../../lecturer/[id]/loading"
import TopBanner from "../../../components/Shared/PageUpperSection/TopBanner"
import UpperSection from "../../../components/Shared/PageUpperSection/UpperSection"


const fetcher = (url: URL) => fetch(url).then((res) => res.json())

export default function Page({ params }: { params: { id: string } }): JSX.Element {
    const { data: course, error, isLoading, mutate, isValidating } = useSWR(`/api/course?id=${params.id}`, fetcher)


    const {
        name,
        hasReviews,
        taughtByLecturers,
        achievements,
        availableInColleges,
        rating,
        _count
    } = useMemo(() => course ?? {}, [course])

    if (isLoading) return <Loading />
    return (
        <div className="h-full flex flex-col w-full">


            <TopBanner
                paramsId={params.id}
                availableInColleges={availableInColleges}
                courseName={name}
            />

            <div className="z-50 bg-base-200 flex flex-col h-full sm:py-4 py-2 px-4 md:px-0 max-w-screen-lg w-full m-auto">

                <UpperSection
                    name={name}
                    rating={rating}
                    amountOfReviews={_count.hasReviews}
                    hasReviews={hasReviews}
                    taughtByLecturers={taughtByLecturers}
                    availableInColleges={availableInColleges}
                    achievements={achievements}
                />

                <div className="divider px-4 my-1 md:my-3" />

                <Reviews hasReviews={hasReviews} />
                <ReviewModal name={name} id={params.id} mutate={mutate} course={course} />

            </div>


        </div>

    )



}