import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuSingleItem'
import Spinner from '../../../utilities/Spinner'

const MenuItems = ({ dataFromParent, searchArray, addNewItem, isMutating, errorFromAxios, handleSubmit }) => {
    const [searchKeyword, setSearchKeyword] = useState('')
    return (
        <>
            <div className='px-2 h-fit'>
                <input
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    type="text" placeholder="Search..." className="input input-bordered input-md w-full max-w-xs" />
            </div>
            <div className='divider'></div>

            <motion.div
                className="flex-1 px-2 pt-2 space-y-1 overflow-x-hidden">
                {dataFromParent ? (
                    searchArray(dataFromParent, searchKeyword) ?
                        searchArray(dataFromParent, searchKeyword).map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, }}
                                animate={{ opacity: 1, }}
                                transition={{ duration: 0.2 }}
                                key={item.id} >
                                <MenuItem item={item} index={index} />
                            </motion.div>
                        )) :
                        'No results found'
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
        </>
    )
}

export default MenuItems