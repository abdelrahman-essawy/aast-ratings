import Image from 'next/image'
import React from 'react'
import { Stats } from '../Stats'
import { DesktopHero } from './DesktopHero'
import { MobileHero } from './MobileHero'

export const Hero = () => {

    return (
        <div className="hero flex-1 relative overflow-hidden">
            <Image
                src="/aast-background.webp"
                alt="hero"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                fill
            />
            <div className="hero-overlay bg-opacity-80 z-10"></div>

            <div className="hero-content text-center text-neutral-content flex gap-8 md:gap-6 flex-col justify-between items-center h-full pb-8 z-20">
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
