import Link from 'next/link'
import React from 'react'
import MobileNavigation from './MobileNavigation'

export const Footer = () => {
    return (
        <>
            <div className="w-full h-28 sm:h-fit m-auto border-t border-gray-600 footer flex flex-col justify-start items-center gap-5 p-4 bg-base-300 text-base-content">
                <div>
                    <p>Made with &#10084; by <Link className='underline font-medium' href={'https://essawy.me'}>Abdelrahman Essawy</Link></p>
                </div>
            </div>
            <div className='md:hidden block'>
                <MobileNavigation />
            </div>

        </>
    )
}
