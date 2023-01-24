import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
// eslint-disable-next-line react/display-name
const Navbar = () => {
    return (
        <div className="bg-base-200 w-full h-16">
            <div className='hidden sm:block'>
                <DesktopNavbar />
            </div>
            <div className='block sm:hidden'>
                <MobileNavbar />
            </div>
        </div>
    )
}
export default Navbar