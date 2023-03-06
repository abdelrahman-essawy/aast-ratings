import Image from 'next/image'
import React, { memo } from 'react'

const TopBanner = memo(({
    paramsId,
    workInColleges,
    workInCampus

}: any) => {
    return (
        <div className="relative sm:h-16 h-12 overflow-y-hidden flex justify-center items-center bg-base-300 overflow-hidden w-full">
            <div className="flex justify-between inset-y-1/2 -translate-y-1/2 h-fit absolute z-10 w-full items-center text-center max-w-screen-lg px-4">
                {
                    workInColleges &&
                        workInColleges[0]?.name ?
                        <p className="z-10 bg-clip-text font-medium m-auto sm:m-0 text-lg sm:text-xl">{workInColleges[0]?.name ?? 'College'}</p>
                        :
                        <p className="z-10 bg-clip-text font-medium m-auto sm:m-0 text-lg sm:text-xl">College</p>
                }
                {
                    workInCampus?.name ?
                        <p className="z-10 bg-clip-text font-medium m-auto sm:m-0 text-lg sm:text-xl hidden sm:block">{workInCampus?.name ?? 'Campus'} </p>
                        :
                        <p className="z-10 bg-clip-text font-medium m-auto sm:m-0 text-lg sm:text-xl hidden sm:block">Campus</p>

                }
            </div>

            {UpperImagePicker(paramsId)}

        </div>
    )
})
TopBanner.displayName = 'TopBanner'

export default TopBanner


const UpperImagePicker = (paramsId) => {
    switch (paramsId) {
        case (paramsId).toString().includes('computer-science'):
            return <Image
                priority
                quality={10}
                className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur-xl brightness-75"
                src={`/computer-science.webp`} alt='' fill />

        case (paramsId).toString().includes('engineering'):
            return <Image
                priority
                quality={10}
                className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur-xl brightness-75"
                src={`/computer-science.webp`} alt='' fill />

        default:
            return <Image
                priority
                quality={10}
                className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur-xl brightness-75"
                src={`/computer-science.webp`} alt='' fill />

    }
}