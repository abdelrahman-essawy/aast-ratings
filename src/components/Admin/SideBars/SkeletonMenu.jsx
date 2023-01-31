import React from 'react'
import AddIcon from '../../../SVG/AddIcon'

const SkeletonMenu = ({ rows = 10 }) => {

    const createRandomWidth = () => Math.floor(Math.random() * 100) + 60
    return (
        <section className={'w-56  h-full'} >
            <div className="flex flex-col h-full overflow-x-hidden">
                <a href="/" className="block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200">
                    All Campuses
                </a>
                <div className='px-2 h-fit'>

                    <input type="text" placeholder="Search..." className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className='divider'></div>



                <div className="flex-1 w-56 px-2 pt-2 space-y-2 overflow-x-hidden">
                    {
                        [...Array(rows)].map((_, index) => (
                            <div
                                key={index} className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'}`}>
                                <div style={{ width: createRandomWidth() }} className={`h-2 bg-gray-600 rounded-full animate-pulse mt-1`} />
                            </div>
                        ))
                    }
                </div>
                <div
                    className='flex sticky justify-center items-center hover:bg-base-100 p-3 active:bg-base-300 transition duration-300 cursor-pointer bg-base-300 shadow border-t border-gray-600'>
                    <AddIcon className='fill-gray-900 w-7 h-7 cursor-pointer p-1 transition duration-200 ease-in-out' />
                </div>
            </div>
        </section>
    )
}

export default SkeletonMenu
