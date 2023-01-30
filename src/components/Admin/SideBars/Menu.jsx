import Link from 'next/link'
import React, { useState } from 'react'
import AddIcon from '../../../SVG/AddIcon'
import Spinner from '../../../utilities/Spinner'
import MenuItem from './MenuItem'
import useSWRMutation from 'swr/mutation'


async function sendRequest(url, { arg }) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg)
    })
}


const Menu = ({ data }) => {
    const [addNewItem, setAddNewItem] = useState(false)

    const { trigger, isMutating } = useSWRMutation('/api/campuses', sendRequest)


    const handleAddNewItem = () => {
        setAddNewItem(!addNewItem)
    }

    const handleSubmit = (value) => {
        trigger({ "name": value })
    }


    return (
        <section className={' w-fit h-full'} >
            <div className="flex flex-col h-full">
                <Link href="/" className="block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200">
                    All Campuses
                </Link>

                <div className="flex-1 w-56 px-2 pt-2 space-y-1">
                    {data ? (
                        data?.map((campus) => (
                            <MenuItem key={campus.id} campus={campus} />
                        ))
                    ) : (
                        <Spinner />
                    )}
                    {
                        addNewItem && (
                            <div
                                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e.target.value)}
                                onSubmit={() => console.log('submit')}
                                className='p-3 rounded-lg bg-base-300 '
                                onClick={() => console.log('edit')}>
                                <input type="text" className='bg-base-300 focus:outline-none w-full' />
                            </div>
                        )

                    }
                    {
                        isMutating ? 'Creating...' : 'Create User'

                    }
                </div>

                <div
                    onClick={() => handleAddNewItem()}
                    className='flex justify-center items-center hover:bg-base-100 p-3 active:bg-base-300 transition duration-300 cursor-pointer bg-base-300 shadow border-t border-gray-600'>
                    <AddIcon className='fill-gray-900 w-7 h-7 cursor-pointer p-1 transition duration-200 ease-in-out' />
                </div>
            </div>
        </section>
    )
}

export default Menu
