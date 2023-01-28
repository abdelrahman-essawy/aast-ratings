import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const collegesAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {

        case 'GET':
            // Get all colleges
            try {
                const campuses = await prisma.campus.findMany({

                })
                res.status(200).json(campuses)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }
            break

    }
}
export default collegesAPI