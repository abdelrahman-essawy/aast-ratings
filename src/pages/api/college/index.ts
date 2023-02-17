// import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const collegesAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    const { campusId } = req.query
    switch (req.method) {

        case 'GET':
            try {
                const { campusId } = req.query
                if (campusId) {
                    const colleges = await prisma.college.findMany({
                        where: {
                            campusId: {
                                equals: campusId as string
                            }
                        },
                        // orderBy: {
                        //     name: 'asc'
                        // },

                        // include: {
                        //     inCampuses: true,
                        //     hasCourses: true,
                        //     hasLecturers: true,
                        //     hasReviews: true,
                        // }

                    })
                    res.status(200).json(colleges)
                } else {
                    res.status(500).json({ message: 'Please select campus' })
                }
            }
            catch (error) {
                res.status(500).json({ message: error })
            }

            break

        case 'POST':

            // const defaultColleges = [
            //     {
            //         name: 'College of Medicine',
            //         inCampuses: {
            //             connect: {
            //                 id: "cldf6ed5q002jeq486vyw5h2e"
            //             }
            //         }
            //     },
            //     {
            //         name: 'College of Science',
            //         inCampuses: {
            //             connect: {
            //                 id: "cldf6ed5q002jeq486vyw5h2e"
            //             }
            //         }
            //     },
            //     {
            //         name: 'College of Arts and Sciences',
            //         inCampuses: {
            //             connect: {
            //                 id: "cldf6ed5q002jeq486vyw5h2e"
            //             }
            //         }
            //     },
            // ]


            // const { root, colleges } = req.body
            // if (root === 'toor') {
            //     const newCampus = await prisma.college.createMany({
            //         data: colleges ? colleges : defaultColleges,
            //     })
            //     res.status(200).json(newCampus)
            // }


            // Create a new college
            try {
                const { name, campusId } = req.query
                // const { campusId } = req.query
                const newCollege = await prisma.college.create(
                    {
                        data: {
                            id: `${name.toString().toLowerCase().replaceAll(' ', '-')}-${campusId}` as string,
                            name: name as string,
                            inCampus: {
                                connect: {
                                    id: campusId as string
                                },
                            },
                        },
                    }
                )
                res.json(newCollege)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }

            break


        case 'PUT':
            // Update a college
            try {
                const { id, name, campusId, rating } = req.query
                const updatedCollege = await prisma.college.update(
                    {
                        where: {
                            id: id as string
                        },
                        data: {
                            name: name as string,
                            campusId: campusId as string,
                            rating: rating as unknown,
                        }
                    }
                )
                res.status(200).json(updatedCollege)
            }
            catch (error) {
                res.status(500).json({ message: error })
            }
            break


        case 'DELETE':
            try {
                const { root, id } = req.query
                if (root === 'toor') {
                    await prisma.college.deleteMany()
                    res.json({ message: 'All colleges deleted' })
                }
                await prisma.college.delete({ where: { id: id as string } })
                res.status(200).json({ message: 'College deleted' })

            }
            catch (error) {
                res.status(500).json({ message: error })
            }
            break
    }
}
export default collegesAPI