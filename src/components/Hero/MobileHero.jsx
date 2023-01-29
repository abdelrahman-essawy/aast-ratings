import { AASTLogo } from '../../SVG/AASTLogo'
import Link from 'next/link'
import React from 'react'

export const MobileHero = () => {
    return (
        <>
                <div className="max-w-md ">
                    <div className='hidden sm:block'>
                        <AASTLogo width='300' height='300' />
                    </div>
                    <div className='block sm:hidden'>
                        <AASTLogo width='200' height='200' />
                    </div>
                    <div>
                        <h1 className="mb-5 text-3xl font-bold text-gray-200 ">Rate Your Lecturer</h1>
                        <p className="mb-5">Anonymously rate your campus, college, course or lecturer. Join now!</p>
                    </div>
                </div>
                <Link href={'/start'} className="btn btn-primary" htmlFor="my-modal-6">Get Started</Link>

        </>


    )
}
