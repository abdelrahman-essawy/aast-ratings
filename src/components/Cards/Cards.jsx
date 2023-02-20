import React from 'react'
import { MobileSlider } from './MobileSlider'
import { DesktopSlider } from './DesktopSlider'

export const Cards = ({ lecturers, hero }) => {

    return (
        <div>

            <div className='hidden sm:block'>
                <DesktopSlider
                    hero={hero}
                    lecturers={lecturers}
                />
            </div>
            <div className='sm:hidden flex justify-center'>
                <MobileSlider
                    lecturers={lecturers}
                />
            </div>

        </div>




    )
}
