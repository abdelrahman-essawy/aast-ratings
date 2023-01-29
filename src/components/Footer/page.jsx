import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="mt-auto border-t border-gray-600 footer flex flex-col justify-center items-center gap-5 p-4 bg-base-300 text-base-content">
                <div>
                    <p>Made with ❤️ by <Link className='underline font-medium' href={'https://essawy.me'}>Abdelrahman Essawy</Link></p>
                </div>
            </footer>
        </>
    )
}
