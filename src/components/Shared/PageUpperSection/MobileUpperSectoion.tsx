import React from 'react'
import { Contacts } from '../../Lecturer/Contacts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { MobileCourses } from '../Mobile/MobileCourses'
import { MobileRatings } from '../Mobile/Ratings'

const MobileUpperSectoion = (
    {
        contacts,
        achievements,
        rating,
        amountOfReviews,
        teachCourses,
        role
    }
) => {
    return (
        <Tabs defaultValue="Ratings" className="block md:hidden">

            <TabsContent value="Contacts" className="p-0 border-none h-20 mt-auto">
                <Contacts contacts={contacts} />
            </TabsContent>

            <TabsContent value="Ratings" className="p-0 border-none h-20 mt-auto">
                <MobileRatings rating={rating} achievements={achievements} amountOfReviews={amountOfReviews} />
            </TabsContent>

            <TabsContent value="Courses" className="p-0 border-none h-20 mt-auto">
                <MobileCourses role={role} teachCourses={teachCourses} />
            </TabsContent>

            <div className="flex justify-center items-center">
                <TabsList className="mt-4">
                    <TabsTrigger value="Contacts">Contacts</TabsTrigger>
                    <TabsTrigger value="Ratings">Ratings</TabsTrigger>
                    <TabsTrigger value="Courses">Courses</TabsTrigger>
                </TabsList>
            </div>

        </Tabs>
    )
}

export default MobileUpperSectoion