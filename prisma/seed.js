import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Create dummy Lecturers
    const lecturers = []
    const lecturer1 = await prisma.lecturer.create({
        data: {
            name: "John Doe",
            rating: 4,
            course: {
                create: [
                    {
                        name: "Database Systems",
                        courseCode: "DB101",
                        owner: {
                            connect: { id: lecturers[0].id }
                        },
                    },
                    {
                        name: "Software Engineering",
                        courseCode: "SE201",
                        owner: {
                            connect: { id: lecturers[0].id }
                        },
                    },
                ],
            },
            review: {
                create: [
                    {
                        rating: 4,
                        comment: "Very knowledgeable and approachable",
                        owner: {
                            connect: { id: lecturers[0].id }
                        },
                    },
                    {
                        rating: 5,
                        comment: "Great lectures and clear explanations",
                        owner: {
                            connect: { id: lecturers[0].id }
                        },
                    },
                ],
            },
        },
    })
    lecturers.push(lecturer1)

    const lecturer2 = await prisma.lecturer.create({
        data: {
            name: "Jane Smith",
            rating: 3,
            course: {
                create: [
                    {
                        name: "Web Development",
                        courseCode: "WD101",
                        owner: {
                            connect: { id: lecturers[1].id }
                        },
                    },
                    {
                        name: "Data Science",
                        courseCode: "DS301",
                        owner: {
                            connect: { id: lecturers[1].id }
                        },
                    },
                ],
            },
            review: {
                create: [
                    {
                        rating: 3,
                        comment: "Good, but could be more engaging",
                        owner: {
                            connect: { id: lecturers[1].id }
                        },
                    },
                    {
                        rating: 4,
                        comment: "Very helpful during office hours",
                        owner: {
                            connect: { id: lecturers[1].id }
                        },
                    },
                ],
            },
        },
    })
    lecturers.push(lecturer2)

    console.log(`${lecturers.length} lecturers created!`)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
