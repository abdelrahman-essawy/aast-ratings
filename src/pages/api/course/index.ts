// import { PrismaClient } from '@prisma/client'
// import { NextApiRequest, NextApiResponse } from 'next'
// const prisma = new PrismaClient()

// const coursesApi = async (req: NextApiRequest, res: NextApiResponse) => {

//     const methods = ['GET', 'POST', 'PUT', 'DELETE']
//     if (!methods.includes(req.method)) {
//         res.status(405).json({ message: 'Method not allowed' })
//     }

//     const getAllCourses = async () => await prisma.course.findMany(
//         {
//             include: {
//                 _count: {
//                     select: {
//                         availableInColleges: true,
//                         taughtByLecturers: true,
//                         Review: true
//         }
//     )

//     const addCourse = async (params: any) => {
//         try {
//             const { name, collegeId, collegeName } = params
//             const newCourse = await prisma.course.create({
//                 data: {
//                     name,
//                     colleges: {
  
//                     }
//                 },
//                 include: {
//                     colleges: true
//                 }


//             })
//             return newCourse
//         } catch (error) {
//             res.status(500).json({ message: error })
//         }

//     }

//     // const updateCourse = async (params: any) => {

//     //     const { name, courseCode, rating, lecturers, campus, reviews, colleges } = params
//     //     const updatedCourse = await prisma.course.update({
//     //         where: { name },
//     //         data: {
//     //             name,
//     //             courseCode,
//     //             rating,
//     //             colleges: {
//     //                 connect: colleges
//     //             },
//     //             lecturers: {
//     //                 connect: lecturers
//     //             },
//     //             campuses: {
//     //                 connect: campus
//     //             },
//     //             reviews: {
//     //                 connect: reviews
//     //             },
//     //         },
//     //         include: {
//     //             lecturers: true,
//     //             reviews: true
//     //         }
//     //     })
//     //     return updatedCourse
//     // }


//     const deleteCourse = async (params: any) => {

//         const { name, root } = params
//         if (root === "toor") {
//             await prisma.course.deleteMany()
//             return { message: 'All courses deleted' }
//         }


//         await prisma.course.delete({
//             where: { name },
//         })
//         res.json({ message: 'Course deleted' })
//     }

//     switch (req.method) {
//         case 'GET':
//             try {
//                 const allCourses = await getAllCourses()
//                 res.json(allCourses)
//             } catch (error) {
//                 res.status(500).json({ message: error })
//             }

//             break
//         case 'POST':
//             try {
//                 const newCourse = await addCourse(req.body)
//                 res.json(newCourse)
//             }
//             catch (error) {
//                 res.status(500).json({ message: error })
//             }

//             break
//         case 'PUT':
//             try {
//                 // const updatedCourse = await updateCourse(req.body)
//                 // res.json(updatedCourse)
//             }
//             catch (error) {
//                 res.status(500).json({ message: error })
//             }
//             break
//         case 'DELETE':
//             try {
//                 const deletedCourse = await deleteCourse(req.body)
//                 res.json(deletedCourse)
//             }
//             catch (error) {
//                 res.status(500).json({ message: error })
//             }

//             break
//     }

//     await prisma.$disconnect()
// }

// export default coursesApi