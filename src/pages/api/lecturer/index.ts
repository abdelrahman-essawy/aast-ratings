// import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const lecturersAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {


        case 'GET':

            const { id } = req.query

            if (!id) {
                try {
                    const lecturers = await prisma.lecturer.findMany({
                        include: {
                            workInCampus: {
                                select: {
                                    id: true,
                                    name: true,
                                }
                            },
                            workInColleges: {
                                select: {
                                    id: true,
                                    name: true,
                                }
                            },
                            teachCourses: {
                                select: {
                                    id: true,
                                    name: true,
                                    rating: true,
                                },
                            }
                        }
                    })
                    res.status(200).json(lecturers)
                }
                catch (error) {
                    res.status(500).json({ message: error })
                }
                return
            }
            try {
                const lecturer = await prisma.lecturer.findUnique({
                    where: {
                        id: id as string
                    },

                    include: {
                        teachCourses: {
                            select: {
                                id: true,
                                name: true,
                                rating: true,
                            },
                        },
                        workInColleges: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        workInCampus: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        hasReviews: {

                            orderBy: {
                                createdAt: 'desc'
                            },
                        },
                        achievements: {
                            orderBy: {
                                gotAt: 'desc'
                            }

                        },
                        contacts: {
                            orderBy: {
                                createdAt: 'desc'
                            }
                        },

                    }
                })
                res.status(200).json(lecturer)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }

            break

        case 'POST':
            // Create a new lecturer
            try {
                const { name, role, collegeId, campusId } = req.query
                const lecturer = await prisma.lecturer.create({
                    data: {
                        id: `${name.toString().toLowerCase().replaceAll(' ', '-')}-${collegeId}-${Math.floor(Math.random() * 100)}` as string,
                        name: name as string,
                        role: role as string
                        ,
                        workInColleges: {
                            connect: { id: collegeId as string }
                        },
                        workInCampus: {
                            connect: { id: campusId as string }
                        },

                    }
                });


                res.json(lecturer)
            }
            catch (error) {
                res.status(500)
                console.log(error)
            }

            break


        case 'PUT':
            // Update a lecturer
            try {
                const { id, name, courseId, rating, campusId, collegeId } = req.query
                const updatedLecturer = await prisma.lecturer.update({
                    where: { id: id as string },
                    data: {
                        name: name as string || undefined,
                        // workInColleges: {
                        //     connect: { id: collegeId as string }
                        // },
                        workInCampus: {
                            connect: { id: campusId as string || undefined }
                        },
                        teachCourses: {
                            connect: { id: courseId as string || undefined }
                        },
                        workInColleges: {
                            connect: { id: collegeId as string || undefined }
                        },

                        rating: rating as undefined as number || undefined
                    }
                })
                res.status(200).json(updatedLecturer)
            }
            catch (error) {
                res.status(500).json('error, check console log')
                console.log(error)
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
