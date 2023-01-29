import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const lecturersApi = async (req: NextApiRequest, res: NextApiResponse) => {
    const methods = ['GET', 'POST', 'PUT', 'DELETE']
    if (!methods.includes(req.method)) {
        res.setHeader('Allow', methods)
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    const { id, name, collegeId } = req.body

    switch (req.method) {

        // GET all lecturers
        case 'GET':
            try {
                const lecturers = await prisma.lecturer.findMany({
                    orderBy: {
                        rating: "desc"
                    },
                    include: {
                        teachCourses: {
                            select: {
                                name: true,
                            },
                        },
                        hasReview: {
                            select: {
                                rating: true,
                                comment: true,
                            }
                        },
                        _count: {
                            select: {
                                hasReview: true,

                            }
                        }
                    }

                })
                res.status(200).json(lecturers)
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
            break


        // add a new lecturer
        case 'POST':
            try {
                const lecturer = await prisma.lecturer.create({
                    data: {
                        name,
                        workInColleges: {
                            connect: {
                                id: collegeId
                            },
                        }
                    }
                })
                res.status(201).json(lecturer)
            }
            catch (error) {
                res.status(500).json({ error: error.message })
            }
            break

        // update a lecturer
        case 'PUT':

            try {
                const lecturer = await prisma.lecturer.update({
                    where: {
                        id
                    },
                    data: req.body,
                })
                res.status(200).json(lecturer)
            }
            catch (error) {
                res.status(500).json({ error: error.message })
            }
            break

        // delete a lecturer
        case 'DELETE':
            try {
                const lecturer = await prisma.lecturer.delete({
                    where: {
                        id
                    },
                })
                res.status(200).json(lecturer)
            }
            catch (error) {
                res.status(500).json({ error: error.message })
            }
            break

    }

}
export default lecturersApi