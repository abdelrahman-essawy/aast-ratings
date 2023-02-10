import Image from "next/image";
import { use } from "react";


const fetcher = (id: string) => fetch(`http://localhost:3000/api/lecturer/?id=${id}`).then((res) => res.json())

export default function DashboardLayout({
    children, params,
}: {
    children: React.ReactNode, params: { id: string }
}) {
    const lecturer = use(fetcher(params.id))

    const { workInCampus, workInColleges } = lecturer ?? []

    const UpperImagePicker = () => {
        switch (workInCampus?.name) {
            case 'Computer Science':
                return <Image
                    className="absolute top-0 left-0 w-full h-full object-cover blur bg-base-100 brightness-75"
                    src={`/computer-science.webp`} alt='' fill />
            
            case 'Chalmers':
                return <Image src="/images/chalmers.jpg" alt="Chalmers" layout="fill" objectFit="cover" />
            
            default:
                return <Image
                    className="absolute top-0 left-0 w-full h-full object-cover blur bg-base-100 brightness-75"
                    src={`/computer-science.webp`} alt='' fill />
        }
    }

    return (
        <div className="h-full flex flex-col">

            <div className="relative sm:h-24 h-16 overflow-y-hidden flex justify-center items-center ">
                <div className="flex justify-between inset-y-1/2 -translate-y-1/2 h-fit absolute z-10 w-full items-center text-center max-w-screen-lg px-4">
                    {
                        workInColleges[0]?.name ?
                            <p className="z-10 bg-clip-text font-bold m-auto sm:m-0 text-2xl sm:text-2xl">{workInColleges[0]?.name ?? 'College'}</p>
                            :
                            <p className="z-10 bg-clip-text font-bold m-auto sm:m-0 text-2xl sm:text-2xl">College</p>
                    }
                    {
                        workInCampus?.name ?
                            <p className="z-10 bg-clip-text font-bold m-auto sm:m-0 text-2xl sm:text-2xl hidden sm:block">{workInCampus?.name ?? 'Campus'} </p>
                            :
                            <p className="z-10 bg-clip-text font-bold m-auto sm:m-0 text-2xl sm:text-2xl hidden sm:block">Campus </p>

                    }
                </div>

                {UpperImagePicker()}



            </div>


            <section className="z-10 bg-base-200 p-2 sm:p-0 flex-1 w-full max-w-screen-lg m-auto">
                {children}
            </section>
        </div>

    )
}