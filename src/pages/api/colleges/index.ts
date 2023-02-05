import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const collegesAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    const { campusId } = req.query
    switch (req.method) {

        case 'GET':
            try {
                const { campusId } = req.query
                if (campusId) {
                    const colleges = await prisma.college.findMany({
                        where: {
                            inCampuses: {
                                some: {
                                    id: campusId as string
                                }
                            }
                        }, orderBy: {
                            name: 'asc'
                        },

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

            const defaultColleges = [
                {
                    name: 'College of Medicine',
                    inCampuses: {
                        connect: {
                            id: "cldf6ed5q002jeq486vyw5h2e"
                        }
                    }
                },
                {
                    name: 'College of Science',
                    inCampuses: {
                        connect: {
                            id: "cldf6ed5q002jeq486vyw5h2e"
                        }
                    }
                },
                {
                    name: 'College of Arts and Sciences',
                    inCampuses: {
                        connect: {
                            id: "cldf6ed5q002jeq486vyw5h2e"
                        }
                    }
                },
            ]


            const { root, colleges } = req.body
            if (root === 'toor') {
                const newCampus = await prisma.college.createMany({
                    data: colleges ? colleges : defaultColleges,
                })
                res.status(200).json(newCampus)
            }


            // Create a new college
            try {
                const { name } = req.body
                const { campusId } = req.query
                const newCollege = await prisma.college.create(
                    {
                        data: {
                            name,
                            inCampuses: {
                                connect: {
                                    id: campusId as string
                                },
                            },
                        },
                        include: {
                            inCampuses: true,
                            hasCourses: true,
                            hasLecturers: true,
                            hasReviews: true,
                        }
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
                const { id, name, campusId } = req.body
                const updatedCollege = await prisma.college.update(
                    {
                        where: {
                            id
                        },
                        data: {
                            name
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
                const { root, id } = req.body
                if (root === 'toor') {
                    await prisma.college.deleteMany()
                    res.json({ message: 'All colleges deleted' })
                }
                await prisma.college.delete({ where: { id } })
                res.status(200).json({ message: 'College deleted' })

            }
            catch (error) {
                res.status(500).json({ message: error })
            }
            break
    }
}
export default collegesAPI