import React, { use } from 'react'
import DataSection from '../../components/DataSection'
import CampusesSideBar from '../../components/SideBar/Campuses'
// import CollegesSideBar from '../../components/SideBar/Colleges'
import SkeletonMenu from '../../components/SideBar/SkeletonMenu'


const fetcher = async (endPoint = 'http://localhost:3000/api/getAll') => await fetch(endPoint, {
    next: {
        revalidate: 1
    }
}).then(res => res.json())
const create = async (newCampusName, endPoint = 'http://localhost:3000/api/campus?name=') =>
    await fetch(endPoint + newCampusName, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
const page = () => {

    const data = use(fetcher())
    console.log('revalidate')
    // const campusesData = [...data].forEach(campus => campus.id)

    // const campusesData = data.map(campus => campus)
    return (

        <div className='flex'>

            <div className='w-56'>
                <CampusesSideBar data={data} />
            </div>

            <div className="w-96">
                {/* {Colleges()} */}
            </div>

            <div className="flex-1 bg-base-300">
                <DataSection />
            </div>
        </div>

    )
}
export default page