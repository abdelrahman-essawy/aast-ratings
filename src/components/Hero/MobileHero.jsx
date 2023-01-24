import { AASTLogo } from '@/SVG/AASTLogo'
import React from 'react'
import { Card } from '../Cards/CardTemplete'
import { CurrentStats } from './CurrentStats'

export const MobileHero = () => {
    return (
        <>
            <div className="hero-content text-center text-neutral-content flex flex-col justify-between items-center h-full">

                <div className="max-w-md">
                    <div className='hidden sm:block'>
                        <AASTLogo width='300' height='300' />
                    </div>
                    <div className='block sm:hidden'>
                        <AASTLogo width='200' height='200' />
                    </div>
                    <div>
                        <h1 className="mb-5 text-3xl font-bold text-gray-200 ">Rate Your Lecturer</h1>
                        <p className="mb-5">Rate your lectures, improve your education. Join now!</p>
                        <label className="btn btn-primary" htmlFor="my-modal-6">Get Started</label>
                    </div>
                </div>
                <CurrentStats />
            </div>
            {/* <div className='w-full m-auto p-4'>

                <Card />
            </div> */}
        </>


    )
}