import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const campusesApi = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {

        case 'GET':
            // Get all campuses
            try {
                const campuses = await prisma.campus.findMany({
                    where: {
                        id: "cldf8d35q002yeq48z8cwvueo"
                    },

                })
                res.status(200).json(campuses)
            }
            catch (error) {
                res.status(501).json({ message: error })
            }

        // case 'POST':



        //     // Create a new campus
        //     try {
        //         const defaultCampuses = [
        //             { name: 'El Alamein' },
        //             { name: 'Sharjah' },
        //             { name: 'Abu Qir' },
        //             { name: 'Miami' },
        //             { name: 'Heliopolis' },
        //             { name: 'Dokki' },
        //             { name: 'Smart Village' },
        //             { name: 'City of Port Fouad' },
        //             { name: 'Aswan' },
        //             { name: 'Latakia' },
        //         ]

        //         const { name, root, campuses } = req.body

        //         if (root === 'toor') {
        //             const newCampuses = await prisma.campus.createMany({
        //                 data: [

        //                     ...campuses

        //                 ]
        //             })
        //             res.status(200).json(newCampuses)
        //         }


        //         const newCampus = await prisma.campus.create(
        //             {
        //                 data: {
        //                     name
        //                 }
        //             }

        //         )
        //         res.status(200).json(newCampus)
        //     }
        //     catch (error) {
        //         res.status(502).json({ message: error })
        //     }
        //     break

        // case 'PUT':
        //     // Update a campus
        //     try {
        //         const { id, name, collegeId } = req.body
        //         const updatedCampus = await prisma.campus.update(
        //             {
        //                 where: { id },
        //                 data: {
        //                     name: name,
        //                 }
        //             }

        //         )
        //         res.status(200).json(updatedCampus)
        //     }
        //     catch (error) {
        //         res.status(503).json({ message: error })
        //     }


        // case 'DELETE':
        //     try {
        //         const { root, id } = req.body
        //         if (root === 'toor') {
        //             await prisma.campus.deleteMany()
        //             res.json({ message: 'All campuses deleted' })
        //         }

        //         await prisma.campus.delete({
        //             where: { id }

        //         })
        //         res.status(200).json({ message: 'campus deleted' })

        //     }
        //     catch (error) {
        //         res.status(504).json({ message: error })
        //     }
        //     break

        default:
            res.status(405).json({ message: 'Method not allowed' })
    }

}

export default campusesApi