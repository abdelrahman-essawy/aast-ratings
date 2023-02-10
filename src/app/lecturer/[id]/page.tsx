import Image from "next/image"
import { use } from "react"
import VerifiedIcon from "../../../SVG/VerifiedIcon"

const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/lecturer/?id=${id}`).then((res) => res.json())

export default function Page({ params }: { params: { id: string } }): JSX.Element {

  const lecturer = use(fetcher(params.id))

  const { name, hasReviews, amountOfReviews, role, img, rating, personalSideRating, scientificSideRating, recommendationRating, teachCourses } = lecturer
  return (
    <div className="z-50 bg-base-200 flex flex-col h-full">


      <section>
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





        <div className="bg-base-300 rounded-lg p-4">

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


        <div className="divider" />

      </section>


      <section className="overflow-y-scroll flex-1">
        {

          hasReviews ? (
            hasReviews.map(({ id, comment, rating, personalSideRating, scientificSideRating, recommendationRating }) => (
              <div
                key={id}
                className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full bg-base-300 shadow p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/1157/1157034.png" />
                  </div>
                </div>
                <div className="chat-header">
                  <span>AASTian</span>
                  <time className="text-xs opacity-50 text-end ml-2">2 hours ago</time>
                </div>
                <div className="chat-bubble">
                  <div className="grid grid-cols-2 gap-1">
                    <span className="text-xs opacity-50">Rating: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span></span>
                    <span className="text-xs opacity-50">Personality: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{personalSideRating}</span></span>
                    <span className="text-xs opacity-50">Scientifically: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{scientificSideRating}</span></span>
                    <span className="text-xs opacity-50">Recommended: <span className={`text-xs opacity-100 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{recommendationRating}</span></span>
                  </div>

                  <div className="mt-2">

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

    </div>

  )



}