// import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/db'

const reviewsAPI = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {
        case 'GET':
            try {
                const { campusId, collegeId, courseId, lecturerId } = req.query

                const reviews = await prisma.review.findMany({
                    where: {
                        lecturersReviews: {
                            id: lecturerId as string
                        },
                        campusesReviews: {
                            id: campusId as string
                        },
                        collegesReviews: {
                            id: collegeId as string
                        },
                        coursesReviews: {
                            id: courseId as string
                        }

                    },
                    include: {
                        lecturersReviews: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }

                })

                res.status(200).json(reviews)
            } catch (error) {
                res.status(500).json({ message: error })
                console.log(error)
            }

            break


        case 'POST':
            // Create a new review
            const {
                author,
                rating,
                personalSideRating,
                scientificSideRating,
                recommendationRating,
                courseContent,
                materialQuality,
                realworldPracticality,
                comment,
                campusId,
                collegeId,
                lecturerId,
                courseId } = req.query

            const { avatar } = req.body
            const inRange = <T extends number | Date | string>(n: T, start: T, end?: T) => {
                if (end && start > end) [end, start] = [start, end];
                return end === undefined ? n >= 0 && n < start : n >= start && n < end;
            };

            if (!(personalSideRating || scientificSideRating || recommendationRating || campusId || collegeId || lecturerId || courseId))
                res.status(400).json({
                    message: 'one of lecturerId , campusId, collegeId, courseId is required'
                })


            if (lecturerId) {
                if (!(personalSideRating && scientificSideRating && recommendationRating))
                    res.status(400).json({
                        message: '[personalSideRating, scientificSideRating, recommendationRating] all are required'
                    })
                if (!(inRange(Number(personalSideRating), -1, 6) && inRange(Number(scientificSideRating), -1, 6) && inRange(Number(recommendationRating), -1, 6)))
                    res.status(400).json({ message: 'all ratings must be between 1 and 5' })
                try {

                    await prisma.review.create({
                        data: {
                            avatar: avatar as string,
                            author: author as string,
                            rating: Number(rating),
                            comment: comment as string,
                            personalSideRating: Number(personalSideRating),
                            scientificSideRating: Number(scientificSideRating),
                            recommendationRating: Number(recommendationRating),
                            lecturersReviews: {
                                connect: { id: lecturerId as string }
                            },
                        }
                    })
                    const avgRatings = await prisma.review.aggregate({
                        where: {
                            lecturerId: {
                                equals: lecturerId as string

                            }
                        },
                        _avg: {
                            rating: true,
                            personalSideRating: true,
                            scientificSideRating: true,
                            recommendationRating: true,
                        },

                    })

                    await prisma.lecturer.update({
                        where: {
                            id: lecturerId as string
                        },
                        data: {
                            rating: Math.round((avgRatings._avg.rating) * 10) / 10,
                            personalSideRating: Math.round((avgRatings._avg.personalSideRating) * 10) / 10,
                            scientificSideRating: Math.round((avgRatings._avg.scientificSideRating) * 10) / 10,
                            recommendationRating: Math.round((avgRatings._avg.recommendationRating) * 10) / 10,
                            amountOfReviews: {
                                increment: 1
                            },
                            fiveStar: {
                                increment: Number(rating) === 5 ? 1 : 0
                            },
                            fourStar: {
                                increment: Number(rating) === 4 ? 1 : 0
                            },
                            threeStar: {
                                increment: Number(rating) === 3 ? 1 : 0
                            },
                            twoStar: {
                                increment: Number(rating) === 2 ? 1 : 0
                            },
                            oneStar: {
                                increment: Number(rating) === 1 ? 1 : 0
                            }

                        }
                    })



                    res.status(200).json({ message: `review added for lecturer` })


                } catch (error) {
                    res.status(500).json({ error: 'error, check console log' })
                    console.log(error)
                }
                break
            }

            if (!rating) res.status(400).json({ message: 'rating are required' })
            if (!(inRange(Number(rating), -1, 6))) res.status(400).json({ message: 'rating must be between 1 and 5' })

            try {
                switch (true) {
                    case (campusId && !collegeId && !courseId && !lecturerId):
                        await prisma.review.create({
                            data: {
                                author: author as string,
                                rating: Number(rating),
                                comment: comment as string,
                                campusesReviews: {
                                    connect: {
                                        id: campusId as string
                                    }
                                }
                            }
                        })
                        const campusAvgRating = await prisma.review.aggregate({
                            where: {
                                campusId: {
                                    equals: campusId as string
                                },
                            },
                            _avg: {
                                rating: true
                            },

                        })
                        await prisma.campus.update({
                            where: {
                                id: campusId as string
                            },
                            data: {
                                rating: Math.round(campusAvgRating._avg.rating)
                            }
                        })
                        res.status(200).json({ message: `review added for campus` })
                        break

                    case (collegeId && !campusId && !courseId && !lecturerId):
                        await prisma.review.create({
                            data: {
                                author: author as string,
                                rating: Number(rating),
                                comment: comment as string,
                                collegesReviews: {
                                    connect: {
                                        id: collegeId as string
                                    }
                                }
                            }
                        })
                        const collegeAvgRating = await prisma.review.aggregate({
                            where: {
                                collegeId: {
                                    equals: collegeId as string
                                },
                            },
                            _avg: {
                                rating: true
                            },

                        })
                        await prisma.college.update({
                            where: {
                                id: collegeId as string
                            },
                            data: {
                                rating: Math.round(collegeAvgRating._avg.rating)
                            }
                        })
                        res.status(200).json({ message: `review added for college` })
                        break

                    case (courseId && !campusId && !collegeId && !lecturerId):
                        await prisma.review.create({
                            data: {
                                author: author as string,
                                rating: Number(rating),
                                courseContent: Number(courseContent),
                                materialQuality: Number(materialQuality),
                                realworldPracticality: Number(realworldPracticality),
                                comment: comment as string,
                                coursesReviews: {
                                    connect: {
                                        id: courseId as string
                                    }
                                }
                            }
                        })
                        const courseAvgRatings = await prisma.review.aggregate({
                            where: {
                                courseId: {
                                    equals: courseId as string
                                }
                            },
                            _avg: {
                                rating: true
                            },

                        })
                        await prisma.course.update({
                            where: {
                                id: courseId as string
                            },
                            data: {
                                rating: Math.round(courseAvgRatings._avg.rating * 10) / 10
                            }
                        })
                        res.status(200).json({ message: `review added for course` })
                        break
                    default:
                        res.status(504).json({ message: 'are you trying to review more than one thing ? its not allowed.' })

                }

            } catch (error) {
                res.status(500).json({ error: 'error, check console log' })
                console.log(error)
            }

            break

        case 'PUT':
            try {
                const { id, comment, scoreAction } = req.query
                const updatedReview = await prisma.review.update({
                    where: {
                        id: id as string
                    },
                    data: {
                        comment: comment as string,
                        score: Number(scoreAction) == 1 ? { increment: 1 } : { decrement: 1 }
                    }
                })
                res.status(200).json(updatedReview)
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break

        case 'DELETE':
            try {
                const { root, id } = req.query
                if (root === 'toor') {
                    await prisma.review.deleteMany()
                    res.json({ message: 'All reviews deleted' })
                } else {
                    await prisma.review.delete({ where: { id: id as string } })
                    res.status(200).

                        json({ message: 'Review deleted' })
                }

            } catch (error) {
                res.status(500).json({ error })


            }
            break
        default:
            res.status(405).json({ message: 'Method not allowed' })
            break
    }
}

export default reviewsAPI