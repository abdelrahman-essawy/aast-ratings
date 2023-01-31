import React, { use } from 'react'
import { Sidebar } from '../../components/Admin'
import DataSection from '../../components/Admin/DataSection'
import Section from '../../utilities/StyledComponents/Section'



const page = () => {

    return (

        <div className='flex'>
            <Sidebar />
            <div className="flex-1 bg-base-300">
                <DataSection />
            </div>
        </div>

    )
}
export default page