import { AASTLogo } from '../../SVG/AASTLogo'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { Card } from '../Cards/CardTemplete'
import { CurrentStats } from '../Stats'

export const MobileHero = () => {
    return (
        <>
            <div className="hero-content text-center text-neutral-content flex flex-col justify-between items-center h-full">

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
                <Suspense fallback={<div>Loading...</div>}>
                    <CurrentStats />
                </Suspense>
            </div>
            {/* <div className='w-full m-auto p-4'>

                <Card />
            </div> */}
        </>


    )
}
