"use client"
import React from 'react'
import DataSection from '../../components/DataSection'
import CollegesSideBar from '../../components/SideBar/Colleges'
import SideBars from '../../components/SideBar/SideBars'
import SkeletonMenu from '../../components/SideBar/SkeletonMenu'



const page = () => {
    const { Campuses, Colleges } = SideBars()

    return (

        <div className='flex'>

            <div className='w-56'>
                {Campuses()}
            </div>

            <div className="w-96">
                {Colleges()}
            </div>

            <div className="flex-1 bg-base-300">
                <DataSection />
            </div>
        </div>

    )
}
export default page