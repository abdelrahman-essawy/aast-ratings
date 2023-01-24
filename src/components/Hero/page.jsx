import { AASTLogo } from '@/SVG/AASTLogo'
import React from 'react'
import { Card } from '../Cards/CardTemplete'
import { CurrentStats } from './CurrentStats'
import { DesktopHero } from './DesktopHero'
import { MobileHero } from './MobileHero'

export const Hero = () => {

    return (
            <div className="hero h-full flex-1" style={{ backgroundImage: `url("https://studentportal.aast.edu/assets/img/login-bg/10.webp")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className='hidden sm:block'>
                    <DesktopHero />
                </div>
                <div className='block sm:hidden'>
                    <MobileHero />
                </div>
            </div>


    )
}
