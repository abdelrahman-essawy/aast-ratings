import Link from 'next/link'
import React from 'react'

const MobileNavigation = ({ }) => {

    const navigation = [
        {
            name: 'Review',
            href: '/start',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <g id="shape" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="heart" fill="currentColor">
                            <path d="M12,20 C9.79485241,19.5208288 3,15.7600002 3,9 C3,6.23857625 5.23857625,4 8,4 C9.63559896,4 11.0877712,4.7853431 12,5.99951255 C12.9122288,4.7853431 14.364401,4 16,4 C18.7614237,4 21,6.23857625 21,9 C21,15.7600002 14.2051476,19.5208288 12,20 Z" id="Shape"></path>
                        </g>
                    </g>
                </svg>),
            current: false,
        },
        {
            name: 'Home',
            href: '/',
            icon: (props) => (

                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            current: true,
        },
        {
            name: 'About',
            href: '/',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            current: false,
        },
    ]

    return (
        <footer className="btm-nav border-t border-t-gray-600 sm:hidden w-screen">
            {navigation.map(({ name, href, icon }, index) => <Link key={index} href={href} className='active:bg-gray-600 transition ease-in-out'>
                {icon()}
                <span className="btm-nav-label text-sm">{name}</span>
            </Link>)
            }
        </footer>
    )
}

export default MobileNavigation