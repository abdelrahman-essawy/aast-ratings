import Image from "next/image";
import { use } from "react";


const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/course/?id=${id}`).then((res) => res.json())

export default function DashboardLayout({
    children, params,
}: {
    children: React.ReactNode, params: { id: string }
}) {
    const course = use(fetcher(params.id))

    const { name, availableInColleges } = course ?? []

    const UpperImagePicker = () => {
        switch (availableInColleges?.name) {
            case 'Computer Science':
                return <Image
                    priority
                    quality={10}
                    className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
                    src={`/computer-science.webp`} alt='' fill />

            case 'Chalmers':
                return <Image src="/images/chalmers.jpg" alt="Chalmers" layout="fill" objectFit="cover" />

            default:
                return <Image
                    className="absolute top-0 left-0 w-full h-full object-cover md:blur-3xl blur brightness-75"
                    src={`/computer-science.webp`} alt='' fill />
        }
    }

    return (
        <div className="h-full flex flex-col">

            <div className="relative sm:h-24 h-16 overflow-y-hidden flex justify-center items-center bg-base-300 overflow-hidden">
                <div className="flex justify-center inset-y-1/2 -translate-y-1/2 h-fit absolute z-10 w-full items-center text-center max-w-screen-lg px-4">
                    {
                        availableInColleges &&
                            availableInColleges[0]?.name ?
                            <p className="z-10 bg-clip-text font-bold m-auto sm:m-0 text-2xl sm:text-2xl">{name}</p>
                            :
                            <p className="z-10 bg-clip-text font-bold m-auto sm:m-0 text-2xl sm:text-2xl">Course Name</p>
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