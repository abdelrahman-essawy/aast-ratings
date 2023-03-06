import React, { memo } from 'react'
import DesktopUpperSection from './DesktopUpperSection'
import MobileUpperSectoion from './MobileUpperSectoion'

const UpperSection = memo((
    {
        name,
        img,
        contacts,
        achievements,
        rating,
        hasReviews,
        amountOfReviews,
        teachCourses,
        role
    }: any

) => {
    return <>
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

        </section>

        <DesktopUpperSection
            teachCourses={teachCourses ?? []}
            contacts={contacts ?? []}
            hasReviews={hasReviews ?? []}
            achievements={achievements ?? []}
            amountOfReviews={amountOfReviews ?? 0}
            rating={rating ?? 0} />

        <MobileUpperSectoion
            contacts={contacts ?? []}
            achievements={achievements ?? []}
            rating={rating ?? 0}
            amountOfReviews={amountOfReviews ?? 0}
            teachCourses={teachCourses ?? []}
            role={role ?? ''}
        />
    </>
})
UpperSection.displayName = 'UpperSection'

export default UpperSection