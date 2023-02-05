"use client"
import React from 'react'
import DataSection from '../../components/DataSection'
import SideBar from '../../components/SideBar'
import SkeletonMenu from '../../components/SideBar/SkeletonMenu'



const page = () => {

    return (

        <div className='flex'>

            <div className='w-56'>
            <SideBar forEndpoint='campuses'/>
            </div>

            <div className='w-96'>
            <SideBar forEndpoint='colleges' />
            </div>



            <div className="flex-1 bg-base-300">
                <DataSection />
            </div>
        </div>

    )
}
export default page