import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            // Get all courses
            const courses = await prisma.course.findMany()
            res.json(courses)
            break
        case 'POST':
            // Create a new course
            const { name, courseCode, ownerId } = req.body
            const newCourse = await prisma.course.create({
                data: {
                    name,
                    courseCode,
                    owner: {
                        connect: { id: ownerId }
                    }
                },
            })
            res.json(newCourse)
            break
        case 'PUT':
            // Update an existing course
            const { id, name: updatedName, courseCode: updatedCourseCode, ownerId: updatedOwnerId } = req.body
            const updatedCourse = await prisma.course.update({
                where: { id },
                data: {
                    name: updatedName,
                    courseCode: updatedCourseCode,
                    owner: {
                        connect: { id: updatedOwnerId }
                    }
                },
            })
            res.json(updatedCourse)
            break
        case 'DELETE':
            // Delete a course
            const { id: courseId } = req.body
            await prisma.course.delete({
                where: { id: courseId },
            })
            res.json({ message: 'Course deleted' })
            break
        default:
            res.status(405).json({ message: 'Method not allowed' })
    }

    await prisma.$disconnect()
}
