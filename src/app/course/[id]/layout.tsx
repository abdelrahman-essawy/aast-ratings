import Image from "next/image";
import { use } from "react";


// const fetcher = (id: string) => fetch(`https://aast-ratings.vercel.app/api/course/?id=${id}`).then((res) => res.json())

export default function DashboardLayout({
    children, params,
}: {
    children: React.ReactNode, params: { id: string }
}) {
    // const course = use(fetcher(params.id))

    // const { name, availableInColleges } = course ?? []



    return (
        <main className="z-10 bg-base-200 flex-1 w-full m-auto">
            {/* <Loading /> */}
            {children}

        </main>
    )
}