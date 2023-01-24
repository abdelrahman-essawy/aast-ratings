import React from 'react'
import DesktopNavbar from './DesktopNavbar' /*webpackChunkName: "DesktopNavbar"*/
import MobileNavbar from './MobileNavbar' /*webpackChunkName: "MobileNavbar"*/
// eslint-disable-next-line react/display-name
const Navbar = () => {
    return (
        <div className="bg-base-200 w-full h-16 shadow-2xl z-10">
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