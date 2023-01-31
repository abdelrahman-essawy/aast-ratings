import Link from 'next/link'
import React, { useState } from 'react'
import AddIcon from '../../../SVG/AddIcon'
import Spinner from '../../../utilities/Spinner'
import MenuItem from './MenuItem'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'
import useCampusesApi from '../../../hooks/API_Hooks/campuses'
import useCampusesApiDelete from '../../../hooks/API_Hooks/campusesDelete'
import { motion } from 'framer-motion'
// async function sendRequest(url, { arg }) {

//     axios.post(url, arg)
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }


const Menu = ({ dataFromParent }) => {
    const [trigger, isMutating, errorFromAxios] = useCampusesApi()
    const [addNewItem, setAddNewItem] = useState(false)


    const handleAddNewItem = () => {
        setAddNewItem(!addNewItem)
    }

    const handleSubmit = (value) => {
        trigger({ name: value })
        setAddNewItem(!addNewItem)


    }


    return (
        <section className={' w-fit h-full'} >
            <div className="flex flex-col h-full overflow-x-hidden">
                <Link href="/" className="block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200">
                    All Campuses
                </Link>

                <motion.div
                    className="flex-1 w-56 px-2 pt-2 space-y-1 overflow-x-hidden">
                    {dataFromParent ? (
                        dataFromParent?.map((campus) => (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                key={campus.id} >
                                <MenuItem campus={campus} />
                            </motion.div>
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
                                <input
                                    autoFocus
                                    type="text" className='bg-base-300 focus:outline-none w-full' />
                            </div>
                        )

                    }
                    {
                        isMutating && <div className='w-fit h-fit m-auto'><Spinner /></div> || errorFromAxios && 'Error'

                    }
                </motion.div>

                <div
                    onClick={() => handleAddNewItem()}
                    className='flex sticky justify-center items-center hover:bg-base-100 p-3 active:bg-base-300 transition duration-300 cursor-pointer bg-base-300 shadow border-t border-gray-600'>
                    <AddIcon className='fill-gray-900 w-7 h-7 cursor-pointer p-1 transition duration-200 ease-in-out' />
                </div>
            </div>
        </section>
    )
}

export default Menu
