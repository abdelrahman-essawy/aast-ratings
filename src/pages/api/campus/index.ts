import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const campusesApi = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {

        case 'GET':
            // Get all campuses
            try {
                const campuses = await prisma.campus.findMany({
                    include: {

                        hasColleges: {
                            select: { name: true }
                        },
                        hasReviews: {
                            select: { rating: true, campusesReviews: true, }
                        }
                    },
                    orderBy: {
                        name: 'asc'
                    }
                })
                res.status(200).json(campuses)
            }
            catch (error) {
                res.status(501).json({ message: error })
            }

            break

        case 'POST':

            // Create a new campus
            try {
                const defaultCampuses = [
                    { name: 'El Alamein' },
                    { name: 'Sharjah' },
                    { name: 'Aexandria' },
                    { name: 'Heliopolis' },
                    { name: 'Dokki' },
                    { name: 'Smart Village' },
                    { name: 'City of Port Fouad' },
                    { name: 'Aswan' },
                    { name: 'Latakia' },
                ]

                const { name, root } = req.query

                if (root === 'toor') {
                    const newCampuses = await prisma.campus.createMany({
                        data: defaultCampuses as any,
                        skipDuplicates: true
                    })
                    res.status(200).json(newCampuses)
                }



                const newCampus = await prisma.campus.create(
                    {
                        data: {
                            id: `${name.toString().toLowerCase().replace(' ', '-')}`,
                            name: name as string,
                        }
                    }

                )
                res.status(200).json(newCampus)
            }
            catch (error) {
                res.status(502).json({ message: error })
            }
            break

        case 'PUT':
            // Update a campus
            try {
                const { id, name } = req.query
                const updatedCampus = await prisma.campus.update(
                    {
                        where: { id: id as string },
                        data: {
                            name: name as string,
                        }
                    }

                )
                res.status(200).json(updatedCampus)
            }
            catch (error) {
                res.status(503).json({ message: error })
            }

            break
        case 'DELETE':
            try {
                const { id, root } = req.query;

                if (root === 'toor') {
                    await prisma.campus.deleteMany({
                        where: { id: { not: 'toor' } }
                    });
                    res.json({ message: 'All campuses deleted' });
                }

                await prisma.campus.delete({
                    where: { id: id as string },
                });
                res.status(200).json({ message: 'campus deleted' });
            } catch (error) {
                res.status(504).json({ message: error });
            }
            break;

        default:
            res.status(405).json({ message: 'Method not allowed' });

    }
}

export default campusesApi