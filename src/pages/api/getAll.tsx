import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const getAllAPI = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed' })
    }
    const allCampuses = await prisma.campus.findMany({
        include: {
            hasColleges: {
                select: {
                    id: true,
                    name: true,
                    hasLecturers: {
                        select: {
                            id: true,
                            name: true,
                            hasReviews: {
                                select: {
                                    id: true,
                                    rating: true,
                                    comment: true,
                                }
                            }
                        }
                    },
                    hasCourses: {
                        select: {
                            id: true,
                            name: true,
                            taughtByLecturers: {
                                select: {
                                    id: true,
                                    name: true,
                                }
                            },
                            hasReviews: {
                                select: {
                                    id: true,
                                    rating: true,
                                    comment: true,
                                }
                            }
                        }
                    },
                    hasReviews: {
                        select: {
                            id: true,
                            rating: true,
                            comment: true,
                        }
                    }
                }
            },
            hasReviews: {
                select: {
                    id: true,
                    rating: true,
                    comment: true,
                }
            }
        },
    })
    res.status(200).json(allCampuses)
}
export default getAllAPI