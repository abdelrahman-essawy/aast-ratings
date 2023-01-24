"use client"
import { AASTLogo } from '@/SVG/AASTLogo'
import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { CurrentStats } from './CurrentStats'
import { DesktopHero } from './DesktopHero'
import { MobileHero } from './MobileHero'

export const Hero = () => {
    const [width, setWidth] = useState(-10);

    const setWidthBeforeRender = () => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    }


    useEffect(() => {
        setWidthBeforeRender();
    }, [])

    const selectHero = (thisWidth) => {
        if (thisWidth === -10) {
            return ''
        }
        if (thisWidth > 768) {
            return <DesktopHero />
        } else {
            return <MobileHero />
        }
    }
    return (
        <div className='flex flex-col h-[calc(100vh-117px)]'>
            <div className="hero h-full flex-1" style={{ backgroundImage: `url("https://studentportal.aast.edu/assets/img/login-bg/10.webp")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                {
                    selectHero(width)

                }
            </div>
        </div>


    )
}
