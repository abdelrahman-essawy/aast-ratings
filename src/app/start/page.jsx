import React from 'react'
import { Cards } from '../../components/Cards/Cards';
import Search from '../../components/Search/page';
import Section from '../../utilities/StyledComponents/Section';

const page = () => {

    setTimeout(() => {

    }, 60000);
    return (
        <Section className={'pb-0'}>
            <div className='container'>
                <div className='flex flex-col items-center justify-center gap-8 pt-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold text-gray-200'>Computer Science</h1>
                        <p className='text-gray-200 p-4'>Rate your lectures, improve your education.</p>
                    </div>
                    <div className='w-full'>
                        <Search />
                    </div>
                    <section className='w-full'>
                        <Cards />
                    </section>
                </div>
            </div>
        </Section>
    )
}
export default page