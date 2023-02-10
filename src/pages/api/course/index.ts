import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const coursesAPI = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            try {
                const courses = await prisma.course.findMany({
                    // orderBy: {
                    //     name: 'asc'
                    // },
                    include: {
                        taughtByLecturers: true,
                        availableInColleges: true,
                        hasReviews: true,
                    }
                })
                res.status(200).json(courses)
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break
        case 'POST':
            try {
                const { name, courseCode, collegeId } = req.query
                const newCourse = await prisma.course.create({

                    data: {
                        id: `${name.toString().toLowerCase().replaceAll(' ', '-')}-${collegeId}` as string,
                        name: name as string,
                        courseCode: courseCode as string,
                        availableInColleges: {
                            connect: {
                                id: collegeId as string
                            }
                        }
                    }

                })
                res.json(newCourse)
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break

        case 'PUT':
            try {
                const { id, name, courseCode } = req.query
                const updatedCourse = await prisma.course.update({
                    where: {
                        id: id as string
                    },
                    data: {
                        name: name as string,
                        courseCode: courseCode as string
                    }
                })
                res.status(200).json(updatedCourse)
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break

        case 'DELETE':
            try {
                const { id, root } = req.query
                if (root === "toor") {
                    await prisma.course.deleteMany()
                    res.status(200).json({ message: 'All courses deleted' })
                    return
                }
                await prisma.course.delete({ where: { id: id as string } })
                res.status(200).json({ message: 'Course deleted' })
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break
    }
}
export default coursesAPI