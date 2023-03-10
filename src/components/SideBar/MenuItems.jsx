import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuSingleItem'
import Spinner from '../../utilities/Spinner'
import UpperSearchBar from './UpperSearchBar'

const MenuItems = ({ data, create, update, remove, searchArray, addNewElement, isLoading, error, setAddNewItem, forEndPoint, paramsForUrl, searchParams }) => {
    const [searchKeyword, setSearchKeyword] = useState('')
    return (
        <>
            <UpperSearchBar setSearchKeyword={setSearchKeyword} />

            <div className='divider mb-0'></div>

            <motion.div
                className="flex-1 overflow-x-hidden">
                {data[0] ? (
                    searchArray(data, searchKeyword)[0] ?
                        searchArray(data, searchKeyword)
                            .map((element, index) => (
                                <motion.div
                                    initial={{ opacity: 0, }}
                                    animate={{ opacity: 1, }}
                                    transition={{ duration: 0.2 }}
                                    key={element.id} >
                                    <MenuItem
                                        key={element.id}
                                        element={element}
                                        index={index}
                                        update={update}
                                        remove={remove}
                                        error={error}
                                        paramsForUrl={paramsForUrl}
                                        searchParams={searchParams}
                                        />
                                </motion.div>
                            )) :
                        <motion.div
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ duration: 0.1 }}
                            className='flex flex-col items-center justify-center h-full'>
                            <p className='text-lg font-bold'>Nothing matches.</p>
                        </motion.div>
                ) :
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.1 }}
                        className='flex flex-col items-center justify-center h-full'>
                        <h1 className='text-lg font-bold'>No {forEndPoint} found.</h1>
                    </motion.div>
                }
                {
                    addNewElement && (
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