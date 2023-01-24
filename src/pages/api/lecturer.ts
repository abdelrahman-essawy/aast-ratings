import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      // Get all lecturers
      const lecturers = await prisma.lecturer.findMany()
      res.json(lecturers)
      break
    case 'POST':
      // Create a new lecturer
      const { name, rating } = req.body
      const newLecturer = await prisma.lecturer.create({
        data: {
          name,
          rating,
        },
      })
      res.json(newLecturer)
      break
    case 'PUT':
      // Update an existing lecturer
      const { id, name: updatedName, rating: updatedRating } = req.body
      const updatedLecturer = await prisma.lecturer.update({
        where: { id },
        data: {
          name: updatedName,
          rating: updatedRating,
        },
      })
      res.json(updatedLecturer)
      break
    case 'DELETE':
      // Delete a lecturer
      const { id: lecturerId } = req.body
      await prisma.lecturer.delete({
        where: { id: lecturerId },
      })
      res.json({ message: 'Lecturer deleted' })
      break
    default:
      res.status(405).json({ message: 'Method not allowed' })
  }

  await prisma.disconnect()
}
