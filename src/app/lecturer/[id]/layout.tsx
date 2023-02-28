import Image from "next/image";
import { Suspense, use } from "react";
import Loading from "./loading";

// const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/lecturer/?id=${id}`).then((res) => res.json())

// export const revalidate = 0

export default function DashboardLayout({
    children, params,
}: {
    children: React.ReactNode, params: { id: string }
}) {
    // const lecturer = use(fetcher(params.id))

    // const { workInCampus, workInColleges } = lecturer ?? []

    // const UpperImagePicker = () => {
    //     switch (workInCampus?.name) {
    //         case 'Computer Science':
    //             return <Image
    //                 priority
    //                 quality={10}
    //                 className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
    //                 src={`/computer-science.webp`} alt='' fill />

    //         case 'Chalmers':
    //             return <Image src="/images/chalmers.jpg" alt="Chalmers" layout="fill" objectFit="cover" />

    //         default:
    //             return <Image
    //                 priority
    //                 quality={10}
    //                 className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
    //                 src={`/computer-science.webp`} alt='' fill />
    //     }
    // }

    // const getInfoFromId = ((id: string = params?.id) => {
    //     const data = id.split('-')
    //     console.log(data)


    //     const getCollege = (id: string) => {
    //     }


    //     const getCampus = (id: string) => {
    //         const campuses: string[] = ['alexandria', 'aswan']
    //     }



    //     switch (id) {
    //         case 'computer-science':
    //             return {
    //                 name: 'Computer Science',
    //                 image: '/computer-science.webp'
    //             }

    //         case 'chalmers':
    //             return {
    //                 name: 'Chalmers',
    //                 image: '/images/chalmers.jpg'
    //             }

    //         default:
    //             return {

    //             }
    //     }
    // })()


    // const UpperImagePicker = () => {
    //     switch (params?.id as any) {
    //         case (params?.id).toString().includes('computer-science'):
    //             return <Image
    //                 priority
    //                 quality={10}
    //                 className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
    //                 src={`/computer-science.webp`} alt='' fill />

    //         case (params?.id).toString().includes('engineering'):
    //             return <Image
    //                 priority
    //                 quality={10}
    //                 className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
    //                 src={`/computer-science.webp`} alt='' fill />

    //         default:
    //             return <Image
    //                 priority
    //                 quality={10}
    //                 className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
    //                 src={`/computer-science.webp`} alt='' fill />

    //     }
    // }

    return (
        <main className="z-10 bg-base-200 flex-1 w-full m-auto">
                {/* <Loading /> */}
                {children}
            
        </main>

    )
}