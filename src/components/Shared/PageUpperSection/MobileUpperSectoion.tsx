import React, { memo } from 'react'
import { Colleges } from '../../Course/Colleges'
import { Lecturers } from '../../Course/Lecturers'
import { Contacts } from '../../Lecturer/Contacts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { MobileCourses } from '../Mobile/MobileCourses'
import { MobileRatings } from '../Mobile/Ratings'

const MobileUpperSectoion = memo((
    {
        contacts,
        achievements,
        rating,
        amountOfReviews,
        teachCourses,
        role,
        taughtByLecturers,
        availableInColleges
    }: any
) => {
    console.log(amountOfReviews)
    return (
        <Tabs defaultValue="Ratings" className="block md:hidden">

            {contacts &&
                <TabsContent value="Contacts" className="p-0 border-none h-20 mt-auto">
                    <Contacts contacts={contacts} />
                </TabsContent>}

            {taughtByLecturers &&
                <TabsContent value="Lecturers" className="p-0 border-none h-20 mt-auto">
                    <Lecturers taughtByLecturers={taughtByLecturers} />
                </TabsContent>}

            {availableInColleges &&
                <TabsContent value="Colleges" className="p-0 border-none h-20 mt-auto">
                    <Colleges availableInColleges={availableInColleges} />
                </TabsContent>}

            <TabsContent value="Ratings" className="p-0 border-none h-20 mt-auto">
                <MobileRatings rating={rating} achievements={achievements} amountOfReviews={amountOfReviews} />
            </TabsContent>

            <TabsContent value="Courses" className="p-0 border-none h-20 mt-auto">
                <MobileCourses role={role} teachCourses={teachCourses} />
            </TabsContent>

            <div className="flex justify-center items-center">
                <TabsList className="mt-4">
                    {availableInColleges && <TabsTrigger value="Colleges">Colleges</TabsTrigger>}
                    {contacts && <TabsTrigger value="Contacts">Contacts</TabsTrigger>}
                    <TabsTrigger value="Ratings">Ratings</TabsTrigger>
                    {teachCourses && <TabsTrigger value="Courses">Courses</TabsTrigger>}
                    {taughtByLecturers && <TabsTrigger value="Lecturers">Lecturers</TabsTrigger>}
                </TabsList>
            </div>

        </Tabs>
    )
})
MobileUpperSectoion.displayName = 'MobileUpperSectoion'
export default MobileUpperSectoion