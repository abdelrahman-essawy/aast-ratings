
"use client"
import React, { useEffect } from 'react'

const ReviewModal = ({ name, id }) => {
    const [thisName, seThistName] = React.useState('')
    const [hide, sethide] = React.useState(false)
    useEffect(() => {
        seThistName(name)
        return () => {
            seThistName('')
        };
    }, [name]);
    console.log(name, id)
    return (

        <>
            {
                hide ?
                    null
                    :

                    <div className='absolute'>
                        <div className='fixed inset-0 bg-black opacity-50'></div>
                        <div className='fixed inset-0 flex items-center justify-center'>
                            <div className='bg-white rounded-lg shadow-lg p-4'>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg font-bold'>Edit {name}</h1>
                                    <button
                                        onClick={() => {

                                            sethide(true)
                                        }
                                        }

                                        className='text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out'>
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                                        </svg>
                                    </button>


                                </div>
                                <div className='mt-4'>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Name
                                    </label>
                                    <input type='text' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' placeholder={name} />

                                </div>
                                <div className='mt-4'>
                                </div>
                                <div className='mt-4'>
                                    <button className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'>
                                        Save
                                    </button>

                                    <button className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'>
                                        Delete
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
            }


        </>

    )
}
export default ReviewModal