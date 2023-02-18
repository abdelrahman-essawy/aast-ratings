import React from 'react'

export const MobileRatings = ({ rating, achievements, amountOfReviews }: { rating: number, achievements: any, amountOfReviews: number }) => {

    const parts = [

        {
            name: 'Reviews',
            html: () => {
                return <p className={`text-center m-auto text-3xl text-md opacity-100`}>{amountOfReviews}</p>
            }
        },
        {
            name: 'Rating',
            html: () => {
                return <p className="text-center text-sm font-medium text-gray-900 dark:text-gray-500">
                    <span className={`text-center m-auto text-3xl text-md opacity-100 col-start-1 ${rating == 3 ? 'text-yellow-400' : rating > 3 ? 'text-green-400' : 'text-red-400'}`}>{rating}</span>/5</p>
            }
        },
        {
            name: 'Achievements',
            html: () => {
                if (achievements?.length == 0) return <p className="text-center text-xl self-baseline mt-2 font-medium text-gray-900 dark:text-gray-500">N/A</p>
                return <p className={`before:content-['#'] before:absolute before:left-9 before:text-2xl before:text-gray-400 text-center text-3xl text-md opacity-100 ${achievements[0].code == 3 ? 'text-[#CD7F32]' : achievements[0].code == 2 ? 'text-[#808080]' : 'text-[#FFD700]'}`}>{achievements[0].code || 'N/A'}</p>
            }
        },
    ]
    return <section className="gap-3 grid grid-cols-3 md:hidden">

        {parts.map(({ name, html }, i) => {
            return (
                <div key={i} className="bg-base-300 rounded-lg p-3 relative">
                    <h2 className="card-title mb-1 text-xs">{name}</h2>
                    {html()}
                </div>
            )
        }
        )}

    </section>



}
