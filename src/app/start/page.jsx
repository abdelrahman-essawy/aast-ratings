import { Cards } from '@/components/Cards/Cards'
import Search from '@/components/Search/page'
import Section from '@/utilities/StyledComponents/Section'
import React from 'react'

const page = () => {
    return (
        <Section>
            <div className='container py-8'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold text-gray-200'>Computer Science</h1>
                        <p className='text-gray-200'>Rate your lectures, improve your education. Join now!</p>
                    </div>
                    <div className='w-full'>
                        <Search />
                    </div>
                    <div className='w-full'>
                        <Cards />
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default page