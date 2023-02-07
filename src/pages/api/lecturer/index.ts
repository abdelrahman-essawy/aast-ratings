import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const lecturersAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {

        case 'GET':

            try {
                // const { lecturerId } = req.query
                // const count = await prisma.review.aggregate({
                //     where: {
                //         lecturerId: {
                //             equals: lecturerId as string

                //         },
                //     },
                //     _avg: {
                //         rating: true
                //     },

                // })

                const lecturers = await prisma.lecturer.findMany({
                    orderBy: {
                        name: 'asc'

                    },
                    include: {
                        teachCourses: true,
                        workInColleges: true,
                        hasReviews: true

                    }

                })
                res.status(200).json(lecturers)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }

            break

        case 'POST':
            // Create a new lecturer
            try {
                const { name, collegeId } = req.query
                const lecturer = await prisma.lecturer.create({
                    data: {
                        id: `${name.toString().toLowerCase().replaceAll(' ', '-')}-${collegeId}-${Math.floor(Math.random() * 100)}` as string,
                        name: name as string,
                        workInColleges: {
                            connect: { id: collegeId as string }
                        }
                    }
                });


                res.json(lecturer)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }

            break


        case 'PUT':
            // Update a lecturer
            try {
                const { id, name, courseId } = req.query
                const updatedLecturer = await prisma.lecturer.update(
                    {
                        where: {
                            id: id as string
                        },
                        data: {
                            name: name as string,
                            // workInColleges: {
                            //     connect: { id: collegeId as string }
                            // },
                            teachCourses: {
                                connect: { id: courseId as string }
                            }
                        }
                    }
                )
                res.status(200).json(updatedLecturer)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }
            break


        case 'DELETE':
            try {
                const { id, root } = req.query
                if (root === "toor") {
                    await prisma.lecturer.deleteMany()
                    res.status(200).json({ message: 'All lecturers deleted' })
                    return
                }
                await prisma.lecturer.delete({ where: { id: id as string } })
                res.status(200).json({ message: 'Lecturer deleted' })

            }
            catch (error) {
                res.status(500).json({ message: error })
            }
            break
    }
}
export default lecturersAPI