import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const campusesApi = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {

        case 'GET':
            // Get all campuses
            try {
                const campuses = await prisma.campus.findMany({

                })
                res.status(200).json(campuses)
            }
            catch (error) {
                res.status(501).json({ message: error })
            }


        default:
            res.status(405).json({ message: 'Method not allowed' })
    }
}

export default campusesApi