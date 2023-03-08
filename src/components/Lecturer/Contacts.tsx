import Link from 'next/link'
import React from 'react'


export const Contacts = ({ contacts }) => {
    const className = "cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-100 ease-in-out w-8 h-8 bg-base-100 rounded-full p-2 fill-gray-400"
    const icons = [
        {
            name: 'Facebook',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={className}><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
        },
        {
            name: 'Email',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className={className}><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
        },
        {
            name: 'Phone',
            svg: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287.32 287.32" xmlSpace="preserve"><path d="M267.749 191.076c-14.595-11.729-27.983-17.431-40.93-17.431-18.729 0-32.214 11.914-44.423 24.119-1.404 1.405-3.104 2.06-5.349 2.06-10.288.001-28.387-12.883-53.794-38.293-29.89-29.892-41.191-48.904-33.592-56.506 20.6-20.593 27.031-41.237-4.509-80.462C73.861 10.51 62.814 3.68 51.38 3.68c-15.42 0-27.142 12.326-37.484 23.202-1.788 1.88-3.477 3.656-5.133 5.312-11.689 11.688-11.683 37.182.017 68.2 12.837 34.033 38.183 71.055 71.37 104.247 25.665 25.663 53.59 46.403 80.758 60.328 23.719 12.158 46.726 18.672 64.783 18.672h.007c11.3 0 20.479-2.465 26.541-7.478 12.314-10.181 35.234-29.039 35.081-51.439-.084-12.014-6.667-23.273-19.571-33.648z" /></svg>
        },
        {
            name: 'WhatsApp',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>

        }

    ]


    return (
        <div className="bg-base-300 rounded-lg p-3 md:p-4 h-full md:h-fit w-full">
            <h2 className="card-title md:mb-3 mb-1 text-xs md:text-xl">Contacts</h2>

            {
                contacts?.length > 0 ?
                    <div className="flex flex-row items-center justify-start gap-4">
                        {
                            contacts?.map(({ name, value }: { name: string, value: string }) => (
                                <Link key={name} href={value}>
                                    {
                                        icons.find(icon => icon.name === name)?.svg
                                    }
                                </Link>
                            ))

                        }
                    </div>
                    :
                    <div>
                        <span className='opacity-50 text-sm md:text-base'>
                            No contacts,
                        </span>
                        <Link href="/" className="text-base-content ml-1 underline
                        opacity-50 
                        hover:opacity-100 transition-all ease-in-out duration-150 text-sm md:text-base
                        ">
                            add some?
                        </Link>
                    </div>

            }

        </div >
    )
}
