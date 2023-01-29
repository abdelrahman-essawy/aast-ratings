import React from 'react'
import { Stats } from '../Stats'
import { DesktopHero } from './DesktopHero'
import { MobileHero } from './MobileHero'

export const Hero = () => {

    return (
        <div className="hero h-full flex-1" style={{ backgroundImage: `url("https://studentportal.aast.edu/assets/img/login-bg/10.webp")` }}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className="hero-content text-center text-neutral-content flex flex-col justify-between items-center h-full">
                <div className='hidden sm:block'>
                    <DesktopHero />
                </div>
                <div className='block sm:hidden'>
                    <MobileHero />
                </div>
                <Stats />
            </div>

        </div>


    )
}
