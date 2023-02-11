import React, { use } from 'react'
import { Cards } from '../../components/Cards/Cards';
// import Search from '../../components/Search/page';
import Section from '../../utilities/StyledComponents/Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { MobileSlider } from '../../components/Cards/MobileSlider';

const fetcher = () => fetch(`https://aast-ratings.vercel.app/api/lecturer`).then((res) => res.json())

const Page = () => {

    const lecturers = use(fetcher())


    return (
        <div className='flex flex-col items-center justify-center gap-8 pt-8 max-w-screen-lg m-auto  bg-base-200'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-gray-200'>Computer Science</h1>
                <p className='text-gray-200 p-4'>Rate your lectures, improve your education.</p>
            </div>
            <div className='w-full px-4 sm:px-0'>
                {/* {Search.render()} */}
            </div>

            <Tabs defaultValue="lecturers" className="w-full m-auto">
                <div className='w-full flex justify-center items-center'>
                    <TabsList>
                        <TabsTrigger value="campuses">Campuses</TabsTrigger>
                        <TabsTrigger value="lecturers">Lecturers</TabsTrigger>
                        <TabsTrigger value="colleges">Colleges</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="lecturers" className='border-none p-0 w-full'>

                    <Section className='w-full'>
                        <MobileSlider
                            autoplay={false}
                            initialSlide={[...lecturers].length / 2}
                            lecturers={lecturers}
                        />
                    </Section>

                </TabsContent>
                <TabsContent value="password">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Change your password here. After saving, you&apos;ll be logged out.
                    </p>
                </TabsContent>
            </Tabs>

        </div>
    )
}
export default Page