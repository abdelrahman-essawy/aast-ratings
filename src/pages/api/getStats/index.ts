// import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const getStatusAPI = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {

                const amountOfCampuses = await prisma.campus.count()
                const amountOfColleges = await prisma.college.count()
                const amountOfLecturers = await prisma.lecturer.count()
                const amountOfReviews = await prisma.review.count()
                res.status(200).json(
                    {
                        Campuses: amountOfCampuses,
                        Colleges: amountOfColleges,
                        Lecturers: amountOfLecturers,
                        Reviews: amountOfReviews
                    }
                )



            } catch (error) {
                res.status(500).json({ message: error })
            }
            break
        default:
            res.status(500).end(`Method ${method} Not Allowed`)
    }
    await prisma.$disconnect()

}
export default getStatusAPI


// Legacy Code:
                    // let amountOfCampuses = 0
                    // let amountOfColleges = 0
                    // let amountOfLecturers = 0
                    // let amountOfCourses = 0
                    // let amountOfReviews = 0

                // await prisma.campus.findMany({ include: { _count: {} } })
                //     .then((campuses) => {
                //         campuses.forEach((campus) => {
                //             amountOfCampuses += 1
                //             amountOfColleges += campus._count.hasColleges
                //             amountOfReviews += campus._count.hasReviews
                //         })
                //     })

                // await prisma.college.findMany({ include: { _count: {}, } })
                //     .then((colleges) => {
                //         colleges.forEach((college) => {
                //             amountOfLecturers += college._count.hasLecturers
                //             // amountOfCourses += college._count.hasCourses
                //             amountOfReviews += college._count.hasReviews
                //         })
                //     })

                // await prisma.lecturer.findMany({ include: { _count: {} } })
                //     .then((lecturers) => {
                //         lecturers.forEach((lecturer) => { amountOfReviews += lecturer._count.hasReviews })
                //     })

                // await prisma.course.findMany({ include: { _count: {} } })
                //     .then((courses) => {
                //         courses.forEach((course) => {
                //             amountOfReviews += course._count.hasReviews
                //         })
                //     })