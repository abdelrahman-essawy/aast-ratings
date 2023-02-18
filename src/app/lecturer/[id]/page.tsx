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



const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/lecturer/?id=${id}`).then((res) => res.json())

export default function Page({ params }: { params: { id: string } }): JSX.Element {

  const lecturer = use(fetcher(params.id))

  const { name, hasReviews, amountOfReviews, role, achievements, contacts, img, rating, personalSideRating, scientificSideRating, recommendationRating, teachCourses, createdAt } = lecturer ?? {}
  const now = new Date()
  const oneStarReviews = hasReviews?.filter((review: any) => review.rating == 1)
  const twoStarReviews = hasReviews?.filter((review: any) => review.rating == 2)
  const threeStarReviews = hasReviews?.filter((review: any) => review.rating == 3)
  const fourStarReviews = hasReviews?.filter((review: any) => review.rating == 4)
  const fiveStarReviews = hasReviews?.filter((review: any) => review.rating == 5)
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




      <Tabs defaultValue="Ratings" className="block md:hidden">

        <TabsContent value="Contacts" className="p-0 border-none h-20 mt-auto">
          <Contacts contacts={contacts} />
        </TabsContent>

        <TabsContent value="Ratings" className="p-0 border-none h-20 mt-auto">
          <MobileRatings rating={rating} achievements={achievements} amountOfReviews={amountOfReviews} />
        </TabsContent>

        <TabsContent value="Courses" className="p-0 border-none h-20 mt-auto">
          <MobileCourses role={role} teachCourses={teachCourses} />
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

            <Contacts contacts={contacts} />
          </div>

          <div className="flex-1 w-full">

            <Achievements achievements={achievements} />
          </div>


        </div>

        <Ratings rating={rating} hasReviews={hasReviews} amountOfReviews={amountOfReviews} />
        <Courses teachCourses={teachCourses} />

      </section>

      <div className="divider px-4" />

      <Reviews hasReviews={hasReviews} />

      <button className="btn btn-block mt-2 bg-neutral-900">review</button>

    </div>

  )



}