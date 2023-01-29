import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const getStatusAPI = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {

                let amountOfCampuses = 0
                let amountOfColleges = 0
                let amountOfLecturers = 0
                let amountOfCourses = 0
                let amountOfReviews = 0

                await prisma.campus.findMany({
                    include: {
                        _count: {

                        }
                    }

                })
                    .then((campuses) => {
                        campuses.forEach((campus) => {
                            amountOfCampuses += 1
                            amountOfColleges += campus._count.hasColleges
                            amountOfReviews += campus._count.hasReviews
                        })
                    })

                const asd = await prisma.college.findMany(
                    {
                        include: {
                            _count: {
                                select: { hasCourses: true, hasLecturers: true, hasReviews: true }
                            },

                        }
                    }
                )
                    .then((colleges) => {
                        colleges.forEach((college) => {
                            amountOfLecturers += college._count.hasLecturers
                            amountOfCourses += college._count.hasCourses
                            amountOfReviews += college._count.hasReviews
                        })
                    })


                res.status(200).json(
                    {
                        Campuses: amountOfCampuses,
                        Colleges: amountOfColleges,
                        Lecturers: amountOfLecturers,
                        //  Courses: amountOfCourses ,
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