import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const cleanUpDB = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {
        case 'DELETE':
            try {
                const { root } = req.query;

                if (root === 'toor') {
                    await prisma.campus.deleteMany({});
                    await prisma.college.deleteMany({});
                    await prisma.lecturer.deleteMany({});
                    await prisma.course.deleteMany({});
                    await prisma.review.deleteMany({});
                    res.status(200).json({ message: 'Clean DB for you' });
                } else {
                    res.status(401).json({ message: 'Not authorized' });
                }

            } catch (error) {
                res.status(504).json({ message: error });
                console.log(error);
            }
            break;
    }
}

export default cleanUpDB