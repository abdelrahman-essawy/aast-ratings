import React from 'react'

const SkeletonMenu = ({ rows = 10 }) => {

    const createRandomWidth = () => Math.floor(Math.random() * 100) + 60
    return (
        <section className={' w-fit'} >
            <div className="flex flex-col ">
                <a href="/" className="block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200">
                    All Campuses
                </a>

                <div className="flex-1 w-56 px-2 pt-2 space-y-5">
                    {
                        [...Array(rows)].map((campus, index) => (
                            <div key={index} className='p-3'>
                                <div style={{ width: createRandomWidth() }} className={`h-2 bg-gray-600 rounded-full animate-pulse mt-1`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SkeletonMenu
