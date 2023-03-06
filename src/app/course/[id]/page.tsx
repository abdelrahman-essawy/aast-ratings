import Image from "next/image"
import { use } from "react"
import { Colleges } from "../../../components/Course/Colleges"
import { Lecturers } from "../../../components/Course/Lecturers"
import { Achievements } from "../../../components/Lecturer/Achievements"
import { Courses } from "../../../components/Lecturer/Courses"
import { Ratings } from "../../../components/Lecturer/Ratings"
import { Reviews } from "../../../components/Lecturer/Reviews"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { MobileRatings } from "../../../components/Shared/Mobile/Ratings"
import { MobileCourses } from "../../../components/Shared/Mobile/MobileCourses"


// const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/course/?id=${id}`).then((res) => res.json())

export default function Page({ params }: { params: { id: string } }): JSX.Element {


    return

}