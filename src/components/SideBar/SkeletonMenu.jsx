import React from 'react'
import AddIcon from '../../SVG/AddIcon'

const SkeletonMenu = ({ rows = 10 }) => {

    const createRandomWidth = () => Math.floor(Math.random() * 100) + 60
    return (
        <section className={`w-full h-full`} >
            <div className="flex flex-col h-full overflow-x-hidden w-full">

                <div className='px-4 h-fit'>

                    <input type="text" placeholder="Search..." className="input input-bordered input-md w-full" />
                </div>
                <div className='divider'></div>



                <div className="flex-1 px-2 pt-2 space-y-2 overflow-x-hidden w-full">
                    {
                        [...Array(rows)].map((_, index) => (
                            <div
                                key={index} className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`}>
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
