import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuSingleItem'
import Spinner from '../../utilities/Spinner'

const MenuItems = ({ data, create, update, remove, searchArray, addNewItem, isLoading, error, setAddNewItem }) => {
    const [searchKeyword, setSearchKeyword] = useState('')
    return (
        <>
            <div className='px-4 h-fit'>
                <input
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    type="text" placeholder="Search..." className="input input-bordered input-md w-full" />
            </div>
            <div className='divider'></div>

            <motion.div
                className="flex-1 px-2 pt-2 space-y-1 overflow-x-hidden">
                {data && (
                    searchArray(data, searchKeyword) ?
                        searchArray(data, searchKeyword).map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, }}
                                animate={{ opacity: 1, }}
                                transition={{ duration: 0.2 }}
                                key={item.id} >

                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    update={update}
                                    remove={remove}
                                    error={error}
                                />

                            </motion.div>
                        )) :
                        'No results found'
                )
                }
                {
                    addNewItem && (
                        <div onKeyDown={(e) => e.key === 'Enter' && create({ name: e.target.value }, setAddNewItem(false))}
                            className='p-3 rounded-lg bg-base-300'>

                            <input
                                autoFocus
                                type="text" className='bg-base-300 focus:outline-none w-full' />
                        </div>
                    )

                }
                {
                    isLoading && <div className='w-fit h-fit mx-auto mt-4'><Spinner /></div> || error && 'Error'

                }
            </motion.div>
        </>
    )
}

export default MenuItems