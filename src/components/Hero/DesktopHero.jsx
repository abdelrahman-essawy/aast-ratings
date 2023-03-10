import Link from 'next/link'
import React, { Suspense } from 'react'
import { Button } from '../../utilities/StyledComponents/Button'
import { AASTLogo } from '../../SVG/AASTLogo'

export const DesktopHero = () => {
    return (
        <>
            <div className="hero-content text-center text-neutral-content flex flex-col justify-between items-center h-full">
                <div className="max-w-md">
                    <div className='hidden sm:block'>
                        <AASTLogo width='200' height='200' />
                    </div>
                    <div>
                        <h1 className="mb-5 text-3xl font-bold text-gray-200 ">Rate Your Lecturer</h1>
                        <p className="mb-5">Rate your lectures, improve your education. Join now!</p>
                        <Button />
                    </div>
                </div>
            </div>
        </>


    )
}
