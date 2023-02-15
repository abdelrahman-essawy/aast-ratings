"use client"
import Image from "next/image"
import { use } from "react"
import VerifiedIcon from "../../../SVG/VerifiedIcon"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)


const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/lecturer/?id=${id}`).then((res) => res.json())
const timeAgo = new TimeAgo('en-US')

export default function Page({ params }: { params: { id: string } }): JSX.Element {

  const lecturer = use(fetcher(params.id))

  const { name, hasReviews, amountOfReviews, role, img, rating, personalSideRating, scientificSideRating, recommendationRating, teachCourses, createdAt } = lecturer ?? {}
  const now = new Date()
  return (
    <div className="z-50 bg-base-200 flex flex-col h-full sm:py-4 py-2">


      <section className="">
        <div className="flex justify-center items-center py-2">
          <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 relative bg-[#191d24] rounded-full p-4 flex justify-center items-center">
              {
                img ?
                  null
                  :
                  <div className='text-4xl m-auto'>{name?.split(" ").map((n) => n[0])}</div>
              }
            </div>
            <div className='flex'>

              <h2 className="card-title flex p-2">
                {/* <span className='text-lg font-extralight text-gray-400 mr-1'>{role?.charAt(0).toUpperCase() + role?.slice(1)}. </span> */}
                {name}

              </h2>
              {/* <div className="w-5 h-5 fill-gray-700">
                <VerifiedIcon />
              </div> */}
            </div>
          </div>
        </div>


        <div className="bg-base-300 rounded-lg p-4 md:hidden">

          <div className="grid grid-cols-2 gap-1">
            <span className="text-md opacity-50">Reviews: <span className={`text-md opacity-100 ${amountOfReviews == 3 ? 'text-yellow-400' : amountOfReviews > 3 ? 'text-green-400' : 'text-red-400'}`}>{amountOfReviews}</span></span>
            <span className="text-md opacity-50">Courses: <span className={`text-md opacity-100 ${teachCourses?.length == 3 ? 'text-yellow-400' : teachCourses?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{teachCourses?.length}</span></span>
          </div>

          <div className="divider !my-1" />

          <div className="grid grid-cols-2 gap-1">
            <span className="text-md opacity-50">Rating: <span className={`text-md opacity-100 col-start-1 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
            <span className="text-md opacity-50">Personality: <span className={`text-md opacity-100 ${personalSideRating == 3 ? 'text-yellow-400' : personalSideRating > 3 ? 'text-green-400' : 'text-red-400'}`}>{personalSideRating}</span></span>
            <span className="text-md opacity-50">Scientifically: <span className={`text-md opacity-100 ${scientificSideRating == 3 ? 'text-yellow-400' : scientificSideRating > 3 ? 'text-green-400' : 'text-red-400'}`}>{scientificSideRating}</span></span>
            <span className="text-md opacity-50">Recommended: <span className={`text-md opacity-100 ${recommendationRating == 3 ? 'text-yellow-400' : recommendationRating > 3 ? 'text-green-400' : 'text-red-400'}`}>{recommendationRating}</span></span>
          </div>
        </div>

      </section>


      <section className="gap-3 rounded-lg grid-cols-2 hidden md:grid">

        <div className="bg-base-300 rounded-lg p-4">
          <h2 className="card-title mb-3">Score</h2>
          <div className="grid grid-cols-2 gap-1">
            <span className="text-md opacity-50">Rating: <span className={`text-md opacity-100 col-start-1 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}<span className="text-gray-300"> of 5</span></span></span>

            {/* <span className="text-md opacity-50">Reviews: <span className={`text-md opacity-100 ${amountOfReviews == 3 ? 'text-yellow-400' : amountOfReviews > 3 ? 'text-green-400' : 'text-red-400'}`}>{amountOfReviews}</span></span> */}
            <span className="text-md opacity-50">Reviews: <span className={`text-md opacity-100 ${teachCourses?.length == 3 ? 'text-yellow-400' : teachCourses?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{teachCourses?.length}</span></span>
          </div>

          <div className="divider !my-1" />

          <div className="grid grid-cols-2 gap-1">
            {/* <span className="text-md opacity-50">Rating: <span className={`text-md opacity-100 col-start-1 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span> */}
            <span className="text-md opacity-50">Personality: <span className={`text-md opacity-100 ${personalSideRating == 3 ? 'text-yellow-400' : personalSideRating > 3 ? 'text-green-400' : 'text-red-400'}`}>{personalSideRating}</span></span>
            <span className="text-md opacity-50">Scientifically: <span className={`text-md opacity-100 ${scientificSideRating == 3 ? 'text-yellow-400' : scientificSideRating > 3 ? 'text-green-400' : 'text-red-400'}`}>{scientificSideRating}</span></span>
            <span className="text-md opacity-50">Recommended: <span className={`text-md opacity-100 ${recommendationRating == 3 ? 'text-yellow-400' : recommendationRating > 3 ? 'text-green-400' : 'text-red-400'}`}>{recommendationRating}</span></span>
          </div>
        </div>

        <div className="bg-base-300 rounded-lg p-4">
          <h2 className="card-title mb-3">Courses</h2>

          <div className="grid grid-cols-2 gap-1">
            <span className="text-md opacity-50">Courses: <span className={`text-md opacity-100 ${teachCourses?.length == 3 ? 'text-yellow-400' : teachCourses?.length > 3 ? 'text-green-400' : 'text-red-400'}`}>{teachCourses?.length}</span></span>
          </div>

          <div className="divider !my-1" />

          <div className="grid grid-cols-2 gap-1">
            {
              teachCourses?.map(({ id, name, code, rating, amountOfReviews }) => (
                <div key={id} className="flex flex-col">
                  <span className="text-md opacity-50">{name}</span>
                  {/* <span className="text-md opacity-50">{code}</span> */}
                  {/* <span className="text-md opacity-50">Rating: <span className={`text-md opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span> */}
                  {/* <span className="text-md opacity-50">Reviews: <span className={`text-md opacity-100 ${amountOfReviews == 3 ? 'text-yellow-400' : amountOfReviews > 3 ? 'text-green-400' : 'text-red-400'}`}>{amountOfReviews}</span></span> */}
                </div>
              ))
            }
          </div>
        </div>

      </section>

      <div className="divider px-4" />

      <section id='style-1' className="bg-base-300 rounded-lg sm:p-4 p-2 overflow-y-scroll max-h-80 flex-1">
        <h2 className="card-title mb-3 md:block hidden">Reviews</h2>

        {

          hasReviews ? (
            hasReviews.map(({ id, comment, rating, personalSideRating, scientificSideRating, recommendationRating, createdAt }, index) => (
              <div
                key={id}
                className={`chat ${index % 2 === 0 ? 'chat-start' : 'chat-end'}`}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full bg-base-100 shadow p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/1157/1157034.png" />
                  </div>
                </div>
                <div className="chat-header mx-2 mb-1">
                  {/* <span>Student</span> */}
                  <span className="text-xs opacity-50 ">{timeAgo.format(Date.parse(createdAt))}</span>
                </div>
                <div className="chat-bubble p-4">
                  <div className="grid grid-cols-2 gap-1">
                    <span className="text-xs opacity-50">Rating: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
                    <span className="text-xs opacity-50">Personality: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{personalSideRating}</span></span>
                    <span className="text-xs opacity-50">Scientifically: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{scientificSideRating}</span></span>
                    <span className="text-xs opacity-50">Recommended: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{recommendationRating}</span></span>
                  </div>
                  <div className="divider !my-1" />

                  <div className="mt-2 ml-2">

                    {comment}
                  </div>
                </div>

              </div>

            )
            )

          ) : (
            <div>
              <h1 className="text-xl font-bold text-center">No reviews yet.</h1>
            </div>
          )
        }
      </section>

      <button className="btn btn-block mt-2 bg-neutral-900">review</button>

    </div>

  )



}