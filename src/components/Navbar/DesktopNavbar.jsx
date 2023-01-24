import Link from 'next/link'
import React, { memo } from 'react'
import Search from '../Search/page'

// eslint-disable-next-line react/display-name
const DesktopNavbar = memo(() => {
    return (
        <>
            <div className='navbar max-w-screen-xl m-auto flex justify-between items-center'>
                <Link href={'/'} className="btn btn-ghost normal-case text-xl">AAST - Ratings</Link>
                <Search />
            </div>
            <button className="btn btn-ghost btn-circle hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>

        </>
    )
})

export default DesktopNavbar