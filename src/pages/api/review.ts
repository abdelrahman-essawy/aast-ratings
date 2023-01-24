import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            // Get all reviews
            const reviews = await prisma.review.findMany()
            res.json(reviews)
            break
        case 'POST':
            // Create a new review
            const { rating, comment, ownerId } = req.body
            const newReview = await prisma.review.create({
                data: {
                    rating,
                    comment,
                    owner: {
                        connect: { id: ownerId }
                    }
                },
            })
            res.json(newReview)
            break
        case 'PUT':
            // Update an existing review
            const { id, rating: updatedRating, comment: updatedComment, ownerId: updatedOwnerId } = req.body
            const updatedReview = await prisma.review.update({
                where: { id },
                data: {
                    rating: updatedRating,
                    comment: updatedComment,
                    owner: {
                        connect: { id: updatedOwnerId }
                    }
                },
            })
            res.json(updatedReview)
            break
        case 'DELETE':
            // Delete a review
            const { id: reviewId } = req.body
            await prisma.review.delete({
                where: { id: reviewId },
            })
            res.json({ message: 'Review deleted' })
            break
        default:
            res.status(405).json({ message: 'Method not allowed' })
    }

    await prisma.$disconnect()
}
