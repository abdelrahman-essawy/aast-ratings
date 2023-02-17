// import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const lecturersAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'GET') res.status(405).json({ message: 'Method not allowed' })

    switch (req.method) {


        case 'GET':
            try {
                const lecturers = await prisma.lecturer.findMany({
                    orderBy: {
                        rating: 'desc'
                    },
                    select: {
                        id: true,
                        name: true,
                        role: true,
                        rating: true,
                        amountOfReviews: true,
                        teachCourses: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        workInColleges: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    }, take: 3
                })
                res.status(200).json(lecturers)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }

            break

    }
}
export default lecturersAPI
