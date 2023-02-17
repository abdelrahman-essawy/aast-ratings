import Image from "next/image"
import { use, useState } from "react"
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


        <div className="bg-base-300 rounded-lg p-4 hidden">

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

      {/* Mobile */}

      <section className="gap-3 grid grid-cols-3 md:hidden">
        <div className="bg-base-300 rounded-lg p-2">
          <h2 className="card-title mb-3 text-sm">Rating</h2>
          <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"><span className="text-4xl">{rating} </span>/5</p>
        </div>
        <div className="bg-base-300 rounded-lg">
          asd
        </div>
        <div className="bg-base-300 rounded-lg">
          asd
        </div>
      </section>

      <section className="gap-3 rounded-lg grid-cols-2 hidden md:grid">

        <div className="bg-base-300 rounded-lg p-4">
          <h2 className="card-title mb-3">Rating</h2>

          <div className="">
            <div className="flex items-center mb-3">
              <svg aria-hidden="true" className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{rating} out of 5</p>
            </div>
            
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{amountOfReviews} total reviews</p>
            {/* <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-purple-700 rounded" style={{ width: '70%' }} />
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-purple-700 rounded" style={{ width: '17%' }} />
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-purple-700 rounded" style={{ width: '8%' }} />
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-purple-700 rounded" style={{ width: '4%' }} />
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
            </div> */}

            <div className="grid gap-4 mt-4 w-full">



              {
                [...Array(5)].map((_, i) => (
                  <div key={i} className="ml-2 flex items-center w-full space-x-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-500 inline-block">{5 - i} star</span>
                    <div className="h-5 w-9/12 bg-gray-200 rounded dark:bg-gray-700">
                      <div className="h-5 bg-purple-700 rounded" style={{ width: `${(i + 1 < 3 ? i + 1 : i - 1) * 10}%` }} />
                    </div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-500 mr-auto ">{(i + .4) * 20}%</span>
                    {/* <span className="text-sm font-medium text-gray-500 dark:text-gray-500">-</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-500">{(i + .4) * 20}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-500">Reviews</span> */}
                  </div>
                ))

              }

            </div>






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
        <h2 className="card-title mb-3 md:block">Reviews</h2>

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