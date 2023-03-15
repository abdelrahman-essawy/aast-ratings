'use client'
import VerifiedIcon from "../../../SVG/VerifiedIcon"
import { Reviews } from "../../../components/Shared/Reviews"
import { ReviewModal } from "../../../components/ReviewForm/ReviewModal"
import useSWR from 'swr'
import Loading from "./loading"
import UpperSection from "../../../components/Shared/PageUpperSection/UpperSection"
import TopBanner from "../../../components/Shared/PageUpperSection/TopBanner"
import { useMemo } from "react"


// export const revalidate = 0
type lecturer = {
  id: string
  name: string
  rating: number
  personalSideRating: number
  scientificSideRating: number
  recommendationRating: number
  role: string
  amountOfReviews: number

  teachCourses: [{
    id: string
    name: string
    rating: number
  }]

  workInColleges: [{
    id: string
    name: string
  }]


  hasReviews: [{
    id: string
    name: string
    rating: number
    comment: string
    personalSideRating: number
    scientificSideRating: number
    recommendationRating: number
    createdAt: string
    score: number
  }]

  achievements: [{
    id: string
    name: string
    description: string
    createdAt: string
    code: number
    gotAt: string
    lostAt: string
  }]

  workInCampus: {
    id: string
    name: string
  }



  contacts: string[]
  img: string
  createdAt: string
}

const fetcher = (url: URL) => fetch(url).then((res) => res.json())
export default function Page({ params }: { params: { id: string } }): JSX.Element {
  const { data: lecturer, error: lecturerError, isLoading: isLecturerLoading, mutate: lecturerMutate, isValidating: lecturerIsValidating } = useSWR(`/api/lecturer?id=${params.id}`, fetcher)
  const { data: reviews, error: reviewsError, isLoading: isReviewsLoading, mutate: reviewsMutate, isValidating: reviewsIsValidating } = useSWR(`/api/review?lecturerId=${params.id}`, fetcher)

  const {
    name,
    amountOfReviews,
    role,
    achievements,
    contacts,
    img,
    rating,
    teachCourses,
    workInColleges,
    workInCampus,
    ratings
  } = useMemo(() => lecturer ?? {} as lecturer, [lecturer])

  if (isLecturerLoading) return <Loading />
  if (lecturerError) return <h1>An error has occurred.</h1>

  return (

    <div className="h-full flex flex-col w-full">

      <TopBanner
        paramsId={params.id}
        workInCampus={workInCampus}
        workInColleges={workInColleges}
      />

      <div className="z-50 bg-base-200 flex flex-col h-full sm:py-4 py-2 px-4 md:px-0 max-w-screen-lg w-full m-auto">

        <UpperSection
          name={name}
          img={img}
          rating={rating}
          amountOfReviews={amountOfReviews}
          achievements={achievements}
          contacts={contacts}
          ratings={ratings}
          teachCourses={teachCourses}
          role={role}
        />

        <div className="divider px-4" />

        <Reviews
          isReviewsLoading={isReviewsLoading}
          reviews={reviews}
          reviewsMutate={reviewsMutate}
        />
        <ReviewModal
          name={name}
          id={params.id}
          lecturer={lecturer}
          reviews={reviews}
          lecturerMutate={lecturerMutate}
          reviewsMutate={reviewsMutate}
        />

      </div>
    </div>

  )



}