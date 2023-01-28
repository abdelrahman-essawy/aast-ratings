import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const lecturerAPI = async (req: NextApiRequest, res: NextApiResponse) => {

  switch (req.method) {

    case 'GET':
      // Get all lecturers
      try {
        const lecturers = await prisma.lecturer.findMany({
          include: {
            courses: true,
            reviews: true
          }
        })
        res.json(lecturers)
      }
      catch (error) {
        res.status(500).json({ message: error })
      }
      break


    case 'POST':
      // Create a new lecturer
      try {
        const { name, courses, campusId, collegeId } = req.body
        const newLecturer = await prisma.lecturer.create(
          {
            data: {
              name,
              campusId: campusId,
              collegeId: collegeId,
              courses: {
                connect: courses
              },
            },
            include: {
              campus: true,
              college: true,
              courses: true,
            }
          }
        )
        res.json(newLecturer)
      }
      catch (error) {
        res.status(500).json({ message: error })
      }
      break

    case 'DELETE':
      try {
        const { root } = req.body
        if (root === 'toor') {
          await prisma.lecturer.deleteMany()
          res.json({ message: 'All lecturers deleted' })
        }
        res.json({ message: 'WRONG' })
      } catch (error) {
        console.log(error)
      }
      break

    case 'PUT':
      try {
        const { id, name, rating, courses, reviews, collegeName, campusName } = req.body
        const updatedLecturer = await prisma.lecturer.update({
          where: { id },
          data: {
            name,
            rating,
            courses: {
              connect: courses
            },
            college: {
              connect: collegeName
            },
            campus: {
              connect: campusName
            },
            reviews: {
              connect: reviews
            },
          },
          include: {
            courses: true,
            reviews: true,
          }

        })
        res.status(200).json(updatedLecturer)

      } catch (error) {
        res.status(500).json({ message: error })
      }
      break
      await prisma.$disconnect()

  }
}
export default lecturerAPI