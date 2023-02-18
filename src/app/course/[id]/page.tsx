import Image from "next/image"
import { use } from "react"
import { Colleges } from "../../../components/Course/Colleges"
import { Lecturers } from "../../../components/Course/Lecturers"
import { Achievements } from "../../../components/Lecturer/Achievements"
import { Courses } from "../../../components/Lecturer/Courses"
import { Ratings } from "../../../components/Lecturer/Ratings"
import { Reviews } from "../../../components/Lecturer/Reviews"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { MobileRatings } from "../../../components/Shared/Mobile/Ratings"
import { MobileCourses } from "../../../components/Shared/Mobile/MobileCourses"


const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/course/?id=${id}`).then((res) => res.json())

export default function Page({ params }: { params: { id: string } }): JSX.Element {

    const course = use(fetcher(params.id))

    const { name, hasReviews, taughtByLecturers, achievements, availableInColleges, rating, amountOfReviews } = course ?? {}
    const now = new Date()
    const oneStarReviews = hasReviews?.filter((review: any) => review.rating == 1)
    const twoStarReviews = hasReviews?.filter((review: any) => review.rating == 2)
    const threeStarReviews = hasReviews?.filter((review: any) => review.rating == 3)
    const fourStarReviews = hasReviews?.filter((review: any) => review.rating == 4)
    const fiveStarReviews = hasReviews?.filter((review: any) => review.rating == 5)
    return (
        <div className="z-50 bg-base-200 flex flex-col h-full sm:py-4 py-2">


            <section>
                {/* <div className="flex justify-center items-center py-2">
                    <div className="flex flex-col justify-center items-center">

                        <div className='flex'>

                            <h2 className="card-title flex p-2">
                                {name}
                            </h2>

                        </div>
                    </div>
                </div> */}


                <div className="bg-base-300 rounded-lg p-4 hidden">

                    <div className="grid grid-cols-2 gap-1">
                        <span className="text-md opacity-50">Reviews: <span className={`text-md opacity-100 ${hasReviews?.length == 3 ? 'text-yellow-400' : hasReviews?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{hasReviews?.length}</span></span>
                        <span className="text-md opacity-50">Courses: <span className={`text-md opacity-100 ${taughtByLecturers?.length == 3 ? 'text-yellow-400' : taughtByLecturers?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{taughtByLecturers?.length}</span></span>
                    </div>

                    <div className="divider !my-1" />

                    <div className="grid grid-cols-2 gap-1">
                        <span className="text-md opacity-50">Rating: <span className={`text-md opacity-100 col-start-1 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
                    </div>
                </div>

            </section>

            {/* Mobile */}

            <Tabs defaultValue="Ratings" className="block md:hidden">
                {/* 
                <TabsContent value="Courses" className="p-0 border-none h-20 mt-auto">
                    <MobileCourses role={role} teachCourses={teachCourses ?? []} />
                </TabsContent> */}

                <TabsContent value="Ratings" className="p-0 border-none h-20 mt-auto">
                    <MobileRatings rating={rating} achievements={achievements ?? []} amountOfReviews={hasReviews?.length} />
                </TabsContent>



                <TabsContent value="Lecturers" className="p-0 border-none h-20 mt-auto">
                    <Lecturers taughtByLecturers={taughtByLecturers} />
                </TabsContent>

                <div className="flex justify-center items-center">
                    <TabsList className="mt-4">
                        <TabsTrigger value="Ratings">Ratings</TabsTrigger>
                        <TabsTrigger value="Lecturers">Lecturers</TabsTrigger>
                    </TabsList>
                </div>

            </Tabs>

            <section className="gap-3 grid-cols-3 hidden md:grid">

                <div className="grid grid-rows-2 gap-3">

                    <Colleges availableInColleges={availableInColleges} />
                    <Achievements achievements={achievements} />

                </div>


                <Ratings rating={rating} hasReviews={hasReviews} />

                <Lecturers taughtByLecturers={taughtByLecturers} />

            </section>

            <div className="divider px-4" />

            <Reviews hasReviews={hasReviews} />

            <button className="btn btn-block mt-2 bg-neutral-900">review</button>

        </div>

    )



}